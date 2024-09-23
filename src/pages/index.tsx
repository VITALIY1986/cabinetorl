import React, { FC } from "react";
import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';

// Динамическая загрузка компонентов
const HomePage = dynamic(() => import('@/components/pages/HomePage'));
const AboutPage = dynamic(() => import('@/components/pages/AboutPage'));
const Service = dynamic(() => import('@/components/pages/Service'), { ssr: false }); // Отключаем SSR для этого компонента
const ContactPage = dynamic(() => import('@/components/pages/ContactPage'));

interface Post {
	
	rightimg: {

		url: string;
	};
	h1: string;
  videoId: string;
  slug: string;
  title: string;
  youtubedescription: string;
  coverImage: {
    url: string;
  };
  tags: { [key: string]: string };
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
    const tagsArray = Object.values(post.tags || {});
    return tagsArray.some(tag => tag === tagName);
  });
};

const Index: FC<Props> = ({ posts }) => {
  const heroPost = posts[0];

  // Пример фильтрации постов по тегу "homepage"
  const filteredPosts = filterPostsByTag(posts, "homepage");

  return (
    <Layout>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: Post) => (
          <React.Fragment key={post.slug}>
            <HomePage url={post.coverImage.url} text={post.h1}/>
            <Service />
            <AboutPage videoId={post.videoId} youtubedescription={post.youtubedescription} rightimg={post.rightimg.url}/>
            <ContactPage />
          </React.Fragment>
        ))
      ) : (
        <p>No posts found with the specified tag.</p>
      )}
    </Layout>
  );
};

export default Index;
