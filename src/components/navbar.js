import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div >

      <div class="site-wrap" >

        <div class="site-mobile-menu">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        {/* <!-- .site-mobile-menu --> */}

        <div class="site-navbar mt-4">
          <div class="container py-1">
            <div class="row align-items-center">
              <div class="col-8 col-md-8 col-lg-4">
                <h1 class="mb-0"><a href="index.html" class="text-white h2 mb-0"><strong>Khanqah Akhterya<span class="text-danger">.</span></strong></a></h1>
              </div>
              <div class="col-4 col-md-4 col-lg-8">
                <nav class="site-navigation text-right text-md-right" role="navigation">

                  <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

                  <ul class="site-menu js-clone-nav d-none d-lg-block">

                    <li><NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'white' }} exact={true} >Home</NavLink></li>
                    <li><NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'white' }} >About</NavLink></li>

                    <li class="has-children">
                      <NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 0, personId: 0 } }} activeStyle={{ fontWeight: 'bold', color: 'white' }}>Bayan</NavLink>
                      <ul class="dropdown arrow-top">
                        <li class="has-children">
                          <NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 0, personId: 1 } }}>Molana Abid Shah Sb Db</NavLink>
                          <ul class="dropdown">
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 4, personId: 1 } }}>Khanqah Majlis</NavLink></li>
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 6, personId: 1 } }}>Short Bayan</NavLink></li>
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 5, personId: 1 } }}>Asfaar Bayan</NavLink></li>
                          </ul>
                        </li>
                        <li class="has-children">
                          <NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 0, personId: 2 } }}>Sufi Shamim Sb RA</NavLink>
                          <ul class="dropdown">
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 4, personId: 2 } }}>khanqah Majlis</NavLink></li>
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 6, personId: 2 } }}>Short Bayan</NavLink></li>
                            <li><NavLink to={{ pathname: "/bayan", state: { listType: "audio", categoryId: 5, personId: 2 } }}>Asfaar Bayan</NavLink></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li class="has-children">
                      <NavLink to={{ pathname: "/ashar", state: { listType: "audio", categoryId: 0, personId: 0 } }} activeStyle={{ fontWeight: 'bold', color: 'white' }}>Ashar</NavLink>
                      <ul class="dropdown arrow-top">
                        <li><NavLink to={{ pathname: "/ashar", state: { listType: "audio", categoryId: 1, personId: 0 } }}>Hamd</NavLink></li>
                        <li><NavLink to={{ pathname: "/ashar", state: { listType: "audio", categoryId: 3, personId: 0 } }}>Aarifana Kalam</NavLink></li>
                        <li><NavLink to={{ pathname: "/ashar", state: { listType: "audio", categoryId: 2, personId: 0 } }}>Naat shareef</NavLink></li>
                      </ul>
                    </li>

                    <li class="has-children">
                      <NavLink to={{ pathname: "/book", state: { listType: "pdf", categoryId: 0, personId: 0 } }} activeStyle={{ fontWeight: 'bold', color: 'white' }}>Book</NavLink>
                      <ul class="dropdown arrow-top">
                        <li><NavLink to={{ pathname: "/book", state: { listType: "pdf", categoryId: 11, personId: 0 } }}>Al Abraar</NavLink></li>
                        <li><NavLink to={{ pathname: "/book", state: { listType: "pdf", categoryId: 10, personId: 0 } }}>English book</NavLink></li>
                        <li><NavLink to={{ pathname: "/book", state: { listType: "pdf", categoryId: 9, personId: 0 } }}>Urdu Book</NavLink></li>
                      </ul>
                    </li>
                    <li class="has-children">
                      <NavLink to="/detail" activeStyle={{ fontWeight: 'bold', color: 'white' }} >CDs</NavLink>
                      <ul class="dropdown arrow-top">
                        <li><a href="#">Molana Abid Shah Sb Db</a></li>
                        <li><a href="#">Sufi Shamim Sb Rh</a></li>
                      </ul>
                    </li>
                    <li><NavLink to="/contact" activeStyle={{ fontWeight: 'bold', color: 'white' }} >Contact Us</NavLink></li>
                    {/* <li><NavLink to="/contact">Contact Us</NavLink></li> */}
                  </ul>
                </nav>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div class="slide-one-item home-slider owl-carousel">

        <div class="site-blocks-cover overlay"
          style={{ background: 'url(assets/images/hero_bg_1.jpg)', height: "20px" }}
          data-aos="fade" data-stellar-background-ratio="0.5">
          {/* <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-10">
                <span class="d-inline-block bg-success text-white px-3 mb-0 property-offer-type rounded">For Rent</span>
                <h1 class="mb-0">871 Crenshaw Blvd</h1>
                <p class="mb-0"><strong class="h2 text-success font-weight-bold">$2,250,500</strong></p>
                <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
              </div>
            </div>
          </div> */}
        </div>

        <div class="site-blocks-cover overlay"
          style={{ background: 'url(assets/images/hero_bg_2.jpg)', height: "20px" }}
          data-aos="fade" data-stellar-background-ratio="0.5">
          {/* <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-10">
                <span class="d-inline-block bg-danger text-white px-3 mb-0 property-offer-type rounded">For Sale</span>
                <h1 class="mb-0">625 S. Berendo St</h1>
                <p class="mb-0"><strong class="h2 text-success font-weight-bold">$1,000,500</strong></p>
                <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
              </div>
            </div>
          </div> */}
        </div>

      </div>

    </div>
  );
}

export default Navbar;
