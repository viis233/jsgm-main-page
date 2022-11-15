import {
  createBrowserRouter as createRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import JSGMPage from "./compents/JSGMPage";
import react from "@vitejs/plugin-react";
import React, { useState } from "react";
import musicImg from "/src/assets/jsgm/title.png";
import Case from "./compents/Case";
import Music from "./compents/Music";
import World from "./compents/World";
import IP from "./compents/IP";
import About from "./compents/About";

const BottomBar: React.FC<{ children: React.ReactNode }> = (props) => {
  const [title, setTitle] = useState("主页");
  const bottomBar = [
    { img: musicImg, path: "/about", name: "关于我们" },
    { img: musicImg, path: "/music", name: "音乐" },
    { img: musicImg, path: "/", name: "主页" },
    { img: musicImg, path: "/ip", name: "周边" },
    { img: musicImg, path: "/case", name: "合作案例" },
  ];
  return (
    <>
      {/*<div className={"topBar"}>*/}
      {/*  <div className={"title"}>{title}</div>*/}
      {/*</div>*/}
      {props.children}
      <ul className={"bottomBar"}>
        {bottomBar.map((item) => {
          return (
            <li
              className={"button"}
              // style={{ backgroundImage: `url(${item.img})` }}
            >
              <Link to={item.path} onClick={() => setTitle(item.name)}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const router = createRouter(
  [
    {
      path: "/",
      element: <JSGMPage />,
    },
    {
      path: "/music",
      element: <Music />,
    },
    {
      path: "/world",
      element: <World />,
    },
    {
      path: "/ip",
      element: <IP />,
    },
    {
      path: "/case",
      element: <Case />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ].map((item) => {
    item.element = <BottomBar>{item.element}</BottomBar>;
    return item;
  })
);

const MainRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MainRouter;
