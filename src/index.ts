import RealPath from './NativeRealPath';

/**
 * Resolves the real file path from a given URI, if applicable.
 * If the provided path starts with 'content://', it uses the RealPath utility
 * to resolve the real file system path. Otherwise, it returns the path as is.
 *
 * @param {string} path - The file path or URI to resolve.
 * @returns {string} The real file system path if the input is a 'content://' URI,
 *                   or the original input path if it's not a 'content://' URI.
 */
const getRealPath = (path: string): string => {
  return path?.startsWith('content://') ? RealPath.getPath(path) : path;
};

export { getRealPath };
