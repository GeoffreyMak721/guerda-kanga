import React from "react";

import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

import Date from "../components/date";

import { imageBuilder } from "../lib/sanity";

export default function AllPosts({ posts }) {
  return (
    <div className="container">
      <div className="row">
        {!!posts?.length &&
          posts.map((post) => (
            <div className="post col-xl-6">
              <div className="post-thumbnail">
                <Link as={`/blog/${post?.slug}`} href="/blog/[slug]">
                  <a>
                    <img
                      src={imageBuilder(post?.coverImage).url()}
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                </Link>
              </div>
              <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                  <div className="date meta-last"></div>
                  <div className="category">
                    {/*  <a href="#">Business</a> */}
                  </div>
                </div>
                <Link as={`/blog/${post?.slug}`} href="/blog/[slug]">
                  <a>
                    <h3 className="h4">{post?.title}</h3>
                  </a>
                </Link>
                <p className="text-muted text-truncate"></p>
                <footer className="post-footer d-flex align-items-center">
                  <a
                    href="#"
                    className="author d-flex align-items-center flex-wrap"
                  >
                    <div className="avatar">
                      <img
                        src={post?.author?.picture}
                        alt="..."
                        className="img-fluid"
                      />
                    </div>
                    <div className="title">
                      <span>{post?.author?.name}</span>
                    </div>
                  </a>
                  <div className="date">
                    <i className="icon-clock"></i>{" "}
                    <Date dateString={post?.date} />
                  </div>
                  <div className="comments meta-last">
                    {/* <i className="icon-comment"></i>12 */}
                  </div>
                </footer>
              </div>
            </div>
          ))}
      </div>

      {/*  <nav aria-label="Page navigation example">
        <ul className="pagination pagination-template d-flex justify-content-center">
          <li className="page-item">
            <a href="#" className="page-link">
              {" "}
              <i className="fa fa-angle-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link active">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              {" "}
              <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    */}
    </div>
  );
}
