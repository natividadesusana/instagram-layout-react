export default function Stories() {

    const stories = [
        { link: "https://www.instagram.com/natividadesusana/", img: "./img/logo-natividadesusana.jpeg", user: "natividad..." },
    
        { link: "https://www.instagram.com/bruceviajante/", img: "./img/img-bruce-viajante.jpeg", user: "bruceviaja..." },
    
        { link: "https://www.instagram.com/travelandshare/", img: "./img/img-travel-and-share.jpeg", user: "travelands..." },
    
        { link: "https://www.instagram.com/pythonbrasil", img: "./img/logo-python-brasil.jpeg", user: "pythonbras..." },
    
        { link: "https://www.instagram.com/oatiemeal/", img: "./img/img-oatie.jpeg", user: "oatiemeal..." },
    
        { link: "https://www.instagram.com/respondeai/", img: "./img/img-responde-ai.jpeg", user: "respondeai..." },
    
        { link: "https://www.instagram.com/driven.education/", img: "./img/img-driven.png", user: "driven.edu..." },
    
        { link: "https://www.instagram.com/apureguria/", img: "./img/img-apureguria.jpeg", user: "apureguria..." },
    
        { link: "https://www.instagram.com/apureguria/", img: "./img/img-london.jpg", user: "tiochico..." },
    
        { link: "https://www.instagram.com/apureguria/", img: "./img/img-logo-bruce.JPG", user: "ameliasmt..." },
    ];

    return (
        <div class="stories-menu">
            {stories.map((story) =>
                <Story link={story.link} image={story.img} user={story.user} />
            )}

            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </div>
    );
};

function Story(props) {
    return (
        <div class="container-story">
            <div>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.image} alt={props.image} />
                </a>
            </div>
            <p>{props.user}</p>
        </div>
    );
};
