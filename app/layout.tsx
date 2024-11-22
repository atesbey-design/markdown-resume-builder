import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume Builder - Create Professional Resumes',
  description: 'Create beautiful, professional resumes in minutes using our Markdown-based resume builder. Choose from multiple themes and export to PDF.',
  keywords: ['resume builder', 'cv maker', 'markdown resume', 'professional resume'],
  authors: [{ name: 'Resume Builder Team' }],
  creator: 'Resume Builder',
  publisher: 'Resume Builder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: 'any',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      }
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Resume Builder - Create Professional Resumes',
    description: 'Create beautiful, professional resumes in minutes using our Markdown-based resume builder.',
    url: 'https://resumebuilder.com',
    siteName: 'Resume Builder',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Resume Builder Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume Builder - Create Professional Resumes',
    description: 'Create beautiful, professional resumes in minutes using our Markdown-based resume builder.',
    images: ['/logo.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="text-center py-8 mt-auto bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
          Powered by {" "}
            <a 
              href="https://omtunlabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
            >
               OmtunLabs
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
