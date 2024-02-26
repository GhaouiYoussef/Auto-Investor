


/** 
 * @type {import('next').NextConfig} 
 * This line is a JSDoc comment that specifies the type of the object that follows. 
 * It's saying that the object should conform to the NextConfig type from the 'next' package.
 */

// Import the default export from the "@ducanh2912/next-pwa" package.
// This package is used to turn a Next.js application into a Progressive Web App (PWA).
const withPWA = require("@ducanh2912/next-pwa").default({
    // The 'dest' option specifies the directory where the service worker file will be created.
    dest: "public",

    // If 'cacheOnFrontEndNav' is true, then all navigation requests are cached on the frontend.
    cacheOnFrontEndNav: true,

    // If 'aggressiveFrontEndNavCaching' is true, then all navigation requests are cached aggressively on the frontend.
    aggressiveFrontEndNavCaching: true,

    // If 'reloadOnOnline' is true, the page will reload when the network status changes to online.
    reloadOnOnline: true,

    // If 'swMinify' is true, the service worker file will be minified.
    swMinify: true,

    // If 'disable' is false, the PWA features will be enabled.
    disable: false,
    
    // 'workboxOptions' allows you to customize the behavior of the Workbox library, which is used under the hood for the PWA features.
    workboxOptions: {
        // If 'disableDevLogs' is true, the development logs from Workbox will be disabled.
        disableDevLogs: true,
    },
    // The 'disable' option can also be set based on the NODE_ENV environment variable.
    // If NODE_ENV is "development", the PWA features will be disabled.
    // This line is commented out, so it's not currently in effect.
    // disable: process.env.NODE_ENV === "development",
});

// Define an empty configuration object for the Next.js application.
const nextConfig = {};

// Export the Next.js configuration object, but first pass it through the 'withPWA' function to add PWA features.
export default withPWA(nextConfig);

// The following line is an alternative way to export the configuration object, but it's commented out, so it's not currently in effect.
// export default nextConfig;
