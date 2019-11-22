import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

const mapDispatchToProps = {
  fetchStream
}

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destory();
  }

  buildPlayer() {
    const { match } = this.props;

    if (this.flvPlayer || !this.props.stream) {
      return;
    }

    this.flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${match.params.id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamShow);
