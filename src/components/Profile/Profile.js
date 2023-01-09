import PropTypes from "prop-types";
import css from './Profile.module.css'

export function Profile({
    users: {
        avatar,
        username,
        tag,
        location,
        stats: { followers, views, likes },
    },
}) {
    return (
        <div classNamе={css.profile}>
            <div classNamе="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p classNamе="name">{username}</p>
                <p classNamе="tag">{tag}</p>
                <p classNamе="location">{location}</p>
            </div>

            <ul classNamе="stats">
                <li>
                    <span classNamе="label">followers</span>
                    <span classNamе="quantity">{followers}</span>
                </li>
                <li>
                    <span classNamе="label">Views</span>
                    <span classNamе="quantity">{views}</span>
                </li>
                <li>
                    <span classNamе="label">Likes</span>
                    <span classNamе="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.string

}