import { firstLevelMenu } from "@/helpers/helpers";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'type page'
}

export async function generateStaticParams() { 
  return firstLevelMenu.map(m => {
    return { type: m.route }
  }); 
}


export default function TypePage ({ params } : { params: { type: string } }): JSX.Element {

  if (!firstLevelMenu.find(el => el.route == params.type)) {
    throw new Error();

  }

  return (
    <>
      <h1>Type page</h1>
      <p>
        { params.type }
      </p>
    </>
  );
}