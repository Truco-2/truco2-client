import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg',
        }),
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components/'),
            assets: path.resolve(__dirname, './src/assets/'),
            pages: path.resolve(__dirname, './src/pages'),
            types: path.resolve(__dirname, './src/types'),
            helpers: path.resolve(__dirname, './src/helpers'),
            routes: path.resolve(__dirname, './src/routes'),
            services: path.resolve(__dirname, './src/services'),
            hooks: path.resolve(__dirname, './src/hooks'),
            contexts: path.resolve(__dirname, './src/contexts'),
        },
    },
    server: {
        host: true,
        port: 4200,
        watch: {
            usePolling: true,
        },
    },
    envDir: './environments',
});
