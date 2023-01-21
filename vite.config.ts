import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgr({
			exportAsDefault: true,
			svgrOptions: {
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				svgoConfig: {
					plugins: [
						{name: "removeDimensions", active: true},
					]
				}
			},
		}),
		react(),
	],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
})
