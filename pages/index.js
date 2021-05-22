import Layout from "../components/layout";
import HeaderArea from "../components/HeaderArea";
import HeaderSlider from "../components/HeaderSlider";
import AboutArea from "../components/AboutArea";
import PracticeArea from "../components/PracticeArea";
import CallActionArea from "../components/CallActionArea";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import BlogArea from "../components/BlogArea";
import Contact from "../components/Contact";
import Brand from "../components/Brand";
import BackToTop from "../components/BackToTop";

import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts, preview }) {
  const heroPosts = allPosts.slice(0, 3);

  return (
    <>
      <HeaderArea />
      <HeaderSlider />
      <AboutArea />
      <PracticeArea />
      <CallActionArea />
      <Team />
      <Testimonial />
      <BlogArea posts={heroPosts} />
      <Contact />
      {/*  <BackToTop /> */}
      {/*   <Brand /> */}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  //const allPosts = [];
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
