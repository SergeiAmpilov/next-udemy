import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { Menu } from "@/components";
import { Metadata } from "next";
import { notFound } from 'next/navigation';


export const metadata: Metadata = {
  title: 'course detail page'
}

export async function generateStaticParams() {
  
  const menu = await getMenu(0);
  
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
  
}



export default async function ProductCard({ params } : { params: { alias: string } }): Promise<JSX.Element> {

  const page = await getPage(params.alias);

  metadata.title = `${params.alias} - course detail page`;

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h3>Products card detail page</h3>
      <Menu category={0} />

      <p>alias: { params.alias }</p>
      <p>{ page.title }</p>
    </div>
  );
}