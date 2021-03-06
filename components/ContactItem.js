/**
 * ContactItem.js
 * Component displaying contact information
 */

// Node Modules
import React from "react";
import {useDispatch} from 'react-redux';

// Actions
import {addFavorite, removeFavorite} from '../actions/contacts';

export default function ContactItem({ id, firstName, lastName, phone, favorite}) {
  // Hooks
  const dispatch = useDispatch();

  // Callbacks
  const onClick = () => {
    if (favorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  // Constants
  const phoneString = phone.replace(/\D/g, '');

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
      <button onClick={onClick}>{favorite ? 'UnFavorite': 'Favorite'}</button>
      <p style={{textTransform: 'capitalize'}}>
        {firstName} <strong>{lastName}</strong>
      </p>
      <p>{`(${phoneString.substring(0,3)}) ${phoneString.substring(3,6)}-${phoneString.substring(6,10)}`}</p>
    </div>
  );
}
