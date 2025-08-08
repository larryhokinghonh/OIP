// Utility function to handle base path for static assets
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/OIP' : '';
  return `${basePath}${path}`;
}
