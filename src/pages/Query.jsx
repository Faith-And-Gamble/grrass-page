/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import postApi from '../service_methods/post_method';

function Query() {
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
          className="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
          data-loading-text="Please wait..."
          onClick={handleSubmit}
        >
          Send your message
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
          data-loading-text="Please wait..."
          disabled
          onClick={handleSubmit}
        >
          Send your message
        </button>
      );
    }
  }
  return (
    <section id="contact" className="bg-silver-light">
      <div className="container pb-sm-10">
        <div className="row">
          <div className="col-md-5">
            <div className="contact-details bg-white border-theme-color-1px p-30 pt-40 pr-20 pb-60">
              <h3 className="font-24 mb-20">
                If You have any query
                {' '}
                <span className="text-theme-colored">get in touch</span>
                {' '}
                with
                us
              </h3>
              <p>
                B4, Second Floor, Bhaskar Flyover, opposite Dainik Bhaskar,
                Vivek Vihar, Bajaj Nagar, Jaipur, Rajasthan 302015
              </p>
              <ul className="list-icon theme-colored square mt-30">
                <li>
                  <i className="fa fa-map-marker text-white" />
                  <span className="font-weight-600 text-black-222">
                    Address:
                    {' '}
                  </span>
                  B4, Second Floor, Bhaskar Flyover Jaipur
                </li>
                <li>
                  <i className="fa fa-phone text-white" />
                  <span className="font-weight-600 text-black-222">
                    Phone:
                    {' '}
                  </span>
                  +91-9983340133
                </li>
                <li>
                  <i className="fa fa-envelope-o text-white" />
                  <span className="font-weight-600 text-black-222">
                    Email:
                    {' '}
                  </span>
                  info@grras.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="line-bottom mt-0 mb-20 mt-sm-30">
              Leave Your
              {' '}
              <span className="text-theme-colored">Query</span>
              {' '}
              Here
            </h3>
            <p className="mb-20">
              We are always looking for suggestions and feedback.
            </p>
            <p className="mb-20">
              All fields are mandatory.
            </p>

            <form
              id="contact_form"
              name="contact_form"
              className=""
              action=""
              method="post"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                      required=""
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="email"
                      className="form-control required email"
                      type="text"
                      placeholder="Enter Email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <select
                      name="duration_days"
                      className="form-control required"
                      onChange={handleChange}
                      value={formData.duration_days}
                    >
                      <option>Select Qualification</option>
                      <option value="b.tech">B.Tech</option>
                      <option value="m.tech">M.Tech</option>
                      <option value="bca">BCA</option>
                      <option value="mca">MCA</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="mobile"
                      className="form-control"
                      type="text"
                      placeholder="Enter Phone"
                      onChange={handleChange}
                      value={formData.mobile}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control required"
                  rows="5"
                  placeholder="Enter Message"
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
    </section>
  );
}

export default Query;
