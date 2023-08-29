import { API } from "@/app/api";
import { ProductModel } from "@/interfaces/product.interface";




export async function getProduct(category: string): Promise<ProductModel[]> {
  
  const res = await fetch(API.product.find, {
    method: 'post',
    body: JSON.stringify({
      category,
      limit: 10
    }),
    headers: new Headers({'content-type': 'application/json'}),
  });

  console.log(category, res);

  if (!res.ok) {
    return [];
  }

  return res.json();
}