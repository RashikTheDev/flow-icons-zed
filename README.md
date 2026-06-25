# Flow Icons — Zed IDE Port

An unofficial port of the [Flow Icons](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons) icon pack for [Zed IDE](https://zed.dev), originally created by [Thang Nguyen](https://github.com/thang-nm).

> **Flow Icons is a paid product.** This repository only provides the framework and mapping layer needed to use it inside Zed. You must own a valid copy of the Flow Icons extension installed in VS Code (or fork) to use this. No icon assets are distributed here.

---

## Available Themes

| Theme           | Appearance |
| --------------- | ---------- |
| Flow Dawn       | Dark       |
| Flow Dawn Light | Light      |
| Flow Deep       | Dark       |
| Flow Deep Light | Light      |
| Flow Dim        | Dark       |
| Flow Dim Light  | Light      |
| Flow You        | Dark       |
| Flow You Light  | Light      |

---

## Prerequisites

- [Zed IDE](https://zed.dev) installed
- Flow Icons purchased and installed from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons) in VS Code, or from [Open VSX](https://open-vsx.org/extension/thang-nm/flow-icons) in any VS Code fork (e.g. Cursor)

---

## Installation

### Step 1 — Clone this repository

Clone this repository to a permanent location on your machine. The extension must remain in place after installation, so don't clone it somewhere temporary.

```bash
git clone https://github.com/RashikTheDev/flow-icons-zed.git ~/Desktop/flow-icons-zed
```

### Step 2 — Locate your Flow Icons extension

Navigate to your editor's extensions folder and find the Flow Icons directory. In VS Code the folder is usually named `thang-nm.flow-icons-2.0.3`; in VS Code forks like Cursor it is usually `thang-nm.flow-icons-2.0.3-universal`.

| Platform                                      | Path                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------- |
| **macOS / Linux (VS Code)**                   | `~/.vscode/extensions/thang-nm.flow-icons-2.0.3`                       |
| **macOS / Linux (VS Code fork, e.g. Cursor)** | `~/.cursor/extensions/thang-nm.flow-icons-2.0.3-universal`             |
| **Windows (VS Code)**                         | `%USERPROFILE%\.vscode\extensions\thang-nm.flow-icons-2.0.3`           |
| **Windows (VS Code fork, e.g. Cursor)**       | `%USERPROFILE%\.cursor\extensions\thang-nm.flow-icons-2.0.3-universal` |

> On Windows, you can open File Explorer and paste the path directly into the address bar.

### Step 3 — Copy the icon folders

Inside the Flow Icons extension directory, you will find 8 folders:

```
dawn/
dawn-light/
deep/
deep-light/
dim/
dim-light/
you/
you-light/
```

Copy all 8 of these folders.

### Step 4 — Paste into the cloned repository

Navigate to the cloned repository folder and open the `icons/` directory. Paste the 8 folders there. Your structure should look like this:

```
flow-icons-zed/
└── icons/
    ├── dawn/
    ├── dawn-light/
    ├── deep/
    ├── deep-light/
    ├── dim/
    ├── dim-light/
    ├── you/
    └── you-light/
```

### Step 5 — Install as a Dev Extension in Zed

1. Open Zed
2. Open the Command Palette: `Cmd + Shift + P` (macOS) / `Ctrl + Shift + P` (Windows/Linux)
3. Type and select **`zed: extensions`**
4. Click **Install Dev Extension**
5. Select the root folder of the cloned repository (e.g. `flow-icons-zed/`)

### Step 6 — Select your theme

1. Open the Command Palette again
2. Type and select **`icon theme selector: toggle`**
3. Choose any of the **Flow** icon themes from the list

That's it — you're all set.

---

## Regenerating mappings

When a new version of Flow Icons is released, you can regenerate the Zed icon theme mappings from your VS Code (or fork) extension install:

```bash
node scripts/generate-icon-theme.mjs <path-to-extension>
```

If no path is provided, the script auto-detects the latest `thang-nm.flow-icons-*` extension in `~/.vscode/extensions` or VS Code fork extension dirs such as `~/.cursor/extensions`.

---

## Credits

All icons and original artwork belong to [thang-nm](https://github.com/thang-nm). This repository only contains the Zed extension manifest and JSON mapping files needed to bridge the Flow Icons extension assets from VS Code (or fork) to Zed's icon theme format.

- Original extension on [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons) (VS Code)
- Original extension on [Open VSX](https://open-vsx.org/extension/thang-nm/flow-icons) (VS Code forks)
- Original repository: [github.com/thang-nm/Flow-Icons](https://github.com/thang-nm/Flow-Icons)
