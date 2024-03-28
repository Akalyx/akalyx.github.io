// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // Passing options to adapter-static
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false
    })
  }
};

export default config;
