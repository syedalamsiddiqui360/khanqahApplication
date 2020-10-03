import React from 'react';

function AskQuestion() {
    const url="audio/mohorrm.mp3"
    const image = "assets/images/person_3.jpg"
    return (
      
      <div class="site-section">
        <div class="container">

          <div class="row justify-content-center mb-5">
            <div class="col-md-7 text-center">
              <div class="site-section-title">
                <h2>Frequently Ask Questions</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div>

          <div class="row justify-content-center" data-aos="fade" data-aos-delay="100">
            <div class="col-md-8">
              <div class="accordion unit-8" id="accordion">
                <div class="accordion-item">
                  <h3 class="mb-0 heading">
                    <a class="btn-block" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">What is the name of your company<span class="icon"></span></a>
                  </h3>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- .accordion-item --> */}

                <div class="accordion-item">
                  <h3 class="mb-0 heading">
                    <a class="btn-block" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">How much pay for 3  months?<span class="icon"></span></a>
                  </h3>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
                {/* <!-- .accordion-item --> */}

                <div class="accordion-item">
                  <h3 class="mb-0 heading">
                    <a class="btn-block" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">Do I need to register?  <span class="icon"></span></a>
                  </h3>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
                {/* <!-- .accordion-item --> */}

                <div class="accordion-item">
                  <h3 class="mb-0 heading">
                    <a class="btn-block" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">Who should I contact in case of support.<span class="icon"></span></a>
                  </h3>
                  <div id="collapseFour" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="body-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                    </div>
                  </div>
                </div>
                {/* <!-- .accordion-item --> */}

              </div>
            </div>
          </div>

        </div>
      </div>


    );
}

export default AskQuestion;


