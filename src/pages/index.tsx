import { Button, Htag, Paragraph } from "../../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance="primary" >Primary</Button>
      <Button appearance="ghost" arrow="right" >Ghost</Button>
      <Paragraph fontSize="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repudiandae debitis, perferendis quos molestias voluptates 
        quod dolorum veritatis! Tempora eveniet exercitationem 
        delectus natus veritatis! Sed, voluptates.
      </Paragraph>
    </div>
  )
}
