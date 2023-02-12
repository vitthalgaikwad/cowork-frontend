import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ showModal, setShowModal, title, children, ...props }) => {
  // const [show, setShow] = useState(show);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <Modal show={showModal} onHide={handleClose} {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { children }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CustomModal;
