import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    // default search results
    this.onTermSubmit('buildings');
  }

  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: { q: term }
    }).then(res => {
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      });
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              {selectedVideo && <VideoDetail video={selectedVideo} />}
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
