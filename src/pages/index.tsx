import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import Service from "@/components/pages/Service";
import ContactPage from "@/components/pages/ContactPage";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';

interface Post {
	videoId: string;
  slug: string;
  title: string;
  coverImage: {
    url: string; // Убедитесь, что это объект с полем url
  };
  tags: { [key: string]: string }; // Обновляем поле для тегов как объект
}

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts(true);
  
  return {
    props: {
      posts,
    },
  };
};

// Функция для фильтрации постов по тегу
const filterPostsByTag = (posts: Post[], tagName: string): Post[] => {
  return posts.filter((post) => {
    const tagsArray = Object.values(post.tags || {}); // Преобразуем объект в массив
    return tagsArray.some(tag => tag === tagName); // Проверяем наличие тега
  });
};

const Index: FC<Props> = ({ posts }) => {
  const heroPost = posts[0];

  // Пример фильтрации постов по тегу "homepage"
  const filteredPosts = filterPostsByTag(posts, "homepage");

  return (
    <>
      <Layout>
	  {filteredPosts.length > 0 ? (
          filteredPosts.map((post: Post) => (

			<>
          <HomePage url={post.coverImage.url} />
		
		  
		  <Service />
        <AboutPage videoId={post.videoId} />
        <ContactPage />
		  
		  </>
		))
	) : (
	  <p>No posts found with the specified tag.</p>
	)}

      

     
      </Layout>
    </>
  );
};

export default Index;
