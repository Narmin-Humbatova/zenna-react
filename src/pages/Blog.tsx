import React from 'react'
import './Blog.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';

import { BsBookmarkFill } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { BsChatFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";

const Blog: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: values => {
      toast.success('Message sent successfully');
      console.log(values);
    }
  });

  return (
    <div className='blog-main py-5'>
      <div className="designing py-5 text-center">
        <h4 className='text-uppercase text-center'>Designing Mobile eCommerce Apps</h4>
        <p><BsCalendar className='blog-icon' /><span>19 September, 2016</span> <RiAdminFill className='blog-icon' /><span> Admin</span> <BsBookmarkFill className='blog-icon' /><span>Fashion</span> <BsChatFill className='blog-icon' /><span> 15 Comments</span> </p>
      </div>

      <div className='blog-foto container'>
        <div className="mobile-app container py-5">
          <div className="row">
            <div className="mobile-left col-12 col-md-8">
            <div className="main-img">
            <img src="/public/image/blog/blog-foto.jpg" alt="" className='w-100'/>
          </div>
              <h5 className='text-uppercase pt-5'>Let's try to design your first mobile app</h5>
              <p className='py-3 possess'>We possess within us two minds. So far I have written only of the conscious mind. The Best theme on ThemeForest. We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind.</p>
              <span className='py-3'>Zenna Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</span>
              <div className="bernard p-5">
                <p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>
                <span>Bernard M. Baruch</span>
              </div>
              <p className='py-3'>Afela Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. <b>So far I have written</b> only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
              <div className="flexible py-2">
                <h5 className='text-uppercase py-2'>This is the best flexible theme from DeoThemes</h5>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged and changed into their physical equivalent.</p>
                <div className="tags d-flex justify-content-between">
                  <p>Tags: Design, Photography, Branding, Creative</p>
                  <span>Share: <FaFacebookF className='ms-1' /><FaTwitter className='ms-1' /><FaGooglePlusG className='ms-1' /><TfiPinterest className='ms-1' /></span>
                </div>
              </div>
            </div>

            <div className="mobile-right col-12 col-md-4 py-4">
            <div className="categories col-12 col-md-4">
            <h5 className='py-3'>CATEGORİES</h5>
            <hr />
            <p><a href="#">Women</a></p>
            <hr />
            <p><a href="#">Men</a></p>
            <hr />
            <p><a href="#">Accessories</a></p>
            <hr />
            <p><a href="#">Bags</a></p>
            <hr />
            <p><a href="#">Watches</a></p>
            <hr />
          </div>
              <h5>RECENT POSTS</h5>
              <hr />
              <div className="recent-card1 d-flex">
                <img src="/public/image/blog/recent1.jpg" alt="" />
                <div className="recent-paragraf ms-3">
                  <p >6 Ways to Be More Productive</p>
                  <p><BsCalendar />19 Mar, 2016</p>
                </div>

              </div>
              <hr />
              <div className="recent-card2 d-flex">
                <img src="/public/image/blog/recent2.jpg" alt="" />
                <div className="recent-paragraf ms-3">
                  <p >3 Tips to Align Your Startup</p>
                  <p><BsCalendar />16 Mar, 2016</p>
                </div>
              </div>
              <hr />
              <div className="recent-card3 d-flex">
                <img src="/public/image/blog/recent3.jpg" alt="" />
                <div className="recent-paragraf ms-3">
                  <p >Make more money blogging with these 6 tips</p>
                  <p><BsCalendar />16 Mar, 2016</p>
                </div>
              </div>
              <div className="tweets py-5">
                <h5>RECENT TWEETS</h5>
                <hr />
                <h5 className='pt-3'>TAGS</h5>
                <hr />
                <button><a href="#">Multi-purpose</a></button>
                <button><a href="#">Creative</a></button>
                <button><a href="#">Elegant</a></button>
                <button><a href="#">Clean</a></button>
                <button><a href="#">Modern</a></button>
                <button><a href="#">Responsive</a></button>
                <button><a href="#">E-commerce</a></button>
                <button><a href="#">WordPress</a></button>
                <button><a href="#">Woocommerce</a></button>
                <button><a href="#">Store</a></button>
                <button><a href="#">Business</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className="reply container py-5 ">
          <div className="row">
            <div className="comment col-12 col-md-8">
            <h5 className='text-uppercase'>Leave a Reply</h5>
            <div className="blog-form">       
            <form onSubmit={formik.handleSubmit} className="py-4">
            <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows={4}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="invalid-feedback">{formik.errors.message}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="website" className="form-label">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="website"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>



              <button type="submit" className="btn ">
                POST COMMENT
              </button>
            </form>
            <Toaster />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog