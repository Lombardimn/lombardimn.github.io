import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    outDir: 'docs', // For deploy on GHPages
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'entry.[hash].js',
                    chunkFileNames: 'chunks/chunk.[hash].js',
                    assetFileNames: 'assets/asset.[hash][extname]',
                },
            },
        },
    }
});
