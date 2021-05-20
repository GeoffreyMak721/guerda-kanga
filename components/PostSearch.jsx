import React from "react";

export default function PostSearch() {
  return (
    <div className="widget search">
      <header>
        <h3 className="h6">Search the blog</h3>
      </header>
      <form action="#" className="search-form">
        <div className="form-group">
          <input type="search" placeholder="What are you looking for?" />
          <button type="submit" className="submit">
            <i className="icon-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
