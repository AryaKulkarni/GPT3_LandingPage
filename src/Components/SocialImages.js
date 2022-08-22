import atlassian from "../assets/atlassian.png"
import google from "../assets/google.png"
import slack from "../assets/slack.png"
import dropbox from "../assets/dropbox.png"
import shopify from "../assets/shopify.png"





export default function SocialImages() {
    return (
        <div className="social--images" style={{display:"flex"}}>
        <img src={google}/>
        <img src={slack}/>
        <img src={atlassian}/>
        <img src={dropbox}/>
        <img src={shopify}/>

        </div>
    )
}