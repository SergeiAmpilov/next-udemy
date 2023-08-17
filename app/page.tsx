import { Button, Htag } from '@/components';
import { Metadata } from 'next';
import React from 'react';
import Logo from '../public/Group13.svg';

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
      <Htag tag='h1'>Привет, мир</Htag>
      <Htag tag='h2'>Hello world</Htag>
      <Button appearance='primary'>Главная кнопка</Button>
      <Button appearance='ghost'>Прозрачная кнопка</Button>
      <div>
        <Logo />
      </div>
    </div>
  );
}
