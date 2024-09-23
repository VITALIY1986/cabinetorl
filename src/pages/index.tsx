import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import Service from "@/components/pages/Service";
import ContactPage from "@/components/pages/ContactPage";
import BasicsOrtodont from "@/components/pages/BasicsOrtodont";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';

interface Post {
  slug: string;
  title: string;
  // Другие поля...
}

interface Props {
  posts: Post[]; // Обязательно указываем posts
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts(true);
  
  return {
    props: {
      posts,
    },
  };
};

const Index: FC<Props> = ({ posts }) => {
  return (
    <>
      <Layout>
        <HomePage />
        {posts.map((post: Post) => ( // Явно указываем тип post
          <div key={post.slug}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <Service />
        {/* <BasicsOrtodont /> */}
        <AboutPage />
        <ContactPage />
      </Layout>
    </>
  );
};

export default Index;
