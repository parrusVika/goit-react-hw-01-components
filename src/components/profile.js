import PropTypes from "prop-types";
import App from "./App"
export default function Profile({ username, tag, location, avatar, stats = followers, views, likes }) {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={user.avatar}
                    alt={user.username}
                    class="avatar"
                />
                <p class="name">{user.username}</p>
                <p class="tag">{user.tag}</p>
                <p class="location">{user.location}</p>
            </div>

            <ul class={user.stats}>
                <li>
                    <span class="label">followers</span>
                    <span class="quantity">{user.stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{user.stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number

}