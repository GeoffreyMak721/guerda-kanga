import React from "react";

import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import Date from "../components/date";
export default function LatestPosts({ posts }) {
  return (
    <div className="widget latest-posts">
      <header>
        <h3 className="h6">Articles récents</h3>
      </header>
      <div className="blog-posts">
        {!!posts?.length &&
          posts.map((post) => (
            <Link
              key={post?._id}
              as={`/blog/${post?.slug}`}
              href="/blog/[slug]"
            >
              <a>
                <div className="item d-flex align-items-center">
                  <div className="image">
                    <img
                      src={imageBuilder(post?.coverImage).url()}
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="title">
                    <strong>{post?.title}</strong>
                    <div className="d-flex align-items-center">
                      <div className="comments">
                        <i class="icon-clock"></i>{" "}
                        <Date dateString={post?.date} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}
