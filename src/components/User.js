import React from "react";

export default function User() {

    const users = [{
        img: 'https://storage.googleapis.com/ares-profile-pictures/hd/frenchie.world-31de2cfe84f2fbd09e2d4ef68e721738_hd.jpg',
        user: 'frenchie.world',
        name: 'Frenchie World™'
    }];

    return (
        <>
            {users.map((mapUser) =>
                <RenderUser key={mapUser.user} img={mapUser.img} user={mapUser.user} name={mapUser.name} />
            )}
        </>
    );
};

function RenderUser(props) {

    const [userName, setUserName] = React.useState(props.name);
    const [photo, setPhoto] = React.useState(props.img);


    function changeName() {
        let username = prompt('Digite o nome de Usuário:');
        setUserName(`${username ? username : props.name}`);
    };

    function changePhoto() {
        let photoUser = prompt('Adicione uma nova foto:');
        setPhoto(`${photoUser ? photoUser : props.img}`);
    };

    return (
        <div className="container-1">
            <img data-test="profile-image" onClick={changePhoto} src={photo} alt="img" />
            <div className="paragraphs">
                <a href="https://www.instagram.com/frenchie.world/" target="_blank" rel="noreferrer">{props.user}</a>
                <div>
                    <p data-test="name">{userName}</p>
                    <ion-icon data-test="edit-name" onClick={changeName} name="pencil-outline"></ion-icon>
                </div>

            </div>
        </div>
    );
};
