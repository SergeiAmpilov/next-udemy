import { getPage } from "@/api/page";
import { Metadata } from "next";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'product detail page'
}


export default async function ProductCard({ params } : { params: { alias: string } }): Promise<JSX.Element> {

  const page = await getPage(params.alias);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h3>Products card detail page</h3>
      <p>alias: { params.alias }</p>
      <p>{ page.title }</p>
    </div>
  );
}