import React from "react";
import cl from "./MyInput.module.css";
import { useState, useContext } from "react";
import axios from "axios";
import mainUrl from '../../api/host';




function MyInput(props) {
  let token = localStorage.getItem('token');
  let user_id = localStorage.getItem('user_id');
  const [titleMsg, setTitleMsg] = useState("");
  const [contentMsg, setContentMsg] = useState("");
  let varTitle = ""
  let varContent = ""

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.type === "create")
    {
          const resp = await axios.post(
          `http://${mainUrl}/api/notes`,

      {
        title: titleMsg,
        content: contentMsg,
        user: user_id,
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
        `http://${mainUrl}/api/notes/update/${props.postpk}/`,
        {
          title: varTitle,
          content: varContent,
          user: user_id,
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
