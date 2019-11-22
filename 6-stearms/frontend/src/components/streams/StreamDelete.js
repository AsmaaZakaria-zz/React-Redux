import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

// you can use <></> instead of <React.Fragment></React.Fragment>
// but not best practise

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

const mapDispatchToProps = {
  fetchStream,
  deleteStream
}

class StreamDelete extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id)
  }

  renderActions() {
    const { deleteStream, match } = this.props;
    const id = match.params.id;

    return (
      <React.Fragment>
        <button onClick={() => deleteStream(id)} className="ui negative button">Delete</button>
        <button onClick={() => history.push("/")} className="ui button">Cancel</button>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete stream with title: ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
