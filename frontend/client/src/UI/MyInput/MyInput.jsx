import React from "react";
import cl from "./MyInput.module.css";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";


function MyInput(props) {
  let token = localStorage.getItem('token')
  let user = localStorage.getItem('user')
  const [titleMsg, setTitleMsg] = useState("");
  const [contentMsg, setContentMsg] = useState("");
  let varTitle = ""
  let varContent = ""

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.type === "create")
    {
          const resp = await axios.post(
          "http://127.0.0.1:8000/api/notes",

      {
        title: titleMsg,
        content: contentMsg,
        user: user,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
    createPost()
    }else if (props.type === "update"){
      if(String(titleMsg).length === 0 && String(contentMsg).length === 0){
        varTitle = props.readtitle
        varContent = props.readcontent
      }else if (String(titleMsg).length > 0 && String(contentMsg).length === 0){
        varTitle = titleMsg
        varContent = props.readcontent
      }else if (String(titleMsg).length === 0 && String(contentMsg).length > 0){
        varTitle = props.readtitle
        varContent = contentMsg
      }
      else{
        varTitle = titleMsg
        varContent = contentMsg
      }
      const resp = await axios.put(
        `http://127.0.0.1:8000/api/notes/update/${props.postpk}/`,
        {
          title: varTitle,
          content: varContent,
          user: user,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
    }
  }

  const createPost = () => {
    const newPos = {title: titleMsg, content: contentMsg}
    props.create(newPos)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={cl.textInput}>
        <input
          type="text"
          placeholder="Theme"
          onChange={(e) => setTitleMsg(e.target.value)}
          className={cl.myInput}
          defaultValue={props.readtitle}
        />
        <textarea
          type="text"
          placeholder="Here is your text"
          onChange={(e) => setContentMsg(e.target.value)}
          className={cl.myTextArea}
          defaultValue={props.readcontent}
        ></textarea>
        <button className={cl.myBtn} >Create</button>
      </div>
    </form>
  );
  }

export default MyInput;
<input></input>;
