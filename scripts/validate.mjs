import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const datasets = ["data/sandboxes.json", "data/agents.json"];
const allowedRoles = new Set([
  "startup-scaleup",
  "frontier-lab-benchmark",
  "established-platform"
]);
const allowedSourceModels = new Set([
  "open-core",
  "open-source-sdk",
  "proprietary"
]);
const requiredCommon = [
  "id",
  "company",
  "product",
  "market_role",
  "category",
  "positioning",
  "delivery",
  "source_model",
  "status",
  "pricing_model",
  "capabilities",
  "integrations",
  "website",
  "logo_url",
  "source_urls",
  "last_verified"
];

const fail = (message) => {
  throw new Error(message);
};

const isHttpsUrl = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

const recordsById = new Map();

for (const relativePath of datasets) {
  const dataset = JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
  if (dataset.schema_version !== 1) fail(`${relativePath}: unsupported schema_version`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dataset.last_verified)) {
    fail(`${relativePath}: invalid last_verified date`);
  }
  if (!Array.isArray(dataset.entries) || dataset.entries.length === 0) {
    fail(`${relativePath}: entries must be a non-empty array`);
  }

  const localIds = new Set();
  for (const entry of dataset.entries) {
    for (const field of requiredCommon) {
      if (entry[field] === undefined || entry[field] === "") {
        fail(`${relativePath}:${entry.id ?? "unknown"}: missing ${field}`);
      }
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id)) {
      fail(`${relativePath}:${entry.id}: id must use kebab-case`);
    }
    if (localIds.has(entry.id)) fail(`${relativePath}:${entry.id}: duplicate id`);
    localIds.add(entry.id);
    if (!allowedRoles.has(entry.market_role)) {
      fail(`${relativePath}:${entry.id}: invalid market_role`);
    }
    if (!allowedSourceModels.has(entry.source_model)) {
      fail(`${relativePath}:${entry.id}: invalid source_model`);
    }
    if (!Array.isArray(entry.capabilities) || entry.capabilities.length === 0) {
      fail(`${relativePath}:${entry.id}: capabilities must be non-empty`);
    }
    if (!Array.isArray(entry.integrations) || entry.integrations.length === 0) {
      fail(`${relativePath}:${entry.id}: integrations must be non-empty`);
    }
    if (!isHttpsUrl(entry.website)) fail(`${relativePath}:${entry.id}: invalid website`);
    if (!isHttpsUrl(entry.logo_url)) fail(`${relativePath}:${entry.id}: invalid logo_url`);
    if (!Array.isArray(entry.source_urls) || entry.source_urls.length === 0) {
      fail(`${relativePath}:${entry.id}: source_urls must be non-empty`);
    }
    for (const sourceUrl of entry.source_urls) {
      if (!isHttpsUrl(sourceUrl)) fail(`${relativePath}:${entry.id}: invalid source URL`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.last_verified)) {
      fail(`${relativePath}:${entry.id}: invalid last_verified date`);
    }

    const existing = recordsById.get(entry.id);
    if (existing) {
      for (const field of ["company", "website", "logo_url"]) {
        if (existing[field] !== entry[field]) {
          fail(`${entry.id}: ${field} differs across datasets`);
        }
      }
    } else {
      recordsById.set(entry.id, entry);
    }
  }
}

const checkedExtensions = new Set([".json", ".md", ".mjs", ".yml", ".yaml"]);

const assertAsciiFiles = async (directory) => {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (item.name === ".git" || item.name === "node_modules") continue;
    const itemPath = path.join(directory, item.name);
    if (item.isDirectory()) {
      await assertAsciiFiles(itemPath);
    } else if (checkedExtensions.has(path.extname(item.name))) {
      const content = await readFile(itemPath, "utf8");
      const match = content.match(/[^\x00-\x7F]/);
      if (match) {
        fail(`${path.relative(root, itemPath)}: non-ASCII character found`);
      }
    }
  }
};

await assertAsciiFiles(root);
console.log(`Validated ${recordsById.size} unique companies across ${datasets.length} datasets`);
