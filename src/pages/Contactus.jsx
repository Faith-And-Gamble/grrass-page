/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../service_methods/post_method';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    duration_days: '',
    message: '',
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let formBody = [];
    // eslint-disable-next-line guard-for-in
    for (const property in formData) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(formData[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');
    const url = 'https://grras.com/store_landing_inquery_api';
    postApi(url, formBody);
  };
  function SubmitButton() {
    if (formData.name && formData.email && formData.mobile && formData.duration_days
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
    <section className="bg-lighter">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="border-1px p-30 mb-0">
                <h3 className="text-theme-colored mt-0 pt-5">Contact us</h3>
                <h3 className="text-theme-colored mt-0 pt-5">You are very important to us. We will get back to you soon...!</h3>
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
                          onChange={handleChange}
                          value={formData.email}
                          placeholder="Enter Email"
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
                          onChange={handleChange}
                          value={formData.mobile}
                          placeholder="Enter Mobile Number"
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
                          name="duration_days"
                          className="form-control required"
                          onChange={handleChange}
                          value={formData.duration_days}
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
                      onChange={handleChange}
                      value={formData.message}
                      rows="5"
                      placeholder="Your cover letter/message sent to the employer"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      value=""
                    />
                    {/* <button
                      type="submit"
                      className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
                      onClick={handleSubmit}
                    >
                      Apply Now
                    </button> */}
                    <SubmitButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
