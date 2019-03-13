import React from "react";
import { connect } from "react-redux";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";

const Post = ({ post }) => {

  return (   
    <div>
      {post === null ? (
        <p>Este post não existe</p>
      ) : (
        <div className="post">
          <div className="post-info">
            <p>
              <span className="titulo">Título</span> -{" "}
              <span className="txtitulo">{post.title}</span>
            </p>
            <p>
              <span className="titulo">Autor</span> -{" "}
              <span className="txtitulo">{post.author}</span>
            </p>           
          </div>
          <div className="post-icons">
            <p className="votos">
              Votos: {post.voteScore}{" "}
              <span>
                <MdThumbDown className="downvote" />
                <MdThumbUp className="upvote" />
              </span>
            </p>
            <p className="comments">Comentários: {post.commentCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null)(Post);
