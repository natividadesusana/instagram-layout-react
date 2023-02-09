import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
    return (
        <div class="main-content">
            <div class="main-content-container">
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
        </div>
    );
};

