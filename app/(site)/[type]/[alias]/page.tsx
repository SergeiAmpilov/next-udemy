import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { Menu } from "@/components";
import { TopLevelCategory, TopPageModel } from "@/interfaces/top-page.interface";
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

  const page: TopPageModel | null = await getPage(params.alias);

  metadata.title = `${params.alias} - course detail page`;

  if (!page) {
    notFound();
  }

  const products = await getProduct(page.category);


  return (
    <div>
      <h3>Products card detail page</h3>

      <p>alias: { params.alias }</p>
      <p>{ page.title }</p>
      <hr />
      <h3>Продукты:</h3>
      <ul>
        { products.map( p => (
          <li key={p._id}>
            {p.title}
          </li>
        ))}
      </ul>


      
    </div>
  );
}