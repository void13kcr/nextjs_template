const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss}': 'stylelint --fix',
  '*.{html,jsx,tsx}': ['markuplint'],
  '*.{json,js,jsx,ts,tsx}': ['prettier --write'],
};

export default config;
