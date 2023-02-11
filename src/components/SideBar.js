import User from "./User";
import Suggestions from "./Suggestions";

export default function NavBar() {
    return (
        <div className="side-bar">
            <div className="side-bar-container">
                <User />
                <Suggestions />
                <div className="information">
                    <div>
                        <p>
                            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags •
                            Idioma
                        </p>
                        <p>
                            © 2021 INSTAGRAM DO FACEBOOK
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};