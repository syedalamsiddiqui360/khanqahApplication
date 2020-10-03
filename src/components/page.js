import React from 'react';
import {NavLink} from 'react-router-dom'

function Page2() {
    return (
        <div>
            <NavLink to="/">page 1</NavLink>
            <NavLink to="/2">page 2</NavLink>
            <NavLink to="/3">page 3</NavLink>



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

          <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a  class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

          <ul class="site-menu js-clone-nav d-none d-lg-block">
            <li class="active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li><a href="buy.html">Buy</a></li>
            <li><a href="rent.html">Rent</a></li>
            <li class="has-children">
              <a href="properties.html">Properties</a>
              <ul class="dropdown arrow-top">
                <li><a >Condo</a></li>
                <li><a >Property Land</a></li>
                <li><a >Commercial Building</a></li>
                <li class="has-children">
                  <a >Sub Menu</a>
                  <ul class="dropdown">
                    <li><a >Menu One</a></li>
                    <li><a >Menu Two</a></li>
                    <li><a >Menu Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
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
        <p><a  class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
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
        <p><a  class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
      </div>
    </div>
  </div>
</div>

</div>

        </div >

    )
}

export default Page2;