import React, { useState, useEffect } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../../components";

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(2);

  useEffect(() => {
    console.log('Mounted');

    return function cleanup() {
      console.log('unmount', counter);
    };

  }, []);

  useEffect(() => {
    console.log('counter', counter);

  }, [counter]);


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
      <Rating
        isEditable={true}
        rating={rating}
        setRating={setRating}
      />
    </div>
  )
}
