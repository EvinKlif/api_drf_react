import React, { useContext } from 'react';
import cl from "./MyModal.module.css";
import {Context} from "../../context"
import { useNavigate } from "react-router-dom"

function MyModal({children, visible, setVisible}) {
    const { axiosPost } = useContext(Context)
    const rootClasses = [cl.myModal]

    const navigate = useNavigate();

    const mainPage = () => {
        navigate('/');
      };
    
    if(visible){
        rootClasses.push(cl.active)
    }


    return (
        <div className={rootClasses.join(' ')} onClick = { () => { setVisible(false); axiosPost(); mainPage() }}>
            <div className={cl.myModalContent} onClick = { (e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;