import { getMenu } from "@/api/menu";

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);


  return (
    <>
      <pre>
        { JSON.stringify(menu) }
      </pre>
      <div>{ menu.length }</div>
    </>
  );

}