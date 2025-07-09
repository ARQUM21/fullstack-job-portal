// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://70bc44e9acee9acdc0c3dbcbf698cca5@o4509631801131008.ingest.us.sentry.io/4509631808995328",
  integrations : [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
//   tracesSampleRate: 1.0,
  });
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  Sentry.profiler.startProfiler()
  
  Sentry.startSpan({
    name: "My First Transaction",
},() => {

});


Sentry.profiler.stopProfiler();