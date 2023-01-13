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
                <p className={css.listItem}>{username}</p>
                <p className={css.listItem}>@{tag}</p>
                <p className={css.listItem}>{location}</p>
            </div>



            <ul className={css.stats}>
                <li className={css.list}>
                    <span className={css.labal}>followers  </span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.list}>
                    <span className={css.labal}>Views  </span>
                    <span className={css.quantity}>{views}</span>
                </li >
                <li className={css.list}>
                    <span className={css.labal}>Likes  </span>
                    <span className={css.quantity}>{likes}</span>
                </li >
            </ul>
        </div>
    );
}

Profile.propTypes = {
    users: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        })
    })
}
