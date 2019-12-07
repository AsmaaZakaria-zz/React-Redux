import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// this.props === { songs, selectSong }
class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// everytime I click on select button, this function will rerun and return a new updated state
const mapStateToProps = (state) => {  // state is all the data indise of a redux store
  return {
    songs: state.songs
  };
}

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
