import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img
        className={css.friendListAvatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendName}>{name} </p>
      <p
        className={isOnline ? css.profileColorOnline : css.profileColorOffline}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
