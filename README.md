# Flow Icons — Zed IDE Port

An unofficial port of the [Flow Icons](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons) icon pack for [Zed IDE](https://zed.dev), originally created by [Thang Nguyen](https://github.com/thang-nm).

> **Flow Icons is a paid product.** This repository only provides the framework and mapping layer needed to use it inside Zed. You must own a valid copy of the VS Code extension to use this. No icon assets are distributed here.

---

## Available Themes

| Theme | Appearance |
|---|---|
| Flow Dawn | Dark |
| Flow Dawn Light | Light |
| Flow Deep | Dark |
| Flow Deep Light | Light |
| Flow Dim | Dark |
| Flow Dim Light | Light |

---

## Prerequisites

- [Zed IDE](https://zed.dev) installed
- [Flow Icons for VS Code](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons) purchased and installed in VS Code

---

## Installation

### Step 1 — Clone this repository

Clone this repository to a permanent location on your machine. The extension must remain in place after installation, so don't clone it somewhere temporary.

```bash
git clone https://github.com/YOUR_USERNAME/flow-icons-zed.git ~/Desktop/flow-icons-zed
```

### Step 2 — Locate your Flow Icons VS Code extension

Navigate to your VS Code extensions folder and find the Flow Icons directory. The folder is almost always named `thang-nm.flow-icons-1.3.1`.

| Platform | Path |
|---|---|
| **macOS / Linux** | `~/.vscode/extensions/thang-nm.flow-icons-1.3.1` |
| **Windows** | `%USERPROFILE%\.vscode\extensions\thang-nm.flow-icons-1.3.1` |

> On Windows, you can open File Explorer and paste the path directly into the address bar.

### Step 3 — Copy the icon folders

Inside `thang-nm.flow-icons-1.3.1`, you will find 6 folders:

```
dawn/
dawn-light/
deep/
deep-light/
dim/
dim-light/
```

Copy all 6 of these folders.

### Step 4 — Paste into the cloned repository

Navigate to the cloned repository folder and open the `icons/` directory. Paste the 6 folders there. Your structure should look like this:

```
flow-icons-zed/
└── icons/
    ├── dawn/
    ├── dawn-light/
    ├── deep/
    ├── deep-light/
    ├── dim/
    └── dim-light/
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

## Credits

All icons and original artwork belong to [thang-nm](https://github.com/thang-nm). This repository only contains the Zed extension manifest and JSON mapping files needed to bridge the VS Code extension assets to Zed's icon theme format.

- Original VS Code extension: [Flow Icons on the Marketplace](https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons)
- Original repository: [github.com/thang-nm/Flow-Icons](https://github.com/thang-nm/Flow-Icons)
