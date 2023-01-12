import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export function FriendListItem({ id, name, avatar, isOnline }) {
    return (

        <li className={css.frienditem}>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <span className={isOnline ? css.isOnline : css.offline}></span>
            <p className={css.name}>{name}</p>
        </li>
    )
}



FriendListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};