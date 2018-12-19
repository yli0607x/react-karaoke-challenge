import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

//const API = "http:localhost:4000/users/27/songs"

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: {},
    term: ""
  }


  // componentDidMount() {
  //   fetch(API)
  //     .then(res => res.json())
  //     .then(songsArray =>
  //       this.setState({
  //         songs: songsArray
  //       })
  //     )
  // }


  handleClick = (event, id) =>{
    //console.log(event, id)
    const currentSong = songs.find(song => song.id === id)
    this.setState({
      currentSong : currentSong
    })
  }

  handleChangeTerm = (event) => {
    //console.log(event.target.value)
    this.setState({
      term: event.target.value
    })
  }

  filteredSong = () => {
    const songList = songs.filter(song=>{
      return song.title.toLowerCase().includes(this.state.term)
    })
    if (this.state.term){
      return songList
    } else {
      return songs
    }
  }


  render() {  
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChangeTerm={this.handleChangeTerm} term={this.state.term} />
          <SongList songs={this.filteredSong()} handleClick={this.handleClick} />
        </div>
        <KaraokeDisplay song={this.state.currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
