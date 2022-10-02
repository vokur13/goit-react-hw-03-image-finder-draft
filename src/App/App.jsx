import React, { Component } from 'react';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { SearchBar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';

// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <SearchBar />
        <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
          <ImageGallery />
          <Loader />
        </Box>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is modal content as children!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa et
              ab provident esse tempora dolorum dicta neque officia, distinctio
              ad?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}
