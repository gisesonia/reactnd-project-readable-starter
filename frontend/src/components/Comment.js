import React from "react";
import { connect } from "react-redux";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { formatDate } from "../datahora";

const Comment = props => {
  const { comment } = props;
  //console.log(props);
  return (
    <div>
      {comment === null ? (
        <p>Não tem comentários</p>
      ) : (
        <div className="comment">
          <div className="post-info">
            <span className="datahora">{formatDate(comment.timestamp)}</span>
            <p>
              <span className="titulo">Autor -</span>
              <span className="txtitulo">{comment.author}</span>
            </p>
            <p>
              {" "}
              <span className="titulo">Comentário -</span>
              <span className="txtitulo">{comment.body}</span>
            </p>
          </div>
          <div className="post-icons">
            <p className="votos">
              Votos: {comment.voteScore}{" "}
              <span>
                <MdThumbDown className="downvote" />
                <MdThumbUp className="upvote" />
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(Comment);
