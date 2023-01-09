import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
    return (
        <li className={css.frendlist}>
            {friends.map(({ avatar, name, isOnline, id }) => (

                <div className={isOnline ? css.isOnline : css.offline} key={id}>
                    <img className={css.avatar} src={avatar} alt={name} width="48" />

                    <p className={css.name}>{name}</p>


                </div>))}
        </li>
    )
}

FriendList.propTypes = {
    frends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.any.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};