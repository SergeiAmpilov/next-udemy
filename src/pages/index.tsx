import React, { useState, useEffect } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../../components";
import { Layout, withLayout } from "../../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button 
        appearance="primary" 
        onClick={ 
          () => setCounter( x => x + 1) 
        }
      >Primary set counter</Button>
      <Button appearance="ghost" arrow="right" >Ghost</Button>
      <Paragraph size="l">
        Lorem ipsum dolor sit amet consectetur
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

    </>
  )
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}