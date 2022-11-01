// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@storyblok/nuxt','@nuxtjs/tailwindcss'],
	storyblok: {
		accessToken: '1f6MUd26xzQSbwdifpp7kQtt',
		bridge: true,
		apiOptions: {},
		useApiClient: true,
	},
});
