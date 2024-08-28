export default defineNuxtPlugin(async () => {
  if (import.meta.server) {
    // cleanup the storyblok cache on every server render to avoid stale data inside the cloudflare server context
    const storyblokApiInstance = useStoryblokApi();
    storyblokApiInstance.clearCacheVersion();
  }
});
