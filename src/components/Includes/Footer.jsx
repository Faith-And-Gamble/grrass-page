import React from 'react';

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="footer"
        data-bg-img="images/footer-bg.png"
        data-bg-color="#25272e"
      >
        <div className="container pt-70 pb-40">
          <div className="row border-bottom-black">
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <img
                  className="mt-10 mb-20"
                  alt=""
                  src="images/logo-wide-white-footer.png"
                />
                <p>
                  203, Envato Labs, Behind Alis Steet, Melbourne, Australia.
                </p>
                <ul className="list-inline mt-5">
                  <li className="m-0 pl-10 pr-10">
                    {' '}
                    <i className="fa fa-phone text-theme-colored mr-5" />
                    {' '}
                    <a className="text-gray" href="/">
                      123-456-789
                    </a>
                    {' '}
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    {' '}
                    <i className="fa fa-envelope-o text-theme-colored mr-5" />
                    {' '}
                    <a className="text-gray" href="/">
                      contact@yourdomain.com
                    </a>
                    {' '}
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    {' '}
                    <i className="fa fa-globe text-theme-colored mr-5" />
                    {' '}
                    <a className="text-gray" href="/">
                      www.yourdomain.com
                    </a>
                    {' '}
                  </li>
                </ul>
                <ul className="social-icons icon-dark icon-theme-colored icon-circled icon-sm mt-15">
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Latest News</h5>
                <div className="latest-posts">
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="images/blog/ln1.jpg" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Sustainable Construction</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="images/blog/ln2.jpg" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Industrial Coatings</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="images/blog/ln3.jpg" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Storefront Installations</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Useful Links</h5>
                <ul className="list angle-double-right list-border">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Campaign</a>
                  </li>
                  <li>
                    <a href="/">Latest News</a>
                  </li>
                  <li>
                    <a href="/">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Photos from Flickr</h5>
                <div id="flickr-feed" className="clearfix">
                  <script
                    type="text/javascript"
                    src="http://www.flickr.com/badge_code_v2.gne?count=9&amp;display=latest&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-black-333">
          <div className="container pt-15 pb-10">
            <div className="row">
              <div className="col-md-6">
                <p className="font-11 text-black-777 m-0 sm-text-center">
                  Copyright &copy;2016 ThemeMascot. All Rights Reserved
                </p>
              </div>
              <div className="col-md-6 text-right">
                <div className="widget no-border m-0">
                  <ul className="list-inline sm-text-center mt-5 font-12">
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/">Help Desk</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="scrollToTop" href="/">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
}

export default Footer;
