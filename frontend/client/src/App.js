import "./style/App.css";
import Login from "./pages/Login/Login";
import Main from "./pages/main/Main";
import ReadUpdate from "./pages/ReadUpdate/ReadUpdate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage/CreatePage";
import { Context } from "./context";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PrivateRouters from "./utils/PrivateRouters";
import Registration from "./pages/Registration/Registration";

function App() {
  const baseUrl = "http://127.0.0.1:8000/api/notes";
  let token = localStorage.getItem("token");
  const [url, setUrl] = useState(baseUrl);
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [test, setTest] = useState(false);
  const [countPosts, setCountPosts] = useState(0);

  const paginationHandler = (url) => {
    axiosPost(url);
  };

  async function axiosPost(url) {
    try {
      const response = await axios
        .get(url, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setPosts(response.data.results);
          setNext(response.data.next);
          setPrevious(response.data.previous);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    paginationHandler(url);
  }, []);

  return (
    <Context.Provider
      value={{
        posts,
        setPosts,
        axiosPost,
        url,
        setUrl,
        next,
        previous,
        paginationHandler,
        setTest,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/createpage" element={<CreatePage />} />
          <Route element={<PrivateRouters />}>
            <Route path="/" element={<Main />} />
            <Route exact path="/read/:id" element={<ReadUpdate />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
