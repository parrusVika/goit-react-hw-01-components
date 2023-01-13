import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export function FriendListItem({ name, avatar, isOnline }) {
    return (

        <li className={css.frienditem}>
            <span className={isOnline ? css.isOnline : css.offline}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}



FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};