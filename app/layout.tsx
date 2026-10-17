import type { Metadata, Viewport } from "next";

import "./globals.css";

// Update this to the custom domain once it is attached in Amplify.
const SITE_URL = "https://main.d1uwuwvo1rtugl.amplifyapp.com";
const TITLE = "Trilogy";
const DESCRIPTION = "We invest in companies driven by quantitative science.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: TITLE,
  openGraph: {
    type: "website",
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
