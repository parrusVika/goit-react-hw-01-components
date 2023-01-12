import PropTypes from "prop-types";
import css from './Profile.module.css';

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

        <div className={css.userInfo}>
            <div>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p classNamе={css.listItem}>{username}</p>
                <p classNamе={css.listItem}>@{tag}</p>
                <p classNamе={css.listItem}>{location}</p>
            </div>



            <ul classNamе={css.stats}>
                <li className={css.list}>
                    <span classNamе={css.labal}>followers  </span>
                    <span classNamе={css.quantity}>{followers}</span>
                </li>
                <li className={css.list}>
                    <span classNamе={css.labal}>Views  </span>
                    <span classNamе={css.quantity}>{views}</span>
                </li >
                <li className={css.list}>
                    <span classNamе={css.labal}>Likes  </span>
                    <span classNamе={css.quantity}>{likes}</span>
                </li >
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}