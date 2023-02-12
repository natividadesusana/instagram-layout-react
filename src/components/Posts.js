import React from "react";

export default function Posts() {

    const posts = [
        {
            linkUser: "https://www.instagram.com/pythonbrasil/",
            imageUser: "./assets/img/logo-python-brasil.jpeg",
            user: "pythonbrasil",
            imagePost: "./assets/img/img-python-brasil.jpeg",
            linkFollower: "https://www.instagram.com/respondeai/",
            imageFollower: "./assets/img/img-responde-ai.jpeg",
            userFollower: " respondeai ",
            linkOthers: "https://www.instagram.com/p/Cj8CXhbuQwY/",
            numberPeople: 101.523
        },
        {
            linkUser: "https://www.instagram.com/natividadesusana/",
            imageUser: "./assets/img/logo-natividadesusana.jpeg",
            user: "natividadesusana",
            imagePost: "./assets/img/img-pyladies.jpeg",
            linkFollower: "https://www.instagram.com/bruceviajante/",
            imageFollower: "./assets/img/img-bruce-viajante.jpeg",
            userFollower: " bruceviajante ",
            linkOthers: "https://www.instagram.com/p/CghBCICD6-Qxer2DGTd4E-0-XsGwnLx0TqP_tA0/",
            numberPeople: 80
        },
        {
            linkUser: "https://www.instagram.com/travelandshare/",
            imageUser: "https://yt3.ggpht.com/ytc/AMLnZu-9BYF43b-2UyBol2neMQ8YixyG5kyCJIhVH6srtg=s900-c-k-c0x00ffffff-no-rj",
            user: "travelandshare",
            imagePost: "./assets/img/img-travel-and-share.jpeg",
            linkFollower: "https://www.instagram.com/natividadesusana/",
            imageFollower: "./assets/img/logo-natividadesusana.jpeg",
            userFollower: " natividadesusana ",
            linkOthers: "https://www.instagram.com/p/CFu9-PAB4te/",
            numberPeople: 10.976
        },
        {
            linkUser: "https://www.instagram.com/bruceviajante/",
            imageUser: "./assets/img/img-logo-bruce.jpeg",
            user: "bruceviajante",
            imagePost: "./assets/img/img-bruce-viajante.jpeg",
            linkFollower: " https://www.instagram.com/pythonbrasil/ ",
            imageFollower: "./assets/img/logo-python-brasil.jpeg",
            userFollower: " pythonbrasil ",
            linkOthers: "https://www.instagram.com/p/Cjs15zuuyDh/",
            numberPeople: 500
        },
        {
            linkUser: "https://www.instagram.com/natividadesusana/",
            imageUser: "./assets/img/logo-natividadesusana.jpeg",
            user: "natividadesusana",
            imagePost: "./assets/img/img-london.jpeg",
            linkFollower: "https://www.instagram.com/bruceviajante/",
            imageFollower: "./assets/img/img-bruce-viajante.jpeg",
            userFollower: " bruceviajante ",
            linkOthers: "https://www.instagram.com/p/Ccu6gZfjyz2IAxVzuLVrCmMZ2OBd8RJo2coRx40/",
            numberPeople: 80
        }
    ];


    return (
        <div className="news-feed">

            {posts.map((post) =>
                <Post key={post.imagePost} linkUser={post.linkUser} imageUser={post.imageUser} user={post.user} imagePost={post.imagePost} linkFollower={post.linkFollower} imageFollower={post.imageFollower} userFollower={post.userFollower} linkOthers={post.linkOthers} numberPeople={post.numberPeople} />
            )}

            <div className="bottom-bar-mobile">
                <div className="bottom-bar-container-mobile">
                    <div className="bottom-bar-options-icons-mobile">
                        <img src="./assets/img/home-outline.svg" alt="img" />
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

    const [bookmark, setbookmark] = React.useState(true);
    const [heart, setHeart] = React.useState('heart-outline');
    const [color, setColor] = React.useState('#000000');
    const [numberLike, setNumberLike] = React.useState(props.numberPeople);
    const [heartPost, setHeartPost] = React.useState('heartAnimation');

    function likePost(statusLike) {
        if (heart === 'heart-outline') {
            setHeartPost('heartAnimation like')
            setHeart('heart')
            setColor('#FF0000')
            setNumberLike(numberLike + 1)
            setTimeout(() => {
                setHeartPost('heartAnimation')
            }, 500)
        } else if (statusLike === true) {
            setHeart('heart-outline')
            setColor('#000000')
            setNumberLike(numberLike - 1)
        }
    }

    function likePostHeart() {
        setHeartPost('heartAnimation like')
        setHeart('heart')
        setColor('#FF0000')
        setNumberLike(numberLike + 1)
        setTimeout(() => {
            setHeartPost('heartAnimation')
        }, 500)
    }

    return (
        <div data-test="post" className="post">

            <div className="top-post">
                <div className="box-top-post">
                    <a href={props.linkUser} target="_blank" rel="noreferrer">
                        <img src={props.imageUser} alt={props.imageUser} />
                    </a>
                    <a href={props.linkUser} target="_blank" rel="noreferrer">
                        <p className="user-name">{props.user}</p>
                    </a>

                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div className="box-post">
                <img data-test="post-image" onDoubleClick={likePostHeart} src={props.imagePost} alt={props.imagePost} />
                <ion-icon class={heartPost} name="heart"></ion-icon>
            </div>

            <div className="end-post">
                <div className="box-end-post">
                    <div className="box-icons">
                        <ion-icon onClick={() => { likePost(true) }} name={heart} style={{ color: color }} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon data-test="save-post" onClick={() => { setbookmark(!bookmark) }} name={(bookmark === true) ? "bookmark-outline" : "bookmark"}></ion-icon>
                </div>

                <div className="box-end-post-user">
                    <a href={props.linkFollower} target="_blank" rel="noreferrer">
                        <img src={props.imageFollower} alt={props.imageFollower} target="_blank" rel="noreferrer" />
                    </a>
                    <p> Curtido por <a href={props.linkFollower} target="_blank" rel="noreferrer"> {props.userFollower} </a> e
                        <a href={props.linkOthers} target="_blank" rel="noreferrer" data-test="likes-number"> {numberLike} pessoas </a>
                    </p>
                </div>
            </div>

        </div >
    );
};