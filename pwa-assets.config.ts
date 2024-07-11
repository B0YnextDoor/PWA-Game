import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset,
  images: ["public/favicon.svg"],
});

// "public/pwa-64x64.png",
//     "public/pwa-192x192.png",
//     "public/pwa-512x512.png",
//     "public/apple-touch-icon-180x180.png",
//     "public/maskable-icon-512x512.png",
//     "public/favicon.ico",
