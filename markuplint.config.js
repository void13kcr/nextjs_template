const config = {
  parser: {
    '\\.[jt]sx$': '@markuplint/jsx-parser',
  },
  specs: {
    '\\.[jt]sx$': '@markuplint/react-spec',
  },
  extends: ['markuplint:recommended'],
};

export default config;
