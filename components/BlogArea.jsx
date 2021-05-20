import React from "react";
import Link from "next/link";

import Date from "../components/date";
import { imageBuilder } from "../lib/sanity";

export default function BlogArea({ posts }) {
  console.log("post", posts);
  const slug = "salut-a-tous";
  return (
    <section id="blog" className="blog_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section_title text-center pb-25">
              <h3 className="title">Nous aimons ecrire.</h3>
              <p>
                Des temps en temps nous publions une chronique sur un thème
                relatif au droit, qui peut vous intéresser.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {!!posts?.length &&
            posts.map((post) => (
              <div className="col-lg-4 col-md-7">
                <div className="single_blog mt-30">
                  <div className="blg_image">
                    <img src={imageBuilder(post.coverImage).url()} alt="blog" />
                  </div>
                  <div className="blg_content">
                    <h4 className="blog_title">
                      <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                        <a>{post.title}</a>
                      </Link>
                    </h4>
                    <p>{post.excerpt}</p>
                    <Link as={`/blog/${slug.post}`} href="/blog/[slug]">
                      <a className="more">Lire Plus...</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
