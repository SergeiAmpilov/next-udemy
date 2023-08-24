import { Metadata } from 'next';
import React from 'react';



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
  };
}

export default function About(): JSX.Element {
  return (
    <main>
      <h1>Login</h1>
    </main>
  );
}
