import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (relativePath) =>
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));

const [sandboxes, agents] = await Promise.all([
  readJson("data/sandboxes.json"),
  readJson("data/agents.json")
]);

const roleOrder = new Map([
  ["startup-scaleup", 0],
  ["frontier-lab-benchmark", 1],
  ["established-platform", 2]
]);

const escapeCell = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const label = (value) => value.replaceAll("-", " ");
const sorted = (entries) =>
  [...entries].sort((a, b) => {
    const roleDelta = roleOrder.get(a.market_role) - roleOrder.get(b.market_role);
    return roleDelta || a.company.localeCompare(b.company);
  });

const companyCell = (entry) =>
  `<img src="${entry.logo_url}" alt="${escapeCell(entry.company)} logo" width="40" height="40">`;

const featureCompanyCell = (entry) =>
  `<img src="${entry.logo_url}" alt="${escapeCell(entry.company)} logo" width="64" height="64">`;

const sandboxTable = [
  "| | Company | Product | Segment | Positioning | State model |",
  "|---|---|---|---|---|---|",
  ...sorted(sandboxes.entries).map(
    (entry) =>
      `| ${companyCell(entry)} | [${escapeCell(entry.company)}](${entry.website}) | ${escapeCell(entry.product)} | ${label(entry.category)} | ${escapeCell(entry.positioning)} | ${escapeCell(entry.state_model)} |`
  )
].join("\n");

const sandboxFeatureTable = [
  "| | Company | Workload | Isolation | State model | Delivery | Source model |",
  "|---|---|---|---|---|---|---|",
  ...sorted(sandboxes.entries).map(
    (entry) =>
      `| ${featureCompanyCell(entry)} | [${escapeCell(entry.company)}](${entry.website}) | ${escapeCell(entry.workload)} | ${escapeCell(entry.isolation)} | ${escapeCell(entry.state_model)} | ${label(entry.delivery)} | ${label(entry.source_model)} |`
  )
].join("\n");

const agentTable = [
  "| | Company | Product | Segment | Positioning | Primary buyer |",
  "|---|---|---|---|---|---|",
  ...sorted(agents.entries).map(
    (entry) =>
      `| ${companyCell(entry)} | [${escapeCell(entry.company)}](${entry.website}) | ${escapeCell(entry.product)} | ${label(entry.category)} | ${escapeCell(entry.positioning)} | ${escapeCell(entry.primary_buyer)} |`
  )
].join("\n");

const uniqueCompanies = new Set([
  ...sandboxes.entries.map((entry) => entry.id),
  ...agents.entries.map((entry) => entry.id)
]);
const stats = [
  `**${uniqueCompanies.size} companies** tracked across **${sandboxes.entries.length} sandbox products** and **${agents.entries.length} agent products**.`,
  "",
  `Last verified: **${sandboxes.last_verified}**. Product claims link to first-party sources.`
].join("\n");

const replaceSection = (document, name, content) => {
  const pattern = new RegExp(`<!-- ${name}:start -->[\\s\\S]*?<!-- ${name}:end -->`);
  const replacement = `<!-- ${name}:start -->\n${content}\n<!-- ${name}:end -->`;
  if (!pattern.test(document)) {
    throw new Error(`Missing generated section: ${name}`);
  }
  return document.replace(pattern, replacement);
};

const targets = [
  {
    relativePath: "README.md",
    sections: [
      ["stats", stats],
      ["sandbox-table", sandboxTable],
      ["agent-table", agentTable]
    ]
  },
  {
    relativePath: "docs/sandbox-comparison.md",
    sections: [["sandbox-feature-table", sandboxFeatureTable]]
  }
];

for (const target of targets) {
  const targetPath = path.join(root, target.relativePath);
  const current = await readFile(targetPath, "utf8");
  const generated = target.sections.reduce(
    (document, [name, content]) => replaceSection(document, name, content),
    current
  );

  if (process.argv.includes("--check")) {
    if (generated !== current) {
      console.error(`${target.relativePath} is stale. Run: npm run build`);
      process.exitCode = 1;
    }
  } else {
    await writeFile(targetPath, generated);
    console.log(`Updated ${target.relativePath}`);
  }
}
