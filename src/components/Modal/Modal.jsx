import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

// - Модальное окно (componentDidMount и componentWillUnmount)
//   - Проблема z-index, как решать без костылей (порталы)
//   - Слушатель на keydown для Escape
//   - Слушатель на клик по Backdrop

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClic = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackDropClic}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('Нажали ESC, нужно закрыть модалку');

//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     // console.log('Кликнули в бекдроп');

//     // console.log('currentTarget: ', event.currentTarget);
//     // console.log('target: ', event.target);

//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
//         <div className="Modal__content">{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
