# `react-native-real-path`

A utility package to resolve real file paths from `content://` URIs on Android in React Native.

This package is designed to help developers convert `content://` URIs, commonly used by Android content providers, into actual file system paths. It's particularly useful for accessing files in the device's storage from React Native apps.

## Installation

You can install the package using either `npm` or `yarn`:

```bash
npm install react-native-real-path
# or
yarn add react-native-real-path
```

**Key Features:**

- 🌐 **Android Only**
- ⚡ **Lightweight Library**
- 🚀 **Supports New Architectures (Turbo Modules)**

### Example:

```javascript
import { getRealPath } from 'react-native-real-path';
import { pickSingle } from 'react-native-document-picker';

const result = await pickSingle();
const realPath = getRealPath(result.uri);

console.log(realPath); // Output: actual file system path or original URI
```

### `getRealPath(path: string): string`

- **Input**: A string representing a file path or URI.
- **Output**: A string representing the real file system path if the input is a `content://` URI, or the original path if not.
