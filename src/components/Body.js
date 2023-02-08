import Stories from "./Stories";
import Posts from "./Posts";

export default function Body() {
    return (
        <div class="main-content">
            <div class="main-content-container">
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
            </div>
        </div>
    );
};

