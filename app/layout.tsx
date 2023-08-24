import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import styles from './layout.module.css'
import { LayoutProps } from './layout.props';
import Header from '@/components/Header/header';
import Sidebar from '@/components/Sidebar/sidebar';
import Footer from '@/components/Footer/footer';


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

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <body className={notoSansFont.className}>
        <Header />
        <div>
          <Sidebar />
          <div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
