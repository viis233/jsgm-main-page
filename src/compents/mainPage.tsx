import bg from "/src/assets/main_page_bg.png";
import effect1 from "/src/assets/main_page_bg_effect.png";
import logo from "/src/assets/logo_white.png";
import { useSize } from "ahooks";
import { useRef } from "react";

let MainPage = () => {
  const size = useSize(document.getElementById("root"));
  const isWide = size && size.width / size.height > 16 / 9;
  console.log("size", size);
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
        <div
          className={"layer fadeAnimation"}
          style={{ backgroundImage: `url(${effect1})` }}
        />
        <div className={"logo"} style={{ backgroundImage: `url(${logo})` }} />
      </div>
    </>
  );
};
export default MainPage;
