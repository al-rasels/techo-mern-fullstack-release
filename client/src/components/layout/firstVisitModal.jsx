import Modal from "react-bootstrap/Modal";
import propic from "../../assets/images/propic.webp";
function FirstVisitModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-md-flex justify-content-between align-items-center gap-4">
          <img
            src={propic}
            className="card-img-top w-50 rounded-3"
            alt="profile-pic"
          />

          <div className="card-text bg-white p-4 w-20 ">
            <h4 className="card-title text-center text-bold text-uppercase">
              {" "}
              Hi, I am Humaun Al Rasel
            </h4>

            <p className="text-justify text-dark text-bolder mt-3">
              Developer of this project.This project is still in development
              phase. While I am dedicated to enhancing its functionality, some
              bugs or errors may still arise. I am continuously working to
              refine the user experience, and I highly appreciate any feedback
              or suggestions for improvement.
            </p>
            <p className="text-muted">
              Please feel free to reach out to me via email or GitHub for any
              suggestions or feedback.
            </p>
            <p>
              {" "}
              <strong>Email:</strong>{" "}
              <a href="mailto:rm.shanto786@gmail.com" className="text-success">
                rm.shanto786@gmail.com
              </a>
              <br />
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/al-rasels"
                target="_blank"
                className="text-success">
                https://github.com/al-rasels
              </a>
            </p>
            <p className="text-warning text-center mx-auto">
              This will inconvenience you only once.
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-around gap-5 mx-auto">
          <p className="text-bold text-success">
            {" "}
            Connect with me on social media!
          </p>
          <span>
            <a
              href="https://www.facebook.com/humaunalrassel.shanto"
              target="_blank"
              className="me-2">
              <i className="bi bi-facebook link-success"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/al-rasel"
              target="_blank"
              className="me-2 link-success">
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/al-rasels"
              target="_blank"
              className="me-2 link-success">
              <i className="bi bi-github"></i>
            </a>
          </span>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default FirstVisitModal;
