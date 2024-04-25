module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'pnpm format',
    () => 'pnpm check',
    () => 'tsc -p tsconfig.json --noEmit',
  ],
};
