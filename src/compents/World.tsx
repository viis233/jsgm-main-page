import React from "react";
import bg from "/src/assets/jsgm/今时古梦页面底图.jpg"
const  World:React.FC=()=>{
    return <>
        <div className="bgContainer">
            <div className={"layer"} style={{backgroundImage: `url(${bg})`}}/>
        </div>
        <pre className={"content"}>{`
世界观
  我们巴拉巴拉`}
    </pre>
    </>
}

export default World