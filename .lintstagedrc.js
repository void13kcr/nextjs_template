const config = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    "prettier --write '**/*.{js,jsx,ts,tsx}'",
  ],
};

export default config;