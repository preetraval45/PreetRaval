import coreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts', 'scripts/**'] },
  ...coreWebVitals,
];

export default config;
