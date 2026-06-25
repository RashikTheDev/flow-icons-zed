import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, basename } from "path";
import { homedir } from "os";

const PALETTES = [
  { id: "dim", name: "Flow Dim" },
  { id: "dawn", name: "Flow Dawn" },
  { id: "deep", name: "Flow Deep" },
  { id: "you", name: "Flow You" },
];

function findExtensionPath(argPath) {
  if (argPath) {
    if (!existsSync(argPath)) {
      throw new Error(`Extension path not found: ${argPath}`);
    }
    return argPath;
  }

  const searchDirs = [
    join(homedir(), ".vscode", "extensions"),
    join(homedir(), ".cursor", "extensions"),
  ];

  for (const dir of searchDirs) {
    if (!existsSync(dir)) continue;
    const match = readdirSync(dir)
      .filter((name) => name.startsWith("thang-nm.flow-icons-"))
      .sort()
      .at(-1);
    if (match) return join(dir, match);
  }

  throw new Error(
    "Could not find Flow Icons extension in VS Code or Cursor. Pass the path as an argument.",
  );
}

function resolveIconPath(iconKey, iconDefinitions, iconsDir) {
  const def = iconDefinitions[iconKey];
  if (!def?.iconPath) {
    throw new Error(`Missing icon definition for key: ${iconKey}`);
  }
  const filename = basename(def.iconPath).replace(/\.png$/, ".svg");
  return `./icons/${iconsDir}/${filename}`;
}

function stripLightPrefix(iconKey) {
  return iconKey.startsWith("__") ? iconKey.slice(2) : iconKey;
}

function buildDarkTheme(palette, theme) {
  const { iconDefinitions } = theme;

  const named_directory_icons = {};
  for (const [name, iconKey] of Object.entries(theme.folderNames)) {
    const expandedKey = theme.folderNamesExpanded[name];
    named_directory_icons[name] = {
      collapsed: resolveIconPath(iconKey, iconDefinitions, palette),
      expanded: resolveIconPath(expandedKey, iconDefinitions, palette),
    };
  }

  const file_icons = {};
  for (const key of Object.keys(iconDefinitions)) {
    if (key.startsWith("__")) continue;
    file_icons[key] = {
      path: resolveIconPath(key, iconDefinitions, palette),
    };
  }
  file_icons.default = {
    path: resolveIconPath(theme.file, iconDefinitions, palette),
  };

  return {
    name: PALETTES.find((p) => p.id === palette).name,
    appearance: "dark",
    directory_icons: {
      collapsed: resolveIconPath(theme.folder, iconDefinitions, palette),
      expanded: resolveIconPath(
        theme.folderExpanded,
        iconDefinitions,
        palette,
      ),
    },
    named_directory_icons,
    file_stems: theme.fileNames,
    file_suffixes: theme.fileExtensions,
    file_icons,
  };
}

function buildLightTheme(palette, theme) {
  const { iconDefinitions, light } = theme;
  const iconsDir = `${palette}-light`;
  const paletteInfo = PALETTES.find((p) => p.id === palette);

  const file_stems = {};
  for (const [stem, iconKey] of Object.entries(light.fileNames)) {
    file_stems[stem] = stripLightPrefix(iconKey);
  }

  const file_suffixes = {};
  for (const [suffix, iconKey] of Object.entries(light.fileExtensions)) {
    file_suffixes[suffix] = stripLightPrefix(iconKey);
  }

  const named_directory_icons = {};
  for (const [name, iconKey] of Object.entries(light.folderNames)) {
    const expandedKey = light.folderNamesExpanded[name];
    named_directory_icons[name] = {
      collapsed: resolveIconPath(iconKey, iconDefinitions, iconsDir),
      expanded: resolveIconPath(expandedKey, iconDefinitions, iconsDir),
    };
  }

  const file_icons = {};
  for (const key of Object.keys(iconDefinitions)) {
    if (!key.startsWith("__")) continue;
    file_icons[stripLightPrefix(key)] = {
      path: resolveIconPath(key, iconDefinitions, iconsDir),
    };
  }
  file_icons.default = {
    path: resolveIconPath(light.file, iconDefinitions, iconsDir),
  };

  return {
    name: `${paletteInfo.name} Light`,
    appearance: "light",
    directory_icons: {
      collapsed: resolveIconPath(light.folder, iconDefinitions, iconsDir),
      expanded: resolveIconPath(
        light.folderExpanded,
        iconDefinitions,
        iconsDir,
      ),
    },
    named_directory_icons,
    file_stems,
    file_suffixes,
    file_icons,
  };
}

function generateIconTheme(extPath) {
  const themes = [];

  for (const { id } of PALETTES) {
    const themePath = join(extPath, `${id}.json`);
    if (!existsSync(themePath)) {
      throw new Error(`Missing palette theme file: ${themePath}`);
    }

    const theme = JSON.parse(readFileSync(themePath, "utf8"));
    themes.push(buildDarkTheme(id, theme));
    themes.push(buildLightTheme(id, theme));
  }

  return {
    $schema: "https://zed.dev/schema/icon_themes/v0.3.0.json",
    name: "Flow Icons",
    author: "thang-nm",
    themes,
  };
}

function main() {
  const extPath = findExtensionPath(process.argv[2]);
  const outputPath =
    process.argv[3] ?? join(process.cwd(), "icon_themes", "flow-icons.json");

  console.log(`Using extension from VS Code or Cursor: ${extPath}`);
  const iconTheme = generateIconTheme(extPath);
  writeFileSync(outputPath, `${JSON.stringify(iconTheme, null, 2)}\n`);
  console.log(`Wrote ${iconTheme.themes.length} themes to ${outputPath}`);

  for (const theme of iconTheme.themes) {
    console.log(
      `  ${theme.name}: ${Object.keys(theme.file_stems).length} stems, ${Object.keys(theme.file_suffixes).length} suffixes, ${Object.keys(theme.named_directory_icons).length} named dirs, ${Object.keys(theme.file_icons).length} file icons`,
    );
  }
}

main();
