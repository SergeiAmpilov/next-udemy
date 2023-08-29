import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { Metadata } from "next";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'product detail page'
}

export async function generateStaticParams() {
  
  const menu = await getMenu(0);

  const result = menu.flatMap((item) => item.pages.map((page) => ({
    alias: page.alias
  })));

  console.log(result);

  return result;
  
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