import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'type page'
}

export async function generateStaticParams() {
  
  return [
    { type: 'services' },
    { type: 'books' },
  ];
  
  
}


export default function TypePage ({ params } : { params: { type: string } }): JSX.Element {
  return (
    <>
      <h1>Type page</h1>
      <p>
        { params.type }
      </p>
    </>
  );
}