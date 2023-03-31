import React from "react";
import axios from "axios";
import "./PostItem.css";
import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../context"
import mainUrl from '../../api/host';

function PostItem(props) {
  const {posts, setPosts, axiosPost, url } = useContext(Context)
  const navigate = useNavigate();
  let token = localStorage.getItem('token')
  const mainPage = () => {
    navigate('/');
  };

  const readUpdate = () => {
    navigate(`/read/${props.post.pk}`);
  };

 
  async function deletePost(delPost) {
    const action = await axios.delete(
      `http://${mainUrl}/api/notes/delete/${delPost}/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
  }
  
  const viewContent = props.post.content.split(' ').slice(0, 40).join(" ");
  let sliced = props.post.title.slice(0,15);
if (sliced.length < props.post.title.length) {
sliced += '...';
}

  return (
    <div className="postItem" onClick={readUpdate}>
      <div className="post__content">
        <strong>
          {props.number}. {sliced} 
        </strong>
        <div className="post__content">{viewContent}</div>
        <div className="post__btn">
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.remove(props.post.pk);
              deletePost(props.post.pk);
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;


