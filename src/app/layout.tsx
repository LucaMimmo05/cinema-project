import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Newmann",
    description: "Newmann Landing Page",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="UTF-8" />
            </head>
            <body>{children}</body>
        </html>
    );
}
