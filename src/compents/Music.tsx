import React from "react";
import bg from "/src/assets/jsgm/今时古梦页面底图.jpg";

const Music: React.FC = () => {
  return (
    <>
      <div className="bgContainer">
        <div className={"layer"} style={{ backgroundImage: `url(${bg})` }} />
      </div>

      <div className={"content"}>
        <p className={"contentTitle"}>作品列表</p>
        {[
          "御龙行",
          "夏",
          "洛辞",
          "长安西安",
          "商颂",
          "凤衔书",
          "天上白玉京",
          "溯游",
          "春秋序",
          "帝孤",
          "问斯人",
          "践道者",
          "明月休负我风流",
          "任尔评说",
          "唯有闲人记",
          "央央",
          "鹊桥仙",
          "山经海卷",
          "倾杯饮月",
          "闻说沧海旧",
          "四海九州",
          "天行道",
          "夷光",
          "诗三百",
          "垂范千秋",
          "庄生梦也",
          "天意如斯",
          "归去来",
          "涉江",
          "候人离歌",
          "非命也",
          "青回",
          "别远望",
          "愿予今夕",
          "丰年",
        ].map((i) => (
          <p className={"contentP"}>{i}</p>
        ))}
        <p>{"\n"}</p>
        <p className={"contentTitle"}>合作作者&合作平台</p>
        {[
          "合作歌手：司夏、慕寒、河图、Midaho、横颜君、Aki阿杰、三无Marblue、Tacke竹桑、Hita、小爱的妈、肥皂菌、伦桑、沈谧仁等",
          "合作词作：沈行之、Vagary、冥凰、冉语优等词作",
          "合作曲作：litterzy、司夏、潇梦临、执素兮、月千宸等曲作",
          "合作平台：中央电视台、网易云音乐、腾讯音乐平台",
        ].map((i) => (
          <p className={"contentP"} style={{ textAlign: "center" }}>
            {i}
          </p>
        ))}
      </div>
    </>
  );
};

export default Music;
