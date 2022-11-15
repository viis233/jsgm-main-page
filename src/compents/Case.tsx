import React from "react";
import bg from "/src/assets/jsgm/今时古梦页面底图.jpg";

const Case: React.FC = () => {
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
      </div>
      <div className={"content"}>
        <p className={"contentTitle"}>合作案例</p>
        <p className={"contentP"}>
          目前今时古梦和中央电视台，网易云音乐，腾讯音乐平台均有长期合作。其中和中央电视台《古韵新声》栏目组联合推出的《愿予今夕》、《丰年》等歌曲受到了观众的广泛好评。
        </p>
        <div className={"image"}>
          <img src={"/images/img (3).png"} />
        </div>
        <div className={"image"}>
          <img src={"/images/img (4).png"} />
        </div>
        <div className={"image"}>
          <img src={"/images/img (5).png"} />
        </div>
        <p className={"contentP"}>
          除此之外，今时古梦还与中国华服日，国风音乐盛典，良渚博物馆等线下活动和机构均有合作。并推出了《长安西安》，《洛辞》等各地方城市的主题曲。
        </p>
      </div>
    </>
  );
};

export default Case;
