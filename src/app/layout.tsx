import type { Metadata } from 'next';
import '@devAssets/styles/index.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" data-locator-target="webstorm">
            <body>{children}</body>
        </html>
    );
}
