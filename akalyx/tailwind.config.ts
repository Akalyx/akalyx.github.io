import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { themeAkalyx } from './src/theme-akalyx'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					themeAkalyx
				]
				// preset: [
				// 	{
				// 		name: 'modern',
				// 		enhancements: true,
				// 	},
				// ],
			},
		}),
	],
} satisfies Config;
