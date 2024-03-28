import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: true,
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/akalyx.github.io',
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;