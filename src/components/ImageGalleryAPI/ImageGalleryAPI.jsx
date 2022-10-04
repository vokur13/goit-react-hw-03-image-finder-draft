import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';

const API_KEY = '29248542-cea93977a5234fa0e2d1b3dfd';

export class ImageGalleryAPI extends Component {
  state = { data: null, error: null, status: 'idle' };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
            //     throw new Error(`No item ${this.props.searchQuery} found`);
          }
          return response.json();
        })
        .then(data => {
          if (data.hits.length === 0) {
            return toast.error(`No item ${this.props.searchQuery} found`);
          }
          console.log('data', data);
          const { hits } = data;
          console.log(hits);
          this.setState({ data, status: 'resolved' });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  render() {
    const { data, error, status } = this.state;

    if (status === 'idle') {
      return <div>Let us know query item</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <div>{error}</div>;
    }
    if (status === 'resolved') {
      return <ImageGallery data={data.hits} />;
    }
  }
}
