import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PostItem from "../../components/PostItem/PostItem";
import "./CreatePage.css";
import { useState, useContext } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { useEffect } from "react";
import MyModal from "../../components/MyModal/MyModal";
import MyInput from "../../UI/MyInput/MyInput";
import {Context} from "../../context"
import Pagination from "../../components/Pagination/Pagination";

const CreatePage = () => {
  const {posts, setPosts, axiosPost, url} = useContext(Context)
  const [modal, setModal] = useState(true);
  const type = "create"
  const createPost = (newpost) =>{
    setPosts([...posts, newpost]);
    axiosPost(url);    
    }


  return (
    <div className="Main">
      <div className="mainField">
        <Navbar setVisible={setModal} />
        <PostsList posts={posts}  setVisible={setModal} />
        <MyModal visible={modal} setVisible={setModal} >
          <MyInput create={createPost} type={type} visible={modal} setVisible={setModal}/>
        </MyModal>
        <Pagination />
      </div>
    </div>
  );
};

export default CreatePage;