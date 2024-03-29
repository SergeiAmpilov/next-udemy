import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProduct } from "@/api/product";
import { Menu } from "@/components";
import { firstLevelMenu } from "@/helpers/helpers";
import { TopLevelCategory, TopPageModel } from "@/interfaces/top-page.interface";
import { Metadata } from "next";
import { notFound } from 'next/navigation';


export const metadata: Metadata = {
  title: 'course detail page'
}

export async function generateStaticParams() {
  
  let paths: { alias: string }[] = [];
  for (const m of firstLevelMenu) {
    const menu = await getMenu(m.id);
    paths = paths.concat(menu.flatMap((item) => item.pages.map((page) => ({ type: m.route, alias: page.alias }))));
  }
  
  return paths;
  
}



export default async function ProductCard({ params } : { params: { type: string, alias: string } }): Promise<JSX.Element> {

  const page: TopPageModel | null = await getPage(params.alias);

  metadata.title = `${params.alias} - course detail page`;

  if (!page) {
    notFound();
  }

  const products = await getProduct(page.category);


  return (
    <div>
      <h3>Products card detail page</h3>

      <div>Type: { params.type }</div>
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