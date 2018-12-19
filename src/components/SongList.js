import React from 'react';
import Song from './Song'

const SongList = (props) => {
  console.log("inside song list props", props.songs)

  function renderSongs() {
    return props.songs.map(song => (
      <Song song={song} key={song.id} handleClick={props.handleClick}/>
    ))
  }


  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {renderSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
