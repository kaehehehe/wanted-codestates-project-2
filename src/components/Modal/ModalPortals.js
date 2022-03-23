import ReactDOM from 'react-dom';

export const ModalPortals = ({ children }) => {
  const ModalElement = document.querySelector('#modal');
  return ReactDOM.createPortal(children, ModalElement);
};
