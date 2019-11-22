import React from 'react';
import { connect } from 'react-redux';

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
  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
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
