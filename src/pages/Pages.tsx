import React from 'react';
import "./Pages.css";
// HTML CSS tərəfi
import { useFormik } from 'formik';
// Kriteriyaları təyin edir
import * as Yup from 'yup';
// bildiriş (react toast)
// Tost funksianallıq üçündür 
// Toaster göstərmək
import { toast, Toaster } from 'react-hot-toast';
import { BsEnvelope } from "react-icons/bs";
import { RiPhoneFill } from "react-icons/ri";
import { FaPrint } from "react-icons/fa";
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const formik = useFormik<FormValues>({
       // Başlanğıc dəyərlər
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    // Qaydalar
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Ad ən az 3 simvol olmalıdır')
        .max(25, 'Ad ən çox 25 simvol ola bilər')
        // Boş saxlaya bilmərsən
        .required('Ad vacibdir'),
      email: Yup.string()
        .email('Email düzgün olmalıdır')
        .required('Email vacibdir'),
      subject: Yup.string()
        .required('Subject vacibdir'),
      message: Yup.string()
        .required('Mesaj sahəsi boş ola bilməz'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send(
        //Service ID
        'service_6y41isp',
        // template ID
        'template_yd5kf0r',
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        // user ID
        'TCHCCqemVns-DC4C7'       
      )
      .then(() => {
        toast.success('Mesaj uğurla göndərildi!');
        //Təmizləyir
        resetForm();  
      })
      .catch(() => {
        toast.error('Mesaj göndərilərkən xəta baş verdi.');
      });
    },
  });

  return (
    <div className="mix">
      <div className="text-content text-center text-white">
        <h4>CONTACT</h4>
        <p>Home / Pages / Contact</p>
      </div>
      <div className="pages-contact container py-5">
        <div className="row">
          <div className="pages-form col-12 col-md-8">
            <form onSubmit={formik.handleSubmit} className="p-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  // formcontrol lazım olan kodları əlavə edir
                  className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                  // Dəyişiklik olarsa
                  onChange={formik.handleChange}
                  // Kənara çıxdın
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="subject"
                  className={`form-control ${formik.touched.subject && formik.errors.subject ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="invalid-feedback">{formik.errors.subject}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows={4}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="invalid-feedback">{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="btn send-message">
                SEND MESSAGE
              </button>
            </form>
            <Toaster position='top-center'/>
          </div>

          <div className="about py-5 col-12 col-md-4">
            <div className="address pt-2">
              <h6>ADDRESS</h6>
              <p>Zenna inc.</p>
              <p>546 Little Lonsdale st</p>
              <p>Philippines</p>
              <p>PH 62058</p>
            </div>
            <div className="information pt-2">
              <h6>INFORMATION</h6>
              <p><BsEnvelope /> <span className='ms-1'> theme@support.com</span></p>
              <p><RiPhoneFill /> +1 (800) 888 5260 52 63</p>
              <p><FaPrint /> +1 (800) 888 5260 52 64</p>
            </div>
            <div className="business pt-2">
              <h6>BUSINESS HOURS</h6>
              <p>Monday – Friday: 9am to 20 pm</p>
              <p>Saturday: 9am to 17 pm</p>
              <p>Sunday: day off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
