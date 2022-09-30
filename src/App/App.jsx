import React, { Component } from 'react';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    showModal: false,
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkName = this.state.contacts.some(item =>
      item.name.toLowerCase().includes(contact.name.toLowerCase())
    );

    checkName
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  //   getFilteredItems = () => {
  //     //     const { showModal } = this.state;
  //     const normilizedFilter = filter.toLowerCase();
  //     return contacts.filter(item =>
  //       item.name.toLowerCase().includes(normilizedFilter)
  //     );
  //   };

  deleteItem = itemID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemID),
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Box as="main">
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && <Modal />}
      </Box>
    );
  }
}
