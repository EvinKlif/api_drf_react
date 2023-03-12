import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PostItem from "../../components/PostItem/PostItem";
import "./ReadUpdate.css";
import { useState, useContext } from "react";
import PostsList from "../../components/PostsList/PostsList";
import MyModal from "../../components/MyModal/MyModal";
import MyInput from "../../UI/MyInput/MyInput";
import { Context } from "../../context";
import { useParams } from "react-router-dom";

const ReadUpdate = () => {
  const { posts, setPosts } = useContext(Context);
  const [modal, setModal] = useState(true);
  const type = "update"
  const params = useParams();

  const createPost = (newpost) => {
    setPosts([...posts, newpost]);
  };

  const filterPost = posts.filter((p) => p.pk === Number(params.id));

  return (
    <div className="Main">
      <div className="mainField">
        <Navbar setVisible={setModal} />
        <PostsList posts={posts} setVisible={setModal} />
        <MyModal visible={modal} setVisible={setModal}>
          <MyInput
            readtitle={filterPost[0].title}
            readcontent={filterPost[0].content}
            postpk={Number(params.id)}
            type={type}
          />
        </MyModal>
      </div>
    </div>
  );
};

export default ReadUpdate;
