import User from "./User";
import Suggestions from "./Suggestions";

export default function NavBar() {
    return (
        <div class="side-bar">
            <div class="side-bar-container">
                <User/>
                <Suggestions />
                <div class="information">
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