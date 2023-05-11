import { Button, Htag, Paragraph, Tag } from "../../components";
import React, { useState } from 'react';

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);


  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>
      <Button 
        appearance="primary" 
        onClick={ 
          () => setCounter( x => x + 1) 
        }
      >Primary set counter</Button>
      <Button appearance="ghost" arrow="right" >Ghost</Button>
      <Paragraph size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repudiandae debitis, perferendis quos molestias voluptates 
        quod dolorum veritatis! Tempora eveniet exercitationem 
        delectus natus veritatis! Sed, voluptates.
      </Paragraph>
      <Paragraph>
        Medium size
      </Paragraph>
      <Paragraph size="s">
        Small size
      </Paragraph>
      <Tag 
        size="m"
        color="primary"
      >
        tag
      </Tag>
      <Tag 
        size="s"
        color="green"
        href="#"
      >
        green
      </Tag>
      <Tag 
        size="m"
        color="red"
        href="#"
      >
        rem
      </Tag>
    </div>
  )
}
