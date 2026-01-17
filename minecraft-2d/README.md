# 🟩 Minecraft-2D

A 2D Minecraft-inspired game built with HTML, CSS, and Vanilla JavaScript. The game allows players to interact with a grid-based world, collect resources using tools, manage an inventory, and rebuild the world dynamically.

![Minecraft-2D Banner](assets/minecraftLogo.svg)

## 📖 Project Description

Minecraft-2D is a browser-based sandbox game that recreates core Minecraft mechanics in a simple 2D environment. Players can mine blocks, collect resources, switch tools, store items in an inventory, and place blocks back into the world.

The project focuses on:

- DOM manipulation
- Game state management
- Modular JavaScript architecture
- Clean separation between logic, UI, and assets

## ✨ Features Implemented

### 🌍 World System

- 2D grid-based world (28 × 14 tiles)
- Predefined initial map (`INITIAL_WORLD`)
- World reset functionality
- Dynamic re-rendering after every interaction

### 🧱 Block Types

- Grass
- Dirt
- Sand
- Stone
- Wood
- Coal
- Iron
- Gold
- Diamond
- Redstone
- Emerald
- Sky & Clouds

### 🛠️ Tools & Rules

Each tool can only interact with specific blocks:

| Tool        | Can Break                                           |
| ----------- | --------------------------------------------------- |
| **Axe**     | Wood                                                |
| **Shovel**  | Dirt, Grass, Sand                                   |
| **Pickaxe** | Stone, Coal, Iron, Gold, Diamond, Redstone, Emerald |

Tool logic is enforced using `TOOL_RULES`.

### 🎒 Inventory System

- Resource collection is tracked
- Inventory UI updates in real-time
- Items can be selected and placed back into the world
- Counts decrease when blocks are placed

### 🎮 Game UI

- Landing page with Start and Getting Started
- Instructions overlay
- Tool selection panel
- Inventory toggle (box button)
- Home & Reload buttons

### 🔄 Game Control

- Restart game (reset world + inventory)
- Return to landing page
- Tool highlighting and selection state

## ▶️ How to Run the Project

### Option 1: Open Directly

1. Download or clone the repository
2. Open `index.html` in your browser

### Option 2: Using Live Server (Recommended)

1. Open the project in VS Code
2. Install Live Server extension
3. Right-click `index.html` → **Open with Live Server**

✅ **No build tools or dependencies required.**

## 📂 Folder Structure

```
minecraft-2d/
│
├── assets/                 # Images, icons, textures
│   ├── grass.jpg
│   ├── stone.jpeg
│   ├── axe.png
│   ├── pickaxe.png
│   ├── minecraftLogo.svg
│   └── ...
│
├── css/
│   ├── main.css           # Global styles & layout
│   ├── ui.css             # UI components (buttons, inventory)
│   └── world.css          # Tile and world styles
│
├── js/
│   ├── main.js            # Entry point & global state
│   ├── constants.js       # Tile types, tools, world templates
│   ├── world.js           # World rendering & interaction logic
│   ├── events.js          # UI event listeners
│   ├── tools.js           # Tool selection logic
│   └── inventory.js       # Inventory state & UI updates
│
├── index.html             # Main HTML structure
└── README.md              # Project documentation
```

## 🧠 Code Architecture Overview

The project follows a **modular JavaScript** approach with clear separation of concerns:

### Module Breakdown

- **`constants.js`** → Static game data (tile types, tools, world templates)
- **`world.js`** → World rendering & interaction logic
- **`inventory.js`** → Inventory state management & UI updates
- **`events.js`** → UI event listeners & user interactions
- **`tools.js`** → Tool selection & behavior
- **`main.js`** → Entry point & global state coordination

### Design Principles

- **State-driven rendering** approach
- Clear separation between logic, UI, and assets
- No external dependencies or frameworks
- Pure vanilla JavaScript (ES6+ modules)

## 🎮 How to Play

1. **Select a Tool**: Click on Axe, Shovel, or Pickaxe
2. **Break Blocks**: Click on blocks that match your tool
3. **Collect Resources**: Broken blocks are added to your inventory
4. **Place Blocks**: Open inventory, select an item, and click on the world to place it
5. **Manage Resources**: Use the inventory to track and place collected materials

---

**Built with ❤️ using HTML, CSS, and JavaScript**
