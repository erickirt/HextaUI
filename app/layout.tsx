import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { DM_Sans, Geist, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";

const dm_sans = Inter({
  subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-code",
  weight: ["500", "700"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dm_sans.className} ${jetbrains_mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          data-website-id="YOUR_WEBSITE_ID"
          data-domain="YOUR_DOMAIN.COM"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {" "}
        <Banner variant="rainbow">
          <Link
            href="https://github.com/sponsors/preetsuthar17"
            className="underline"
          >
            Introducing HextaUI v2 🎉 
          </Link>{" "}
        </Banner>
        <RootProvider>{children}</RootProvider>
        <GoogleAnalytics gaId="G-MYXZQWL3V4" />
        <script
          data-goatcounter="https://hextui.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  );
}
