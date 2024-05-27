import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";


const SocialBox = () => {
    return (
        <ul className="socialBox">
            <li className="boxLiIcon">
                <a className="aNavFoot" href="https://www.instagram.com/tipicosiculo?igsh=NThwMjBvZWVyZDIx">
                    <img className="imageBox" src={instagram} alt="instagram"></img>
                </a>
            </li>
            <li className="boxLiIcon">
                <a className="aNavFoot" href="https://www.facebook.com/centrorevisioneveicoli/?locale=it_IT">
                    <img className="imageBox" src={facebook} alt="facebook"></img>
                </a>
            </li>
        </ul>
    )
}
export default SocialBox