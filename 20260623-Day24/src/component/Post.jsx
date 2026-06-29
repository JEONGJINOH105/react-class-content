import React from "react";

export default function Post({category,date,title,content,author}) {
  return (
    <div className="post">
      <div className="post-award">
        <div>
          <p><span className="category">{category}</span></p>
        </div>
        <div>
          <p className="post-award">{date}</p>
        </div>
      </div>
      
      <div className="post-chat">
        <h3>{title}</h3>
        <p>{content}
        </p>
      </div>

      <p><span className="category">{author}</span></p>
    </div>
  );
}
