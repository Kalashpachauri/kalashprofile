import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

export default function FeedbackForm() {

    const [showModal, setShowModal] = useState(false);
    const [docs, setDocs] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newDocs = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                newDocs.push({ uri: e.target.result });
                if (newDocs.length === files.length) {
                    setDocs(newDocs);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Modal
                //ref={modalRef}
                show={showModal}
                onHide={() => {
                    setShowModal(!showModal);
                }}
                dialogClassName=""
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xl">Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <small className='text-danger'>*</small>
                            <input
                                type="email" className="form-control"
                                id="inputEmail4"
                                placeholder="Your Email ID here.."
                            />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">
                                Subject
                            </label>
                            <small className='text-danger'>*</small>
                            <input
                                type="text"
                                className="form-control"
                                id="feedbacksubject"
                                placeholder="Enter feedback subject here.."
                            />
                        </div>

                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Body
                            </label>
                            <small className='text-danger'>*</small>
                            <textarea
                                type="text"
                                className="form-control"
                                id="feedbackbody"
                                placeholder="Enter your feedback here..."
                                rows={10}
                            />
                        </div>

                        <input type="file" multiple onChange={handleFileChange} />

                        <div>
                            {docs.length > 0 && <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />}
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Feedback</button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    )
}