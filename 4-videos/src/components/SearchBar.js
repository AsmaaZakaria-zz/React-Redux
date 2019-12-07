import React from 'react';

class SearchBar extends React.Component {
  state = { term: "" };

  onHandleSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onHandleSubmit(e)}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
