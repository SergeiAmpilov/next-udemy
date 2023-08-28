import { getMenu } from "@/api/menu";

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  console.log(menu);


  return (
    <>
      <pre>
        { JSON.stringify(menu) }
      </pre>
      <div>{ menu.length }</div>
    </>
  );

}