import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

const notoSansFont = Noto_Sans({ 
  subsets: ['cyrillic', 'latin'], 
  weight: ['300', '400', '500', '700'],
  preload: true,
  display: 'swap' 
});

export const metadata: Metadata = {
  title: 'Top app - пожалуй лучшей топ',
  description: 'Top app это лучший топ рейтинг в интернете',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={notoSansFont.className}>{children}</body>
    </html>
  );
}
