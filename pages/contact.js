
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const [hasError, setHasError] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: ''
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{11}$/;

  const onChange = (event) => {
    const { name, value } = event.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'email' && !emailPattern.test(value)) {
      setHasError('Please enter a valid email address.');
    } else if (name === 'phone' && !phonePattern.test(value)) {
      setHasError('Please enter a valid phone number of 11 digits.');
    } else {
      setHasError(null);
    }
  };

  const submitEmail = (e) => {
    e.preventDefault();

    if (!emailPattern.test(data.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!phonePattern.test(data.phone)) {
      toast.error('Please enter a valid phone number of 11 digits.');
      return;
    }

    emailjs.send('service_31p2vdp', 'template_og2rtkf', {
      from_name: data.name,
      email: data.email,
      website: data.website,
      phone: data.phone,
      message: data.message,
    }, 'XohnXcZl3e1DVEBqg')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Success! We\'ll get back to you soon. Thank you!');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('FAILED...', error.text);
        }
      );
    console.log('Form data:', data);
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      website: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form ref={form} onSubmit={submitEmail}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={data.name}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={data.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={data.phone}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="website"
                          placeholder="Website"
                          value={data.website}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          type="text"
                          // id="projectIdea"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          value={data.message}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          <i className="bi bi-gear" /> Free Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>
                      Enfotrix (Pvt.) Ltd. <br />
                      zafarullah
                      chowk, Sargodha
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number</h4>
                    <p>
                    +92 315 5658095<br />
                      {/* +880 636 524 265,{" "} */}
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                      Enfotrix@gmail.com <br />
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d72.683456!3d32.080731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s32.080731%2C%2072.683456!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};
export default Contact;
