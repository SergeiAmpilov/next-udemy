import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import styles from './layout.module.css'
import { LayoutProps } from './layout.props';
import Header from '@/components/Header/header';
import Sidebar from '@/components/Sidebar/sidebar';
import Footer from '@/components/Footer/footer';
import { FunctionComponent } from 'react';
import cn from 'classnames';
import { AppContextProvider, IAppContext } from '@/context/app.context';


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
      <body className={cn(notoSansFont.className, styles.wrapper)}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <main className={styles.body}>
          {children}
        </main>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}



export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent (props: T): JSX.Element {
    return (
      <AppContextProvider menu={ props.menu } firstCategory={ props.firstCategory}>
        <RootLayout>
          <Component {...props } />
        </RootLayout>
      </AppContextProvider>
    );
  }
}