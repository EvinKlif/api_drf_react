import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PostItem from "../../components/PostItem/PostItem";
import "./Main.css";
import { useState, useContext } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { useEffect } from "react";
import MyModal from "../../components/MyModal/MyModal";
import MyInput from "../../UI/MyInput/MyInput";
import { Context } from "../../context";
import Pagination from "../../components/Pagination/Pagination";
import { Navigate } from 'react-router-dom';


let auth = localStorage.getItem('token')
if(auth){
    <Navigate to='/login'/>
    }

const Main = () => {
  const { axiosPost, url} = useContext(Context);
  // const [posts, setPosts] = useState([]);
  const { posts, setPosts } = useContext(Context);
  const [modal, setModal] = useState(false);

  const createPost = (newpost) => {
    setPosts([...posts, newpost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.pk !== post));
  };

  return (
    <div className="Main">
      <div className="mainField">
        <Navbar setVisible={setModal} />
        <PostsList posts={posts} remove={removePost} setVisible={setModal} />
        <MyModal visible={modal} setVisible={setModal}>
          <MyInput create={createPost} />
        </MyModal>
        <Pagination />
      </div>
    </div>
  );
};

export default Main;
