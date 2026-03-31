import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnvDefines = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith('REACT_APP_'))
      .map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
  );

  return {
    plugins: [
      react(),
    ],
    server: {
      port: 3010,
    },
    define: processEnvDefines,
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.jsx',
      passWithNoTests: true,
    },
  };
});
