import Logo from "../../assets/logoTCC.png";
import Insta from "../../assets/insta.png";
import Tiktok from "../../assets/Tiktok.png";
import Facebook from "../../assets/facebook.png"
import "./styles.scss";

export default function Rodape(){
    return(
        <div className="rodape">
            <img src={ Logo } alt="rotaCult" />

            <div className="contato">
                <h1>NOS CONTATE</h1>
                <p>(11) 91234-5678</p>
                <p>RotaCult@gmail.com</p>

                <div className="redes">
                    <img src={Insta} alt="" />
                    <img src={Tiktok} alt="" />
                    <img src={Facebook} alt="" />
                    <span></span>
                    <p>@Rotacult.Oficial</p>
                </div>
            </div>
        </div>
    );
}