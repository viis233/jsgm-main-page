import React from "react";
import bg from "/src/assets/jsgm/今时古梦页面底图.jpg";

const World: React.FC = () => {
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
      </div>
      <div className={"content"}>
        <p className={"contentTitle"}>关于我们</p>
        <p className={"contentP"}>
          《今时古梦》是由造梦轩团队携手河图、慕寒、hita、三无、Litterzy、Vagary、沈行之等众多国风圈人气作者共同打造的大型开放式历史文化企划，沿着时代变迁、朝代更迭的轨迹，以歌曲、视频、插画、朗诵、科普等形式为大家呈现出一幅立体而浩瀚的历史长卷。截止到2022年10月已经发布了四十余首歌曲，和网易云音乐，腾讯音乐平台，中央电视台节目组建立起了深度合作的关系。
        </p>
      </div>
    </>
  );
};

export default World;
