
# Product List

A React Native application for browsing, searching, sorting, selecting, and deleting products.
The app focuses on efficient list rendering, state management, and scalable architecture.

---

## Features

- Product list display
- Sort products by price
- Search products by title or tag
- Multi-select products
- Delete selected products
- Optimized list rendering using FlashList

---

## Tech Stack

- **React Native** 0.83.1
- **React** 19.2.0
- **TypeScript**
- **Redux Toolkit** – state management
- **React Redux**
- **@shopify/flash-list** – high-performance list rendering
- **@d11/react-native-fast-image** – optimized image loading
- **react-native-svg** 
- **react-native-safe-area-context**

---

## Folder Structure

The project follows a feature-oriented structure to keep logic scalable and maintainable.

```
src/
├── components/        # Reusable UI components
├── features/          # App screens
├── store/             # Redux store, slices, selectors
├── hooks/             # Custom hooks
├── utils/             # Helper functions
├── types/             # TypeScript types
└── assets/            # Images and static assets
```

---

## Design Decisions

### State Management with Redux Toolkit
Redux Toolkit was chosen to manage product state (original data, filtered results, selected items) due to its predictable data flow and built-in immutability guarantees.

### Non-Mutating Data Operations
Sorting, searching, and deletion are implemented without mutating the original product list.  
Instead, derived data is computed using selectors

### Memoized Selectors
`createSelector` is used to derive sorted, filtered, and visible products.
This avoids unnecessary recalculations and improves performance.

### FlashList for Performance
FlashList was selected over FlatList to handle large datasets efficiently, reduce memory usage, and minimize scroll stutters, especially during orientation changes.

### TypeScript-First Approach
Strict typing is used across components, Redux slices, and selectors to:
- Catch bugs early
- Improve maintainability
- Make the codebase easier to reason about

### Separation of Concerns
UI components, business logic, state management, and utilities are clearly separated to keep the codebase scalable and readable.

---

## Prerequisites

- Node.js (LTS recommended)
- Yarn or npm
- Android Studio
- Android SDK & emulator or physical device
- React Native development environment set up  
  https://reactnative.dev/docs/environment-setup

---

## Installation

```bash
git clone <repository-url>
cd product-list
yarn install
```

or

```bash
npm install
```

---

## Running the App

### Android

```bash
yarn android
```

or

```bash
npm run android
```

Ensure an emulator or physical device is connected.

---

## Build APK (Optional)

To generate a debug APK for review:

```bash
cd android
./gradlew assembleDebug
```

APK output:
```
android/app/build/outputs/apk/debug/
```

---

## Known Issues & Limitations

- Not tested on iOS — issues may occur
- No live API — product data is mock/static and may not be consistent
- Deletions are applied via filtering, not persisted beyond app state
