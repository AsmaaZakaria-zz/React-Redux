import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  }
}

const mapDispatchToProps = {
  fetchStream,
  editStream,
}

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    } else if (this.props.currentUserId === this.props.stream.userId) {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, 'title', 'description')}
            onSubmit={this.onSubmit}
          />
        </div>
      )
    }
    return (
      <h4>
        You Don't Have Permission To Edit!
      </h4>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StreamEdit);
