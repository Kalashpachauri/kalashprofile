import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//import Modal from "react-bootstrap/Modal";
//import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

export default function Footer() {

    //const [image, setImage] = useState(null);
    //const [preview, setPreview] = useState(null);
    //const [error, setError] = useState('');
    //const [showModal, setShowModal] = useState(false);

    //const [docs, setDocs] = useState([]);

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         // Check if the file is an image
    //         if (file.type.startsWith('image/')) {
    //             setError('');
    //             //setImage(file);
    //             const reader = new FileReader();
    //             reader.onloadend = () => {
    //                 setPreview(reader.result);
    //             };
    //             reader.readAsDataURL(file);
    //         } else {
    //             setError('Please upload a valid image file (JPEG, PNG, etc.).');
    //             //setImage(null);
    //             setPreview(null);
    //         }
    //     }
    // };

    // const handleImageClick = () => {
    //     if (preview) {
    //         const newWindow = window.open();
    //         if (newWindow) {
    //             newWindow.document.write(`<img src="${preview}" style="margin: 100px;" alt="Uploaded Image" />`);
    //             newWindow.document.title = "Uploaded Image";
    //             newWindow.document.close();
    //         } else {
    //             alert('Pop-up blocked. Please allow pop-ups for this website.');
    //         }
    //     }
    // };

    // const handleFileChange = (event) => {
    //     const files = event.target.files;
    //     const newDocs = [];

    //     for (let i = 0; i < files.length; i++) {
    //         const file = files[i];
    //         const reader = new FileReader();

    //         reader.onload = (e) => {
    //             newDocs.push({ uri: e.target.result });
    //             if (newDocs.length === files.length) {
    //                 setDocs(newDocs);
    //             }
    //         };

    //         reader.readAsDataURL(file);
    //     }
    // };

    return (
        <>
            <footer className="text-center text-lg-start footerall text-white mt-4">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-3">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with me on social networks:</span>
                    </div>

                    {/* Right */}
                    <div>

                        <button
                            className="btn mx-4 bg-transparent border-0 rounded text-white m-0 p-0 text-reset"
                            onClick={() => {
                                window.location.href = 'mailto:kalashpi07@gmail.com';
                            }}
                        >
                            <i className={`fab fa-google`} />
                        </button>
                        <button
                            className="btn me-4 bg-transparent border-0 rounded text-white m-0 p-0 text-reset"
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/kalashpachauri/', '_blank', 'noopener,noreferrer');
                                //window.location.href = 'www.linkedin.com/in/kalashpachauri';
                            }}
                        >
                            <i className="fab fa-linkedin" />
                        </button>
                        <button
                            className="btn me-4 bg-transparent border-0 rounded text-white m-0 p-0 text-reset"
                            onClick={() => {
                                window.open('', '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <i className="fab fa-github" />
                        </button>
                    </div>

                    {/* Right */}
                </section>

                {/* <section className="">
                    <div className="container text-center text-md-start mt-4">

                        <div className="row mt-3 px-2">

                            <div className="col-md-3 mb-3">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fa-solid fa-envelope me-3" />
                                    Feedback
                                </h6>
                                <form className="">

                                    <label>Your Name<small className='text-danger'>*</small></label><br />

                                    <input
                                        className="my-2 w-100 border rounded p-1"
                                        placeholder="Your Name"
                                    />
                                    <br />

                                    <label>Subject</label><br />

                                    <input
                                        className="my-2 w-100 border rounded p-1"
                                        placeholder="Subject for feedback"
                                    />
                                    <br />

                                </form>
                            </div>

                            <div className="col-md-3 px-3 mb-3">

                                <label className="mt-3 pt-4">
                                    Comment<small className='text-danger'>*</small>
                                    <i
                                        className="fa-solid fa-comment ms-2"
                                    />
                                </label>
                                <br />
                                <textarea
                                    className="my-2 border border-primary rounded p-2 w-100"
                                    placeholder="Enter the comment for the feedback here..."
                                    rows={4}
                                />
                            </div>

                            <div className="col-md-3 ps-3 mb-3 mx-0 pe-0">
                                <label
                                    className="pb-0 mx-0"
                                    style={{
                                        marginTop: '40px'
                                    }}
                                >
                                    Upload
                                    <i
                                        className="fa-solid fa-image ms-2"
                                    />
                                </label>
                                <br />

                                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                                {preview ? (
                                    <div className='mt-2'>
                                        <i
                                            className="fa-solid fa-circle-xmark text-danger"
                                            style={{
                                                top: '-45px',
                                                position: 'relative',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => {
                                                setPreview(null);
                                                setError(null);
                                            }}
                                        >
                                        </i>
                                        <img
                                            src={preview}
                                            alt="Uploaded Preview"
                                            className='object-fit-scale'
                                            style={{
                                                height: 115,
                                                width: 115,
                                                cursor: 'pointer'
                                            }}
                                            onClick={handleImageClick}
                                        />
                                    </div>
                                )
                                    :
                                    <label>
                                        <i
                                            htmlFor="imgfileInput"
                                            className="fa-regular fa-image pe-auto my-2 px-2 py-0"
                                            style={{
                                                fontSize: 118,
                                                cursor: 'pointer',
                                                borderStyle: 'solid',
                                                borderRadius: '20px'
                                            }}
                                        >
                                            <input
                                                id="imgfileInput"
                                                type="file"
                                                accept="image/*"
                                                style={{
                                                    display: 'none'
                                                }}
                                                onChange={handleImageChange}
                                            />
                                        </i>
                                    </label>
                                }

                            </div>

                            <div className="col-md-3 mx-auto px-0 mb-4">

                                <button
                                    className="btn btn-primary w-100 mt-5 mb-2 py-2 mx-auto"
                                >
                                    Submit Feedback
                                </button>

                                <small>
                                    <i className="fa-solid fa-circle-exclamation me-2 text-danger"></i>
                                    Error
                                </small>

                                <small className="mx-0">
                                    <i className="fa-solid fa-triangle-exclamation me-2 text-warning"></i>
                                    (Fields with <small className='text-danger'>*</small> are mandatory)
                                </small><br />

                            </div>
                            
                        </div>                        

                    </div>
                </section> */}

                <div
                    className="text-center py-2 p-0"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    <p>
                        <OverlayTrigger
                            placement="top"
                            //delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip id="button-tooltip-2">
                                    Submit your feedback to me by clicking on the button.
                                </Tooltip>
                            }
                        >
                            <i className="fa fa-info-circle me-2 cursor"></i>
                        </OverlayTrigger>
                        Submit your Feedback :
                        <button
                            className="text-reset fw-bold bg-transparent text-decoration-underline border-0 p-0 px-2 m-0"
                            onClick={() => {
                                window.location.href = 'mailto:kalashpi07@gmail.com';
                            }}
                        >
                            Click Me
                        </button>
                    </p>
                </div>

                {/* <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    <small>
                        © 2024 Copyright: 
                        <a
                            className="text-reset fw-bold"
                            href="https://kp.com/"
                        >
                            kalash.com
                        </a>
                    </small>
                </div> */}

            </footer>

            {/* <Modal
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
                            {
                                docs.length > 0 ?
                                    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
                                    :
                                    null
                            }
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Feedback</button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal> */}

        </>
    )
}