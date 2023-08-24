'use client'

import { Metadata } from 'next';
import React, { useState } from 'react';



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Page about',
  };
}

export default function About(): JSX.Element {
  return (
    <main>
      <h1>This is about page</h1>
    </main>
  );
}
