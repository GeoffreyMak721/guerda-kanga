import React from "react";

import BlockContent from "@sanity/block-content-to-react";

import Date from "../components/date";
import Form from "../components/form";

import { imageBuilder } from "../lib/sanity";

export default function Post({ post }) {
  console.log("curPost", post);
  return (
    <div className="container">
      <div className="post-single">
        <div className="post-thumbnail">
          <img
            src={imageBuilder(post?.coverImage).url()}
            alt="..."
            className="img-fluid"
          />
        </div>
        <div className="post-details">
          <div className="post-meta d-flex justify-content-between">
            <div className="category">
              {/* <a href="#">Business</a>
              <a href="#">Financial</a> */}
            </div>
          </div>
          <h1>
            {post?.title}
            <a href="#">
              <i className="fa fa-bookmark-o"></i>
            </a>
          </h1>
          <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
            <a href="#" className="author d-flex align-items-center flex-wrap">
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
            <div className="d-flex align-items-center flex-wrap">
              <div className="date">
                <i className="icon-clock"></i> <Date dateString={post?.date} />
              </div>

              <div className="comments meta-last">
                <i className="icon-comment"></i> {post?.comments?.length || 0}
              </div>
            </div>
          </div>
          <div className="post-body">
            <BlockContent
              blocks={post?.body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>

          <div className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
            <a
              href="#"
              className="prev-post text-left d-flex align-items-center"
            >
              <div className="icon prev">
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="text">
                <strong className="text-primary">Previous Post </strong>
                <h6>I Bought a Wedding Dress.</h6>
              </div>
            </a>
            <a
              href="#"
              className="next-post text-right d-flex align-items-center justify-content-end"
            >
              <div className="text">
                <strong className="text-primary">Next Post </strong>
                <h6>I Bought a Wedding Dress.</h6>
              </div>
              <div className="icon next">
                <i className="fa fa-angle-right"> </i>
              </div>
            </a>
          </div>
          <div className="post-comments">
            <header>
              <h3 className="h6">
                Commentaires{" "}
                <span className="no-of-comments">
                  ({post?.comments?.length || 0})
                </span>
              </h3>
            </header>

            {!!post?.comments?.length &&
              post?.comments.map((comment) => (
                <div className="comment">
                  <div className="comment-header d-flex justify-content-between">
                    <div className="user d-flex align-items-center">
                      <div className="image">
                        <img
                          src="/images/user.svg"
                          alt="..."
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="title">
                        <strong>{comment?.name}</strong>
                        <span className="date">
                          <Date dateString={comment?._createdAt} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comment-body">
                    <p>{comment?.comment}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="add-comment">
            <header>
              <h3 className="h6">Laisser un commentaire</h3>
            </header>
            <Form _id={post?._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
