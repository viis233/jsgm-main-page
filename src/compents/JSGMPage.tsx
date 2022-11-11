import bg from "/src/assets/jsgm/今时古梦页面底图.jpg"
// import effect1 from "/src/assets/main_page_bg_effect.png"
import logo from "/src/assets/jsgm/今时古梦首页logo1.png"
import {useSize} from "ahooks";
import {useRef} from "react";

let JSGMPage=()=>{

    const size = useSize(document.getElementById('root'))
    const isWide = size && size.width / size.height>(16/9);
    return <>
        <div className="bgContainer"  >
            <div className={"layer"} style={{backgroundImage:`url(${bg})`}} />
            {/*<div className={"layer fadeAnimation"}   style={{backgroundImage:`url(${effect1})`}}/>*/}
            <div className={"logo"} style={{backgroundImage:`url(${logo})`}}/>
        </div>
    </>
}
export default JSGMPage
