import type { Metadata } from 'next';
import { EB_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shri Krishna Mandir — Indian Association of New Zealand',
  description:
    'Building a divine home for Lord Krishna in New Zealand — a landmark temple where Vedic tradition meets the serenity of the Southern Alps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
