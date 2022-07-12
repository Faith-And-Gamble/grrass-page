/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// import backgrounddivider from '../components/image/bgDowwn.jpg';
import Img1 from '../components/image/training.jpg';

function Hire() {
  return (
    <div>
      <section className="divider layer-overlay back" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="container pt-70 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="title text-white">Hire from us.</h4>
                <ul className="breadcrumb white">
                  <li><a className="text-white" href="/">Home</a></li>
                  <li className="active">ISA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-silver-light">
        <div className="container pb-sm-10">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-details bg-white border-theme-color-1px p-30 pt-40 pr-20 pb-60">
                <h3 className="font-24 mb-20">
                  Hire From Us
                  {' '}
                </h3>
                <h5>
                  What does an organization want more than to hire people who help them grow?
                  Hire someone who they can trust will help them grow!
                </h5>
                <h5>
                  At Grras Solutions, you have the opportunity to hire some of the finest,
                  most well-skilled professionals in the fields of DevOps and Cloud Computing.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lighter">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="widget-title title-dots mt-30"><span>What do our Students Learn?</span></h4>
              </div>

              <div className="col-md-6">
                <div className="widget">
                  <ul className="list list-divider list-border">
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Basics of Operating System & IT Fundamental
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Linux Administration (RHCSA)
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Server Configuration & Management
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Automation using Ansible (RHCE)
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Virtualization & Cloud Computing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        AWS Cloud
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Container Technology (Docker)
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Kubernetes
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Terraform (IaaC)
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        DevOps
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-check-square-o mr-10 text-black-light" />
                        {' '}
                        Various DevOps Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6">
                <article className="post media-post clearfix pb-0 mb-10">
                  <div className="post-right">
                    <h5 className="entry-title text-uppercase mt-0 mb-5"><a href="/">Why Hire from Grras Solutions?</a></h5>
                    <p>
                      Grras Solutions is a known name in tech training and
                      certification field. With more than 13 years
                      of back-up in the same, you are guaranteed to only
                      find those who are skilled, trained and polished.
                      Since you are on the search for professionals
                      who will become a part of your team and lead you to success,
                      Grras Solutions is the place that should be your first and final stop.
                      Along with a wide array of topics and subjects that are covered
                      in our Pay After Placement program, they are also seasoned with practical
                      experience after having explored the opportunity of working on multiple live,
                      real-world projects.
                      Thus, you are hiring those with not only theoretical knowledge but
                      those with practical experience!

                    </p>
                  </div>
                </article>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6">
                <article className="post media-post clearfix pb-0 mb-10">
                  <div className="post-right">
                    <h5 className="entry-title text-uppercase mt-0 mb-5"><a href="/">What have our Students Worked Upon?</a></h5>
                    <p>
                      Our students work on various Live Industry Projects to gain practical
                      working experience to ensure they have knowledge of how the
                      real-world work is done.
                      <ul>
                        <li>
                          • 5+ live industry projects to deploy
                          production-ready application on AWS Cloud using 2 different services.
                        </li>
                        <l1>
                          •	5+ live industry projects to configure
                          & deploy application using DevOps tools such as Jenkins for
                          CI/CD pipeline and integration with Terraform, Ansible and Kubernetes.
                        </l1>
                      </ul>
                    </p>
                  </div>
                </article>
              </div>

              <hr />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hire;

// •	Kubernetes
// •	Terraform (IaaC)
// •	DevOps
// •	Various DevOps Tools
