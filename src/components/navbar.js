import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <h1 class="mb-0"><a href="index.html" class="text-white h2 mb-0"><strong>Homeland<span class="text-danger">.</span></strong></a></h1>
              </div>
              <div class="col-4 col-md-4 col-lg-8">
                <nav class="site-navigation text-right text-md-right" role="navigation">

                  <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

                  <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li class="active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li class="has-children">
                      <NavLink to="/bayan">Bayan</NavLink>
                      <ul class="dropdown arrow-top">
                        <li class="has-children">
                          <a href="#">Molana Abid Shah Sb Db</a>
                          <ul class="dropdown">
                            <li><a href="#">Bayan</a></li>
                            <li><a href="#">Zikar</a></li>
                            <li><a href="#">Asfaar</a></li>
                          </ul>
                        </li>
                        <li class="has-children">
                          <a href="#">Sufi Shamim Sb Rh</a>
                          <ul class="dropdown">
                            <li><a href="#">Bayan</a></li>
                            <li><a href="#">Zikar</a></li>
                            <li><a href="#">Asfaar</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li class="has-children">
                      <NavLink to="/ashar">Ashar</NavLink>
                      <ul class="dropdown arrow-top">
                        <li><a href="#">Hamd</a></li>
                        <li><a href="#">Aarifana Kalam</a></li>
                        <li><a href="#">Naat shareef</a></li>
                      </ul>
                    </li>

                    <li class="has-children">
                      <NavLink to="/book">Book</NavLink>
                      <ul class="dropdown arrow-top">
                        <li><a href="#">Al Abraar</a></li>
                        <li><a href="#">English book</a></li>
                        <li><a href="#">Urdu Book</a></li>
                      </ul>
                    </li>
                    <li><NavLink to="/about">Ask</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                  </ul>
                </nav>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div class="slide-one-item home-slider owl-carousel">

        <div class="site-blocks-cover overlay"
          style={{ background: 'url(assets/images/hero_bg_1.jpg)' }}
          data-aos="fade" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-10">
                <span class="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>
                <h1 class="mb-2">871 Crenshaw Blvd</h1>
                <p class="mb-5"><strong class="h2 text-success font-weight-bold">$2,250,500</strong></p>
                <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="site-blocks-cover overlay"
          style={{ background: 'url(assets/images/hero_bg_2.jpg)' }}
          data-aos="fade" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-10">
                <span class="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>
                <h1 class="mb-2">625 S. Berendo St</h1>
                <p class="mb-5"><strong class="h2 text-success font-weight-bold">$1,000,500</strong></p>
                <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
