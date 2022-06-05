/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Contactus() {
  return (
    <section className="bg-lighter">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-4">
              <div className="border-1px p-30 mb-0">
                <h3 className="text-theme-colored mt-0 pt-5">FOR INTERNSHIP</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                <form id="job_apply_form" name="job_apply_form" action="http://html.kodesolution.live/s/counseling/v3.0/demo/includes/job.php" method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Name
                          <small>*</small>
                        </label>
                        <input name="form_name" type="text" placeholder="Enter Name" required="" className="form-control" />
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
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
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
                        <input name="form_mobile" className="form-control required email" type="number" placeholder="Enter Mobile Number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Choose The Duration Of Your Internship
                          <small>*</small>
                        </label>
                        <select name="form_sex" className="form-control required">
                          <option value="30">30 Days</option>
                          <option value="45">45 Days</option>
                          <option value="60">2 Month</option>
                          <option value="90">3 Month</option>
                          <option value="120">4 Month</option>
                          <option value="180">6 Month</option>
                        </select>

                      </div>
                    </div>

                  </div>

                  <div className="form-group">
                    <label>
                      Message
                      <small>*</small>
                    </label>
                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Your cover letter/message sent to the employer" />
                  </div>

                  <div className="form-group">
                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                    <button type="submit" className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10" data-loading-text="Please wait...">Apply Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border-1px p-25">
                <h4 className="text-theme-colored text-uppercase m-0">FOR CLASSROOM TRAINING</h4>
                <div className="line-bottom mb-30" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                <form id="job_apply_form" name="job_apply_form" action="http://html.kodesolution.live/s/counseling/v3.0/demo/includes/job.php" method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Name
                          <small>*</small>
                        </label>
                        <input name="form_name" type="text" placeholder="Enter Name" required="" className="form-control" />
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
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
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
                        <input name="form_mobile" className="form-control required email" type="number" placeholder="Enter Mobile Number" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      Message
                      <small>*</small>
                    </label>
                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Your cover letter/message sent to the employer" />
                  </div>

                  <div className="form-group">
                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                    <button type="submit" className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10" data-loading-text="Please wait...">Apply Now</button>
                  </div>
                </form>
              </div>

            </div>
            <div className="col-md-4">
              <div className="border-1px p-25">
                <h4 className="text-theme-colored text-uppercase m-0">FOR CLASSROOM TRAINING</h4>
                <div className="line-bottom mb-30" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                <form id="job_apply_form" name="job_apply_form" action="http://html.kodesolution.live/s/counseling/v3.0/demo/includes/job.php" method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Name
                          <small>*</small>
                        </label>
                        <input name="form_name" type="text" placeholder="Enter Name" required="" className="form-control" />
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
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
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
                        <input name="form_mobile" className="form-control required email" type="number" placeholder="Enter Mobile Number" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Date
                          <small>*</small>
                        </label>
                        <input name="form_mobile" className="form-control required email" type="date" placeholder="Enter Mobile Date" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Message
                      <small>*</small>
                    </label>
                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Your cover letter/message sent to the employer" />
                  </div>

                  <div className="form-group">
                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                    <button type="submit" className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10" data-loading-text="Please wait...">Apply Now</button>
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
