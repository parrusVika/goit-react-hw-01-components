import PropTypes from "prop-types";
export default function Profile({ username, tag, location, avatar, stats: followers, views, likes }) {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={Profile.avatar}
                    alt={Profile.username}
                    class="avatar"
                />
                <p class="name">{Profile.username}</p>
                <p class="tag">{Profile.tag}</p>
                <p class="location">{Profile.location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">followers</span>
                    <span class="quantity">{Profile.stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{Profile.stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{Profile.stats.likes}</span>
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