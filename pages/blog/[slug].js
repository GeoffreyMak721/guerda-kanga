import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

import BlogHeader from "../../components/BlogHeader";
import Post from "../../components/Post";
import PostSearch from "../../components/PostSearch";
import LatestPosts from "../../components/LatestPosts";
import HeaderArea from "../../components/HeaderArea";
export default function Blog({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log("morePosts", morePosts);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/css/style.default.css"
          id="theme-stylesheet"
        />
      </Head>
      <HeaderArea headerTop={false} />
      <BlogHeader />
      <div class="container">
        <div class="row">
          <main class="post blog-post col-lg-8">
            <Post post={post} />
          </main>
          <aside class="col-lg-4">
            <PostSearch />
            <LatestPosts posts={morePosts} />
          </aside>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
