import React from "react";
import bg from "/src/assets/jsgm/今时古梦页面底图.jpg";

const IP: React.FC = () => {
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
      </div>
      <div className={"content"}>
        <p className={"contentTitle"}>周边</p>
        <p className={"contentP"}>
          今时古梦从国风文化出发，为国风爱好者特别打造了相关的国风周边，目前已经推出了联名汉服，联名气泡水，晴雨伞，折扇等周边。
        </p>
        <div className={"image"}>
          <img src={"/images/img (1).png"} />
        </div>
        <div className={"image"}>
          <img src={"/images/img (2).png"} />
        </div>
        <p className={"contentP"}>
          在不久之后，今时古梦还将推出联名酒类周边。我们希望可以通过今时古梦涵盖衣，食，住，行等各个方面，让国风爱好者能够体验古人的日常生活。
        </p>
      </div>
    </>
  );
};

export default IP;
