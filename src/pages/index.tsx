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
	youtubedescription: string;

	coverImage: {
		url: string; // Ensure this is an object with a url field
	};
	tags: { [key: string]: string }; // Update tags field as an object
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

// Function to filter posts by tag
const filterPostsByTag = (posts: Post[], tagName: string): Post[] => {
	return posts.filter((post) => {
		const tagsArray = Object.values(post.tags || {}); // Convert object to array
		return tagsArray.some(tag => tag === tagName); // Check for tag presence
	});
};

const Index: FC<Props> = ({ posts }) => {
	const heroPost = posts[0];

	// Example of filtering posts by the "homepage" tag
	const filteredPosts = filterPostsByTag(posts, "homepage");

	return (
		<Layout>
			{filteredPosts.length > 0 ? (
				filteredPosts.map((post: Post) => (
					<React.Fragment key={post.slug}>
						<HomePage url={post.coverImage.url} />
						<Service />
						<AboutPage videoId={post.videoId} youtubedescription={post.youtubedescription}/>
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
