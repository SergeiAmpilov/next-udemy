// import Image from 'next/image';
// import styles from './page.module.css';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'My app ppage',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Computed title',
  };
}

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
