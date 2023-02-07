
export default function NavBar() {
    return (
        <div class="header">
            <div class="header-container">
                <div class="tag-instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="border"></div>
                    <img class="img-instagram-desktop" src="./img/name-instagram.webp" alt="logo-desktop"/>
                </div>
                <img class="img-instagram-mobile" src="./img/name-instagram.webp" alt="logo-mobile"/>
                <div class="research-field">
                    <input type="text" id="text-area" value="Pesquisar"/>
                </div>
                <div class="options-icons-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="options-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}