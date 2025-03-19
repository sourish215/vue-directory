# Vue Directory Viewer

A lightweight, interactive directory explorer built with Vue and TypeScript. This application displays a hierarchical file system with expandable folders and detailed file information.

## Features

- **Interactive Directory Browser**: Navigate through folders with expandable/collapsible UI
- **File Details**: View file names, sizes, and modification dates
- **Smart Formatting**:
  - Automatic unit conversion for file sizes (bytes, KB, MB, GB, TB)
  - Intelligent date formatting with localization support
  - Optional relative time display (e.g., "5 minutes ago")
- **Type-Safe Implementation**: Built with TypeScript for robust type checking
- **Modern UI**: Clean, responsive interface with hover effects

## Installation

1. Clone the repository
2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

## Usage

The directory structure is defined in `src/data/dummyData.ts`. You can modify this file to change the displayed directory structure.

- Click on folders to expand/collapse them
- Files display their name, size, and last modified date
- File sizes automatically convert to appropriate units

## Project Structure

```
├── src/
│   ├── components/           # Vue components
│   │   ├── DirectoryContainer.vue  # Main container
│   │   ├── FolderComponent.vue     # Folder display
│   │   └── FileComponent.vue       # File display
│   ├── types/                # TypeScript type definitions
│   │   └── directoryTypes.ts # File and folder type interfaces
│   ├── utils/                # Utility functions
│   │   └── helper.ts         # Formatting helpers
│   └── data/                 # Data files
│       └── dummyData.ts      # Sample directory structure
```

## Customization

The date formatting can be customized with options:

```typescript
// Format with relative time (e.g., "5 minutes ago")
formatDate(dateString, { useRelative: true });

// Format with different date/time styles
formatDate(dateString, { dateStyle: "full", timeStyle: "medium" });
```

## License

MIT
