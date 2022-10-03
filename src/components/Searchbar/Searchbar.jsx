import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import '../../css/styles.css';

export class Searchbar extends Component {
  state = { query: '' };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.error('Please input Your query');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit">
            <span>
              <ImSearch style={{ marginRight: 8 }} />
              Search
            </span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
