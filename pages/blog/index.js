import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getAllPostsWithSlug, getAllPosts } from "../../lib/api";

import BlogHeader from "../../components/BlogHeader";
import AllPosts from "../../components/AllPosts";
import PostSearch from "../../components/PostSearch";
import LatestPosts from "../../components/LatestPosts";
import HeaderArea from "../../components/HeaderArea";

export default function Blog({ allPosts, preview }) {
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
      <div className="container">
        <div className="row">
          <main className="posts-listing col-lg-8">
            <AllPosts posts={allPosts} />
          </main>
          <aside className="col-lg-4">
            {/* <PostSearch /> */}
            <LatestPosts posts={allPosts?.slice(0, 6)} />
          </aside>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allPosts = await getAllPosts(preview);
  return {
    props: {
      preview,
      allPosts,
    },
    revalidate: 1,
  };
}
