export default function Suggestions() {

    const suggestions = [
        {
            link: "https://www.instagram.com/numpulo/",
            img: "https://yt3.ggpht.com/ytc/AMLnZu8648AV32zHS4xE0UqKrJEl3dGzkyEGHFBVIh5zCw=s900-c-k-c0x00ffffff-no-rj",
            user: "numpulo",
            status: "Segue Você"
        },
        {
            link: "https://www.instagram.com/travellingthroughtheworld/",
            img: "https://scontent.ffln1-1.fna.fbcdn.net/v/t39.30808-6/327342439_1361733271307767_205592129715381998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3634G-S19oAX9YUFYb&_nc_ht=scontent.ffln1-1.fna&oh=00_AfCDtj4Y5gOmYGKLW-FU3pjLLcYNO3-ocyNM80vQm2cYjQ&oe=63EA7C28",
            user: "travellingthroughtheworld",
            status: "Novo no Instagram"
        },
        {
            link: "https://www.instagram.com/explorewithed/",
            img: "https://pbs.twimg.com/profile_images/1406284335850926082/sfZ0F3ho_400x400.jpg",
            user: "explorewithed",
            status: "Segue Você"
        },
        {
            link: "https://www.instagram.com/fhopschool/",
            img: "https://fhop.com/wp-content/uploads/2022/05/SCHOOL-01.png",
            user: "fhopschool",
            status: "Segue Você"
        },
        {
            link: "https://www.instagram.com/pythonsul/",
            img: "https://pbs.twimg.com/media/FVQEjuhXEAAluGk.jpg",
            user: "pythonsul",
            status: "Novo no Instagram"
        },
    ];

    return (
        <>
            <div class="paragraphs-second-session">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {suggestions.map((suggestion) =>
                <Sugestoes link={suggestion.link} img={suggestion.img} user={suggestion.user} status={suggestion.status} />
            )}
        </>
    );
};

function Sugestoes(props) {
    return (
        <div class="third-session">
            <div class="img-1">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.img} alt="img" />
                </a>
                <div>
                    <a href={props.link} class="p-1" target="_blank" rel="noreferrer">{props.user}</a>
                    <p class="p-2">{props.status}</p>
                </div>
                <div>
                    <p>Seguir</p>
                </div>
            </div>
        </div>
    );
};
