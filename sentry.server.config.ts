import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://44eab6307536eb280eac28f7c027720b@o4509079668457472.ingest.de.sentry.io/4509082507149392",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
