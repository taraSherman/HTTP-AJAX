import React from 'react';
import { Link } from 'react-router-dom';

function FriendCard({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-card">
        <Link to={`/friends/${friend.id}`} key={friend.id}>
        <h2>{name}</h2>
        <div className="friend-age">
          Age: <em>{age}</em>
        </div>
        <div className="friend-email">
          Email: <em>{email}</em>
        </div>
        ))}
        </Link>
      </div>
    );
};

export default FriendCard;