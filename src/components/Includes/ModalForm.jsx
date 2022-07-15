/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../../service_methods/post_method';
import Pdf from '../course_content.pdf';
import './form.css';

export default function MForm() {
  const [link, setLink] = useState(false);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    const url = 'https://grras.com/store_landing_inquery_api';
    postApi(url, form);
    // e.target.reset();
  };
  function SubmitButton() {
    if (form.name && form.email && form.mobile
      && form.message) {
      setLink(true);
      return (
        <button
          type="submit"
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={submit}
        >

          Submit
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          disabled
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          onClick={submit}
        >
          Submit
        </button>
      );
    }
  }
  return (
    <div className="form-box">
      {/* <form> */}

      <div className="field1">
        <label> Please provide some information </label>

        <input
          type="text"
          className="form-input"
          name="name"
          placeholder="Name"
          onChange={updateForm}
          value={form.name}
        />

        <input
          type="number"
          className="form-input"
          name="mobile"
          placeholder="mobile "
          onChange={updateForm}
          value={form.mobile}
        />

        <input
          type="email"
          className="form-input"
          name="email"
          placeholder="Enter a valid Email"
          onChange={updateForm}
          value={form.email}
        />

        <textarea
          type="text"
          className="form-input"
          name="message"
          placeholder="Message"
          onChange={updateForm}
          value={form.message}
        />
      </div>
      <SubmitButton />
      {
        link && (
        <a
          className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
          href={Pdf}
          download="Aarambh course content"
          target="_blank"
          rel="noreferrer"
        >
          Download Content
        </a>
        )
      }
      {/* </form> */}
      {/* end of form */}

      {/* PREV button */}

    </div>
  // end of form-box
  );
}
