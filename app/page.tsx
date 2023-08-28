'use client'

import { Button, Htag, Ptag, Rating, Tag } from '@/components';
import { Metadata } from 'next';
import React, { useState } from 'react';
import Logo from '../public/Group13.svg';

// export const metadata: Metadata = {
//   title: 'My app ppage',
// };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Computed title',
  };
}

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(2);

  console.log('I am home');

  const oldMarkdown: JSX.Element = (
    <div>
      <Htag tag='h1'>Привет, мир</Htag>
      <Htag tag='h2'>Hello world</Htag>
      <Button appearance='primary' arrow='right'>Главная кнопка</Button>
      <Button appearance='ghost' arrow='down'>Прозрачная кнопка</Button>
      <div>
        <Logo />
      </div>
      <Ptag size='s'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus, explicabo minima ratione esse doloremque, saepe, at dicta fugiat temporibus nesciunt. Cumque unde repudiandae perspiciatis? Rem fugit laudantium corrupti voluptatibus ex accusamus, dolorum, dignissimos modi beatae debitis quae laborum fugiat.
      </Ptag>
      <Ptag size='m'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus, explicabo minima ratione esse doloremque, saepe, at dicta fugiat temporibus nesciunt. Cumque unde repudiandae perspiciatis? Rem fugit laudantium corrupti voluptatibus ex accusamus, dolorum, dignissimos modi beatae debitis quae laborum fugiat.
      </Ptag>
      <Ptag size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus, explicabo minima ratione esse doloremque, saepe, at dicta fugiat temporibus nesciunt. Cumque unde repudiandae perspiciatis? Rem fugit laudantium corrupti voluptatibus ex accusamus, dolorum, dignissimos modi beatae debitis quae laborum fugiat.
      </Ptag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag size='s' color='ghost' href='https://github.com/AlariCode/top-app-demo/blob/main/next.config.js'>Green</Tag>
      <div>
        <Rating rating={3} />
      </div>
      <div>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
      </div>
    </div>
  );


  return oldMarkdown;
}
