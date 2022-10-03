import { Component } from 'react';

const API_KEY = '29248542-cea93977a5234fa0e2d1b3dfd';

export class ImageGalleryAPI extends Component {
  state = { data: null };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => this.setState({ data }))
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>GalleryItem</h1>
        <p>{this.props.searchQuery}</p>
        {!this.props.searchQuery && <div>Let us know query item</div>}
        {this.state.data && <div>{this.state.data.hits[0].id}</div>}
      </div>
    );
  }
}
