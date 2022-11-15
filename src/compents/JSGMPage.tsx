import bg from "/src/assets/jsgm/今时古梦页面底图.jpg";
// import effect1 from "/src/assets/main_page_bg_effect.png"
import logo from "/src/assets/jsgm/今时古梦首页logo1.png";
import { useSize } from "ahooks";
import { useRef } from "react";

let JSGMPage = () => {
  const size = useSize(document.getElementById("root"));
  const isWide = size && size.width / size.height > 16 / 9;
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
        {/*<div className={"layer fadeAnimation"}   style={{backgroundImage:`url(${effect1})`}}/>*/}
      </div>
      <div className={"content"}>
        <img className={"logo"} src={logo} alt={"今时古梦"} />
        <div className={"contentP"}>
          『今时古梦』是大型开放式国风文化企划，沿着时代变迁、朝代更迭的轨迹，以歌曲、插画、影视、游戏等形式为大家呈现出一幅立体而浩瀚的历史长卷。
          团队拥有丰富的影音创作、文创设计、活动策划经验，诚邀各界历史文化爱好者和品牌共创合作！
        </div>
      </div>
    </>
  );
};
export default JSGMPage;
