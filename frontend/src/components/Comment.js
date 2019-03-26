import React from "react";
import { connect } from "react-redux";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
//import { voteScorePost } from "../actions/posts";

const Comment = (props) => { 
  const { comment }= props
 console.log(props)
  return (
    <div>
      {comment === null ? (
        <p>Não tem comentários</p>
      ) : (
        <div className="post">
          <div className="post-info"> 
          <p><span className="titulo">Data -</span>
              <span className="txtitulo">{comment.timestamp}</span></p>                
              <p><span className="titulo">Autor -</span>
              <span className="txtitulo">{comment.author}</span></p>      
              <p> <span className="titulo">Comentário -</span>
              <span className="txtitulo">{comment.body}</span></p>             
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

/* author: "thingtwo"
body: "Hi there! I am a COMMENT."
deleted: false
id: "894tuq4ut84ut8v4t8wun89g"
parentDeleted: false
parentId: "8xf0y6ziyjabvozdd253nd"
timestamp: 1468166872634
voteScore: 6 */