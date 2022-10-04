import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/styles.css';
// import axios from 'axios';
// import { Box } from 'components/Box';
// import { Button } from 'components/Button';
import { Searchbar } from 'components/Searchbar';
import { ImageGalleryAPI } from 'components/ImageGalleryAPI';
// import { ImageGallery } from 'components/ImageGallery';

// import { Modal } from 'components/Modal';
// import Button from '@mui/material/Button';

export class App extends Component {
  state = { searchQuery: '' };

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGalleryAPI searchQuery={this.state.searchQuery} />
        <ToastContainer position="top-center" autoClose={3000} />
      </>
    );
  }
}
