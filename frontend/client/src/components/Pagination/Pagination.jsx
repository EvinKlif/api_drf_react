import React from 'react';
import c from "./Pagination.module.css";
import logo1 from "../../image/i1.png";
import logo2 from "../../image/i2.png";
import { Context } from "../../context";
import { useState, useContext } from "react";

function Pagination() {

    const {  next,  previous, paginationHandler} = useContext(Context);



    return (
        <div  className={c.pagination}>
            <button onClick={() => paginationHandler(previous)}   className={c.btnPagi}>
                    <img className={c.myImg} src={logo1} />
            </button>
            <button onClick={() => paginationHandler(next)}  className={c.btnPagi}>
                    <img className={c.myImg} src={logo2} />
            </button>
        </div>
    );
}

export default Pagination;