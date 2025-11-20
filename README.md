# 🎨 React Widget Example App

This is an example application created to test the `@ai-thinks/react-widget` package locally.

## 🚀 Quick Start

### 1. Build, Pack & Install Widget (from root directory)

```bash
# From the root directory
npm run pack     # Clean, build, and pack the widget
npm run unpack   # Install widget to example-app
npm run example  # Start the example app
```

Or run everything in one command:

```bash
npm run pack && npm run unpack && npm run example
```

### 2. Development Workflow

After making changes to the widget:

```bash
npm run pack    # Build and pack the widget
npm run unpack  # Install to example-app
```

## 📦 Available Scripts

### From Root Directory

| Script | Description |
|--------|-------------|
| `npm run clean` | Clean dist directory |
| `npm run build` | Build the widget |
| `npm run pack` | Clean + Build + Pack widget |
| `npm run unpack` | Install widget to example-app |
| `npm run example` | Start example-app dev server |

### From Example App Directory

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Widget Usage

### Basic Implementation

```tsx
import Widget, { IWidgetSettings } from '@ai-thinks/react-widget';

const widgetSettings: IWidgetSettings = {
  widgetIconUrl: 'https://example.com/icon.png',
  botName: 'AI Assistant',
  formInputs: ['firstName', 'lastName', 'emailAddress'],
  aiIconUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Felix',
  inputTextColor: '#1E293B',
  primaryTextColor: '#FFFFFF',
  inputBackgroundColor: '#FFFFFF',
  footerBackgroundColor: '#F9FAFB',
  contentBackgroundColor: '#FFFFFF',
  primaryBackgroundColor: '#4F46E5',
  sentMessageBubbleBgColor: '#4F46E5',
  sentMessageBubbleTextColor: '#FFFFFF',
  receivedMessageBubbleBgColor: '#F1F5F9',
  receivedMessageBubbleTextColor: '#1E293B',
};

function App() {
  return (
    <Widget settings={widgetSettings} />
  );
}
```

### TypeScript Support

The package includes full TypeScript definitions:

```tsx
import type { IWidget, IWidgetSettings, ChatFormFieldName } from '@ai-thinks/react-widget';

// TypeScript will provide autocomplete for all settings
const settings: IWidgetSettings = {
  // ... your settings
};
```

## 🎨 Theme Customization

Customize the widget theme using the `settings` prop:

```tsx
const settings: IWidgetSettings = {
  // Widget Icon
  widgetIconUrl: 'https://example.com/icon.png',
  
  // Bot Configuration
  botName: 'AI Assistant',
  aiIconUrl: 'https://example.com/bot-avatar.png',
  userIconUrl: 'https://example.com/user-avatar.png',
  
  // Form Fields (shown before chat starts)
  formInputs: ['firstName', 'lastName', 'emailAddress', 'phone'],
  
  // Colors
  primaryBackgroundColor: '#4F46E5',      // Main theme color
  contentBackgroundColor: '#FFFFFF',      // Chat background
  footerBackgroundColor: '#F9FAFB',       // Footer background
  inputTextColor: '#1E293B',              // Input text color
  primaryTextColor: '#FFFFFF',            // Primary text color
  inputBackgroundColor: '#FFFFFF',        // Input background
  sentMessageBubbleBgColor: '#4F46E5',    // User message bubble
  sentMessageBubbleTextColor: '#FFFFFF',  // User message text
  receivedMessageBubbleBgColor: '#F1F5F9', // Bot message bubble
  receivedMessageBubbleTextColor: '#1E293B', // Bot message text
};
```

## 🔧 Development Tips

### Hot Module Replacement (HMR)

The example app supports HMR. However, when you make changes to the widget package, you need to rebuild and reinstall:

```bash
npm run pack && npm run unpack
```

### Clear Cache

If changes aren't reflecting:

1. Rebuild and reinstall the widget:
   ```bash
   npm run pack && npm run unpack
   ```

2. Clear browser cache (Hard Refresh: Cmd+Shift+R or Ctrl+Shift+R)

3. Restart the dev server:
   ```bash
   npm run example
   ```
