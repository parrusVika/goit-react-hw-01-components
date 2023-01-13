import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
    return (
        <ul className={css.frendlist} >
            {friends.map(({ id, name, avatar, isOnline }) => (
                < FriendListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}

        </ul>

    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
