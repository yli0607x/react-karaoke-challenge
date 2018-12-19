import React from 'react';

const Song = (props) => {
  //console.log("inside Song ",props.song.id)
  
 
  return (
  
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={(event) => props.handleClick(event, props.song.id)}>Play</button></td>
    </tr>
  )
}

export default Song;
