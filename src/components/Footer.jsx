
import { Link } from "react-router-dom";
const Footer = ()=>{
  return(
    <>
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LuxStay - Footer</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./footer.css" />
  <footer className="bg-dark text-light py-5">
    <div className="container">
      <div className="row gy-4">
    
        <div className="col-lg-4 col-md-6">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span
              className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
              style={{ width: 40, height: 40 }}
            >
              L
            </span>
            <h5 className="mb-0 fw-bold">LuxStay</h5>
          </div>
          <p className=" small">
            Book luxury hotels with confidence. Best prices, verified reviews,
            and 24/7 support across India.
          </p>
          <div className="d-flex gap-2">
            <a href="#" className="text-light">
              <i className="bi bi-facebook fs-5" />
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-twitter fs-5" />
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-instagram fs-5" />
            </a>
            <a href="#" className="text-light">
              <i className="bi bi-linkedin fs-5" />
            </a>
          </div>
        </div>
  
        <div className="col-lg-2 col-md-3 col-6">
          <h6 className="fw-semibold text-warning mb-3">Company</h6>
          <ul className="list-unstyled">
            <li>
              <a href="#" className=" text-decoration-none small">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Press
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Blog
              </a>
            </li>
          </ul>
        </div>
  
        <div className="col-lg-2 col-md-3 col-6">
          <h6 className="fw-semibold text-warning mb-3">Support</h6>
          <ul className="list-unstyled">
            <li>
              <a href="#" className=" text-decoration-none small">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6">
          <h6 className="fw-semibold text-warning mb-3">Legal</h6>
          <ul className="list-unstyled">
            <li>
              <a href="#" className=" text-decoration-none small">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none small">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
   
        <div className="col-lg-2 col-md-6">
          <h6 className="fw-semibold text-warning mb-3">Newsletter</h6>
          <p className="small ">Get exclusive deals in your inbox</p>
          <form>
            <div className="input-group">
              <input
                type="email"
                className="form-control form-control-sm rounded-start-pill"
                placeholder="Email"
              />
              <button
                className="btn btn-warning btn-sm rounded-end-pill px-3"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="my-4 border-secondary" />
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="mb-0 small ">© 2025 LuxStay. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <small className="">
            Made with <span className="text-danger">❤️</span> in India
          </small>
        </div>
      </div>
    </div>
  </footer>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
</>
    </>
  )
}
export default Footer;

