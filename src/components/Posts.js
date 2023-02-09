export default function Posts() {

    const posts = [
        { linkUser: "https://www.instagram.com/pythonbrasil/", imageUser: "./img/logo-python-brasil.jpeg", user: "pythonbrasil", imagePost: "./img/img-python-brasil.jpeg", linkFollower: "https://www.instagram.com/respondeai/", imageFollower: "./img/img-responde-ai.jpeg", userFollower: " respondeai ", linkOthers: "https://www.instagram.com/p/Cj8CXhbuQwY/", numberPeople: " 101.523" },
    
        { linkUser: "https://www.instagram.com/natividadesusana/", imageUser: "./img/logo-natividadesusana.jpeg", user: "natividadesusana", imagePost: "./img/img-pyladies.jpeg", linkFollower: "https://www.instagram.com/bruceviajante/", imageFollower: "./img/img-bruce-viajante.jpeg", userFollower: " bruceviajante ", linkOthers: "https://www.instagram.com/p/CghBCICD6-Qxer2DGTd4E-0-XsGwnLx0TqP_tA0/", numberPeople: " 80" },
    
        { linkUser: "https://www.instagram.com/travelandshare/", imageUser: "https://yt3.ggpht.com/ytc/AMLnZu-9BYF43b-2UyBol2neMQ8YixyG5kyCJIhVH6srtg=s900-c-k-c0x00ffffff-no-rj", user: "travelandshare", imagePost: "./img/img-travel-and-share.jpeg", linkFollower: "https://www.instagram.com/natividadesusana/", imageFollower: "./img/logo-natividadesusana.jpeg", userFollower: " natividadesusana ", linkOthers: "https://www.instagram.com/p/CFu9-PAB4te/", numberPeople: " 2.800" },
    
        { linkUser: "https://www.instagram.com/bruceviajante/", imageUser: "./img/img-logo-bruce.jpeg", user: "bruceviajante", imagePost: "./img/img-bruce-viajante.jpeg", linkFollower: "https://www.instagram.com/pythonbrasil/", imageFollower: "./img/logo-python-brasil.jpeg", userFollower: " pythonbrasil ", linkOthers: "https://www.instagram.com/p/Cjs15zuuyDh/", numberPeople: " 500" },
    
        { linkUser: "https://www.instagram.com/natividadesusana/", imageUser: "./img/logo-natividadesusana.jpeg", user: "natividadesusana", imagePost: "./img/img-london.jpeg", linkFollower: "https://www.instagram.com/bruceviajante/", imageFollower: "./img/img-bruce-viajante.jpeg", userFollower: " bruceviajante ", linkOthers: "https://www.instagram.com/p/Ccu6gZfjyz2IAxVzuLVrCmMZ2OBd8RJo2coRx40/", numberPeople: " 80" }
    ];
    

    return (
        <div class="news-feed">

            {posts.map((post) =>
                <Post linkUser={post.linkUser} imageUser={post.imageUser} user={post.user} imagePost={post.imagePost} linkFollower={post.linkFollower} imageFollower={post.imageFollower} userFollower={post.userFollower} linkOthers={post.linkOthers} numberPeople={post.numberPeople} />
            )};

            <div class="bottom-bar-mobile">
                <div class="bottom-bar-container-mobile">
                    <div class="bottom-bar-options-icons-mobile">
                        <img src="./img/home-outline.svg" alt="img" />
                        <ion-icon name="search-outline"></ion-icon>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Post(props) {
    return (
        <div class="post">

            <div class="top-post">
                <a href={props.linkUser} target="_blank" rel="noreferrer">
                    <img src={props.imageUser} alt={props.imageUser} />
                </a>
                <a href={props.linkUser} target="_blank" rel="noreferrer">
                    <p class="user-name">{props.user}</p>
                </a>
                <p class="spots">...</p>
            </div>

            <img src={props.imagePost} alt={props.imagePost} />

            <div class="end-post">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
                <div>
                    <a href={props.linkFollower} target="_blank" rel="noreferrer">
                        <img src={props.imageFollower} alt={props.imageFollower} target="_blank" rel="noreferrer" />
                    </a>
                    <p>
                        Curtido por
                        <a href={props.linkFollower} target="_blank" rel="noreferrer">
                            {props.userFollower}
                        </a>
                        e
                        <a href={props.linkOthers} target="_blank" rel="noreferrer">
                            {props.numberPeople} pessoas
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
};