import React from 'react';

const Modal = () => {
  return (
    <div>
      {/* {/*<!--Modal 0--> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Weather app
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/weatherapp/desktop-light.png"
                      class="d-block w-100"
                      alt="Weather app light theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/weatherapp/desktop-dark.png"
                      class="d-block w-100"
                      alt="Weather app dark theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/weatherapp/tablet-light.png"
                      class="d-block w-100"
                      alt="Weather app light theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/weatherapp/tablet-dark.png"
                      class="d-block w-100"
                      alt="Weather app dark theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/weatherapp/mobile-light.png"
                      class="d-block w-100"
                      alt="Weather app light theme mobile screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/weatherapp/mobile-dark.png"
                      class="d-block w-100"
                      alt="Weather app dark theme mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/weather-app" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 0-->
    {/*<!--Modal 1--> */}
      <div
        class="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-2"
        aria-labelledby="staticBackdrop1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop1Label">
                Where in the world?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions1"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/countries/desktop-dark.png"
                      class="d-block w-100"
                      alt="Countries app dark theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/countries/desktop-light-border.png"
                      class="d-block w-100"
                      alt="Countries app light theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/countries/tablet-dark.png"
                      class="d-block w-100"
                      alt="Countries app dark theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/countries/tablet-light-border.png"
                      class="d-block w-100"
                      alt="Countries app light theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/countries/mobile-dark.png"
                      class="d-block w-100"
                      alt="Countries app dark theme mobile screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/countries/mobile-light-border.png"
                      class="d-block w-100"
                      alt="Countries app light theme mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/countries" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 1-->
    {/*<!--Modal 2--> */}
      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop2Label">
                TO-DO app
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions2"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/todo/desktop-dark.png"
                      class="d-block w-100"
                      alt="TO-DO app dark theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/todo/desktop-light-border.png"
                      class="d-block w-100"
                      alt="TO-DO app light theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/todo/tablet-dark.png"
                      class="d-block w-100"
                      alt="TO-DO app dark theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/todo/tablet-light-border.png"
                      class="d-block w-100"
                      alt="TO-DO app light theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/todo/mobile-dark.png"
                      class="d-block w-100"
                      alt="TO-DO app dark theme mobile screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/todo/mobile-light-border.png"
                      class="d-block w-100"
                      alt="TO-DO app light theme mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/todo" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 2-->
    {/*<!--Modal 3--> */}
      <div
        class="modal fade"
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop3Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop3Label">
                Social media dashboard
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions3"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/social-dashboard/desktop-dark.png"
                      class="d-block w-100"
                      alt="Social media dashboard dark theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/social-dashboard/desktop-light.png"
                      class="d-block w-100"
                      alt="Social media dashboard light theme desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/social-dashboard/tablet-dark.png"
                      class="d-block w-100"
                      alt="Social media dashboard dark theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/social-dashboard/tablet-light.png"
                      class="d-block w-100"
                      alt="Social media dashboard light theme tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/social-dashboard/mobile-dark.png"
                      class="d-block w-100"
                      alt="Social media dashboard dark theme mobile screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/social-dashboard/mobile-light.png"
                      class="d-block w-100"
                      alt="Social media dashboard light theme mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions3"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions3"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a
                href="https://ademkoca.github.io/social-media-dashboard-with-theme-switch"
                target="_blank"
              >
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 3-->
    {/*<!--Modal 4--> */}
      <div
        class="modal fade"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop4Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop4Label">
                Register form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions4"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions4"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions4"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions4"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/register/desktop.png"
                      class="d-block w-100"
                      alt="Register form desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/register/tablet.png"
                      class="d-block w-100"
                      alt="Register form tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/register/mobile.png"
                      class="d-block w-100"
                      alt="Register form mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions4"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions4"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a
                href="https://ademkoca.github.io/intro-component-with-signup-form"
                target="_blank"
              >
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 4-->
    {/*<!--Modal 5--> */}
      <div
        class="modal fade"
        id="staticBackdrop5"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop5Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop5Label">
                Search artists' bio
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions5"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/search-bio/desktop-bio.png"
                      class="d-block w-100"
                      alt="Search artists' bio homepage desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/search-bio/desktop-gallery.png"
                      class="d-block w-100"
                      alt="Search artists' bio gallery desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/search-bio/tablet-bio.png"
                      class="d-block w-100"
                      alt="Search artists' bio homepage tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/search-bio/tablet-gallery.png"
                      class="d-block w-100"
                      alt="Search artists' bio gallery tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/search-bio/mobile-bio.png"
                      class="d-block w-100"
                      alt="Search artists' bio homepage mobile screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/search-bio/mobile-gallery.png"
                      class="d-block w-100"
                      alt="Search artists' bio gallery tablet screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions5"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions5"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/search-bio" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 5-->
    {/*<!--Modal 6--> */}
      <div
        class="modal fade"
        id="staticBackdrop6"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop6Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop6Label">
                Random cat facts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions6"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions6"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions6"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions6"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/cats/desktop.png"
                      class="d-block w-100"
                      alt="Random cat facts desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/cats/tablet.png"
                      class="d-block w-100"
                      alt="Random cat facts tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/cats/mobile.png"
                      class="d-block w-100"
                      alt="Random cat facts mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions6"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions6"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/cats" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 6-->
    {/*<!--Modal 7--> */}
      <div
        class="modal fade"
        id="staticBackdrop7"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop7Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop7Label">
                Spotify homepage clone
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions7"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/spotify/desktop.png"
                      class="d-block w-100"
                      alt="Spotify clone desktop screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a
                href="https://ademkoca.github.io/spotify-clone"
                target="_blank"
              >
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 7-->
    {/*<!--Modal 8--> */}
      <div
        class="modal fade"
        id="staticBackdrop8"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop8Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop8Label">
                Wordle clone
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions8"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions8"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions8"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions8"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/wordle/desktop.png"
                      class="d-block w-100"
                      alt="Wordle clone desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/wordle/tablet.png"
                      class="d-block w-100"
                      alt="Wordle clone tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/wordle/mobile.png"
                      class="d-block w-100"
                      alt="Wordle clone mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions8"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions8"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/wordle-clone" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 8-->
    {/*<!--Modal 9--> */}
      <div
        class="modal fade"
        id="staticBackdrop9"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop9Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdrop9Label">
                Crowdfund product page
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleCaptions9"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions9"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/crowdfund/desktop.png"
                      class="d-block w-100"
                      alt="Crowdfund product page desktop screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/crowdfund/tablet.png"
                      class="d-block w-100"
                      alt="Crowdfund product page tablet screenshot"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/crowdfund/mobile.png"
                      class="d-block w-100"
                      alt="Crowdfund product page mobile screenshot"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions9"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions9"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://ademkoca.github.io/crowdfund" target="_blank">
                <button type="button" class="btn btn-primary">
                  Visit site
                </button>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*<!-- <button type="button" class="btn btn-primary">Understood</button> -->*/}
            </div>
          </div>
        </div>
      </div>
      {/* {/*<!--/Modal 9--> */}
    </div>
  );
};

export default Modal;
