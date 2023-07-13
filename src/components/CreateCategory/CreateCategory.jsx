import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CreateCategory = ({ updateArray }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleClose = () => {
    const newElement = { title: title, desc: desc };
    updateArray(newElement);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Text className="text-muted">
                Create a title for the new category.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleClose}
              style={{ margin: "5px" }}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCategory;
