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

const companyLinkCell = (entry, size) =>
  `<img src="${entry.logo_url}" alt="${escapeCell(entry.company)} logo" width="${size}" height="${size}" align="absmiddle"> [${escapeCell(entry.company)}](${entry.website})`;

const listCell = (values) => escapeCell(values.join(", "));

const sandboxTable = [
  "| Company | Product | Segment | Status | Pricing | Positioning | State model |",
  "|---|---|---|---|---|---|---|",
  ...sorted(sandboxes.entries).map(
    (entry) =>
      `| ${companyLinkCell(entry, 64)} | ${escapeCell(entry.product)} | ${label(entry.category)} | ${label(entry.status)} | ${label(entry.pricing_model)} | ${escapeCell(entry.positioning)} | ${escapeCell(entry.state_model)} |`
  )
].join("\n");

const sandboxFeatureTable = [
  "| Company | Workload | Isolation | State model | Capabilities | Delivery | Pricing | Status |",
  "|---|---|---|---|---|---|---|---|",
  ...sorted(sandboxes.entries).map(
    (entry) =>
      `| ${companyLinkCell(entry, 64)} | ${escapeCell(entry.workload)} | ${escapeCell(entry.isolation)} | ${escapeCell(entry.state_model)} | ${listCell(entry.capabilities)} | ${label(entry.delivery)} | ${label(entry.pricing_model)} | ${label(entry.status)} |`
  )
].join("\n");

const agentTable = [
  "| Company | Product | Segment | Status | Pricing | Positioning | Primary buyer |",
  "|---|---|---|---|---|---|---|---|",
  ...sorted(agents.entries).map(
    (entry) =>
      `| ${companyLinkCell(entry, 40)} | ${escapeCell(entry.product)} | ${label(entry.category)} | ${label(entry.status)} | ${label(entry.pricing_model)} | ${escapeCell(entry.positioning)} | ${escapeCell(entry.primary_buyer)} |`
  )
].join("\n");

const agentFeatureTable = [
  "| Company | Product | Segment | Capabilities | Integrations | Primary buyer | Delivery | Pricing | Status |",
  "|---|---|---|---|---|---|---|---|---|",
  ...sorted(agents.entries).map(
    (entry) =>
      `| ${companyLinkCell(entry, 64)} | ${escapeCell(entry.product)} | ${label(entry.category)} | ${listCell(entry.capabilities)} | ${listCell(entry.integrations)} | ${escapeCell(entry.primary_buyer)} | ${label(entry.delivery)} | ${label(entry.pricing_model)} | ${label(entry.status)} |`
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
  },
  {
    relativePath: "docs/agent-comparison.md",
    sections: [["agent-feature-table", agentFeatureTable]]
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
