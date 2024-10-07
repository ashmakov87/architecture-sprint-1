import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ProfilePage() {
  const currentUser = React.useContext(CurrentUserContext);
  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };
  return (
        <div className="profile page__section">
          <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </div>
  );
}

export default ProfilePage;
