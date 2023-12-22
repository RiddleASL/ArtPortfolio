import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Demo = (props) => {
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch Demo
			</Button>

			<Modal show={show} onHide={handleClose} className="modal-xl">
				<Modal.Header>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body className="ratio ratio-16x9">
					<iframe src={props.url} > </iframe>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Demo;
