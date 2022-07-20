/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../../service_methods/post_method';
import Gif from '../image/gif3.gif';
import './a.css';

function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    qualification: '',
    message: '',
    inquery_from_page: 7,
    course: 323,
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const url = 'https://grras.com/store_landing_inquery_api';
    postApi(url, formData);
    setLoading(false);
  };
  function SubmitButton() {
    if (formData.name && formData.email && formData.mobile && formData.qualification
      && formData.message) {
      return (
        <button
          type="submit"
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={handleSubmit}
        >
          Apply Now
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          disabled
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={handleSubmit}
        >
          Apply Now
        </button>
      );
    }
  }
  return (
    <>
      {
        loading && (
        <div>
          <img className="loader" src={Gif} alt="Loading" />
        </div>
        )
      }
      <section className="bg-lighter">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col">
                <div className="border-1px p-30 mb-0">
                  <h3 className="text-theme-colored mt-0 pt-5">Contact us</h3>
                  <hr />
                  <h5 className="text-theme-colored mt-0 pt-5">All fields are mandatory</h5>
                  <form
                    id="job_apply_form"
                    name="job_apply_form"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>
                            Name
                            <small>*</small>
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            required=""
                            onChange={handleChange}
                            value={formData.name}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>
                            Email
                            <small>*</small>
                          </label>
                          <input
                            name="email"
                            className="form-control required email"
                            type="email"
                            placeholder="Enter a valid Email"
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>
                            Mobile
                            <small>*</small>
                          </label>
                          <input
                            name="mobile"
                            className="form-control required email"
                            type="number"
                            placeholder="Enter Mobile Number"
                            onChange={handleChange}
                            value={formData.mobile}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>
                            Qualification
                            <small>*</small>
                          </label>
                          <select
                            name="qualification"
                            className="form-control required"
                            onChange={handleChange}
                            value={formData.qualification}
                          >
                            <option>Select</option>
                            <option value="b.tech">B.Tech</option>
                            <option value="m.tech">M.Tech</option>
                            <option value="bca">BCA</option>
                            <option value="mca">MCA</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        Message
                        <small>*</small>
                      </label>
                      <textarea
                        name="message"
                        className="form-control required"
                        rows="5"
                        onChange={handleChange}
                        value={formData.message}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value=""
                      />
                      <SubmitButton />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
