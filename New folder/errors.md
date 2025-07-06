Uncaught Error: Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch
    at throwOnHydrationMismatch (react-dom-client.development.js:4432:11)
    at beginWork (react-dom-client.development.js:10804:17)
    at runWithFiberInDEV (react-dom-client.development.js:844:30)
    at performUnitOfWork (react-dom-client.development.js:15257:22)
    at workLoopConcurrentByScheduler (react-dom-client.development.js:15251:9)
    at renderRootConcurrent (react-dom-client.development.js:15226:15)
    at performWorkOnRoot (react-dom-client.development.js:14524:13)
    at performWorkOnRootViaSchedulerTask (react-dom-client.development.js:16349:7)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:45:48)
    at p (<anonymous>)
    at Staff_profile (Staff_profile.jsx:34:11)
    at MemberProfile (page.jsx:35:7)