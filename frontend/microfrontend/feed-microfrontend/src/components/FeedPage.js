import React from 'react';
import Card from './Card';


function FeedPage({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {


  return (
        <div className="places page__section">
          <ul className="places__list">
            {cards.map((card) => (
                <Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                />
            ))}
          </ul>
        </div>
  );
}

export default FeedPage;
