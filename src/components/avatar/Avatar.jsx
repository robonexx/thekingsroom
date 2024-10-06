import React from "react";

// styles
import "./Avatar.css";

export default function Avatar({ src }) {
  console.log(src);
  return (
    <div className='avatar'>
      <img src={src} alt='user avatar' />
    </div>
  );
}
