import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ include: ['lib'] })],
	build: {
		copyPublicDir: false,
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
		},
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es'],
		},
	},
	resolve: {
		alias: {
			'@src': resolve(__dirname, 'src'),
			'@lib': resolve(__dirname, 'lib'),
		},
	},
})
