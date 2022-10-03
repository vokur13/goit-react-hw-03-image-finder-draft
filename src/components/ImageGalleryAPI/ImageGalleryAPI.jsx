import { Component } from 'react';
import { Loader } from 'components/Loader';

const API_KEY = '29248542-cea93977a5234fa0e2d1b3dfd';

export class ImageGalleryAPI extends Component {
  state = { data: null, loader: false, error: null };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loader: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (!response.ok) {
            //     throw new Error(response.status);
            throw new Error(`No item ${this.props.searchQuery} found`);
          }
          return response.json();
        })
        .then(data => this.setState({ data }))
        .catch(error => {
          console.log(error);
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loader: false });
        });
    }
  }

  render() {
    const { loader, data, error } = this.state;
    const { searchQuery } = this.props;
    return (
      <div>
        {/* {error && <div>{error.message}</div>} */}
        {/* {data.hits.length === 0 ? (
          <div>{error.message}</div>
        ) : (
          <div>{data.hits[0].id}</div>
        )} */}
        {loader && <Loader />}
        {!searchQuery && <div>Let us know query item</div>}
        {data && <div>{data.hits[0].id}</div>}
        {data && <div>{data.hits[0].webformatURL}</div>}
        {data && <div>{data.hits[0].largeImageURL}</div>}
        {data && (
          <div>
            <img src={data.hits[0].webformatURL} alt={data.hits[0].id} />
          </div>
        )}
      </div>
    );
  }
}
