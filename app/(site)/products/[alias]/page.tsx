import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'product detail page'
}


export default function ProductCard({ params } : { params: { alias: string } }): JSX.Element {
  return (
    <div>
      <h3>Products card detail page</h3>
      <p>alias: { params.alias }</p>
    </div>
  );
}