import herobg from './assets/img/hero-bg.jpg';
import myprofileimg from './assets/img/my-profile-img.jpg';
import aosstyle from './assets/vendor/aos/aos.css';


const Home = () => {
  
    return (
        <div>
          
         

           {/* <!-- About Section --> */}
            <section id="hero" class="hero section dark-background">
              <img src={herobg} alt="" data-aos="" class="" />
              <div class="container" data-aos="" data-aos-delay="100">
                <h2>Dharani Kumar</h2>
                <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Web Developer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
              </div>
            </section>
           {/* <!-- About Section --> */}




          {/* <!-- About Section --> */}
            <section id="about" class="about section">

              {/* <!-- Section Title --> */}
              <div class="container section-title" data-aos="">
                <h2>About</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              {/*  */}

              <div class="container" data-aos="" data-aos-delay="100">

                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-4">
                    <img src={myprofileimg} class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-8 content">
                    <h2>UI/UX Designer &amp; Web Developer.</h2>
                    <p class="fst-italic py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <div class="row">
                      <div class="col-lg-6">
                        <ul>
                          <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <ul>
                          <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                          <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                        </ul>
                      </div>
                    </div>
                    <p class="py-3">
                      Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                      Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                    </p>
                  </div>
                </div>

              </div>

            </section> 
          {/* /About Section  */}

          {/* <!-- Stats Section --> */}
            <section id="stats" class="stats section">

              <div class="container" data-aos="" data-aos-delay="100">

                <div class="row gy-4">

                  <div class="col-lg-3 col-md-6">
                    <div class="stats-item">
                      <i class="bi bi-emoji-smile"></i>
                      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                    </div>
                  </div>
                  {/* <!-- End Stats Item --> */}

                  <div class="col-lg-3 col-md-6">
                    <div class="stats-item">
                      <i class="bi bi-journal-richtext"></i>
                      <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                    </div>
                  </div>
                  {/* <!-- End Stats Item --> */}

                  <div class="col-lg-3 col-md-6">
                    <div class="stats-item">
                      <i class="bi bi-headset"></i>
                      <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                    </div>
                  </div>
                  {/* <!-- End Stats Item --> */}

                  <div class="col-lg-3 col-md-6">
                    <div class="stats-item">
                      <i class="bi bi-people"></i>
                      <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                    </div>
                  </div>
                  {/* <!-- End Stats Item --> */}

                </div>

              </div>

            </section>
          {/* <!-- /Stats Section --> */}

          {/* <!-- Resume Section --> */}
            <section id="resume" class="resume section">

              <div class="container section-title" data-aos="">
                <h2>Resume</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>

              <div class="container">

                <div class="row">

                  <div class="col-lg-6" data-aos="" data-aos-delay="100">
                    <h3 class="resume-title">Sumary</h3>

                    <div class="resume-item pb-0">
                      <h4>Brandon Johnson</h4>
                      <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                      <ul>
                        <li>Portland par 127,Orlando, FL</li>
                        <li>(123) 456-7891</li>
                        <li>alice.barkley@example.com</li>
                      </ul>
                    </div>

                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item">
                      <h4>Master of Fine Arts &amp; Graphic Design</h4>
                      <h5>2015 - 2016</h5>
                      <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                      <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                    </div>

                    <div class="resume-item">
                      <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                      <h5>2010 - 2014</h5>
                      <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                      <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                    </div>

                  </div>

                  <div class="col-lg-6" data-aos="" data-aos-delay="200">
                    <h3 class="resume-title">Professional Experience</h3>
                    <div class="resume-item">
                      <h4>Senior graphic design specialist</h4>
                      <h5>2019 - Present</h5>
                      <p><em>Experion, New York, NY </em></p>
                      <ul>
                        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                      </ul>
                    </div>

                    <div class="resume-item">
                      <h4>Graphic design specialist</h4>
                      <h5>2017 - 2018</h5>
                      <p><em>Stepping Stone Advertising, New York, NY</em></p>
                      <ul>
                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                      </ul>
                    </div>

                  </div>

                </div>

              </div>

            </section>
          {/* <!-- /Resume Section --> */}

          {/* <!-- Portfolio Section --> */}
            <section id="portfolio" class="portfolio section light-background">

              <div class="container section-title" data-aos="">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>

              <div class="container">

                <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                  <ul class="portfolio-filters isotope-filters" data-aos="" data-aos-delay="100">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-product">Product</li>
                    <li data-filter=".filter-branding">Branding</li>
                    <li data-filter=".filter-books">Books</li>
                  </ul>

                  <div class="row gy-4 isotope-container" data-aos="" data-aos-delay="200">

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>App 1</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>Product 1</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>Branding 1</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>Books 1</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>App 2</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-2.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                          <h4>Product 2</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-2.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                          <h4>Branding 2</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>Books 2</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                          <h4>App 3</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                          <h4>Product 3</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-3.jpg" class="img-fluid" alt="" />
                        <div class="portfolio-info">
                          <h4>Branding 3</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                      <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-3.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                          <h4>Books 3</h4>
                          <p>Lorem ipsum, dolor sit amet consectetur</p>
                          <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                          <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </section>
          {/* <!-- /Portfolio Section --> */}

          {/* <!-- Services Section --> */}
            <section id="services" class="services section">

              {/* <!-- Section Title --> */}
              <div class="container section-title" data-aos="">
                <h2>Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>

              <div class="container">

                <div class="row gy-4">

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="100">
                    <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Lorem Ipsum</a></h4>
                      <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
                  

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="200">
                    <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Dolor Sitema</a></h4>
                      <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="300">
                    <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Sed ut perspiciatis</a></h4>
                      <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="400">
                    <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Magni Dolores</a></h4>
                      <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="500">
                    <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Nemo Enim</a></h4>
                      <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="" data-aos-delay="600">
                    <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
                    <div>
                      <h4 class="title"><a href="service-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
                      <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                  </div>

                </div>

              </div>

            </section>
          {/* <!-- /Services Section --> */}

        

          {/* <!-- Contact S  {/* <!-- Testimonials Section --> */}
            <section id="testimonials" class="testimonials section light-background">

              <div class="container section-title" data-aos="">
                <h2>Testimonials</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
              </div>

              <div class="container" data-aos="" data-aos-delay="100">

                <div class="swiper init-swiper">
                  {/* <script type="application/json" class="swiper-config">
                    {
                      "loop": true,
                      "speed": 600,
                      "autoplay": {
                        "delay": 5000
                      },
                      "slidesPerView": "auto",
                      "pagination": {
                        "el": ".swiper-pagination",
                        "type": "bullets",
                        "clickable": true
                      },
                      "breakpoints": {
                        "320": {
                          "slidesPerView": 1,
                          "spaceBetween": 40
                        },
                        "1200": {
                          "slidesPerView": 3,
                          "spaceBetween": 1
                        }
                      }
                    }
                  </script> */}
                  <div class="swiper-wrapper">

                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                      </div>
                    </div>

                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                      </div>
                    </div>
                    

                    <div class="swiper-slide">
                      <div class="testimonial-item">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                      </div>
                    </div>
                    {/*  */}

                  </div>
                  <div class="swiper-pagination"></div>
                </div>

              </div>

            </section>
          {/* <!-- /Testimonials Section --> */}

          {/* <!-- /Contact Section --> */}
          <section id="contact" class="contact section">

            <div class="container section-title" data-aos="">
              <h2>Contact</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div class="container" data-aos="" data-aos-delay="100">

              <div class="row gy-4">

                <div class="col-lg-5">

                  <div class="info-wrap">
                    <div class="info-item d-flex" data-aos="" data-aos-delay="200">
                      <i class="bi bi-geo-alt flex-shrink-0"></i>
                      <div>
                        <h3>Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>

                    <div class="info-item d-flex" data-aos="" data-aos-delay="300">
                      <i class="bi bi-telephone flex-shrink-0"></i>
                      <div>
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>

                    <div class="info-item d-flex" data-aos="" data-aos-delay="400">
                      <i class="bi bi-envelope flex-shrink-0"></i>
                      <div>
                        <h3>Email Us</h3>
                        <p>info@example.com</p>
                      </div>
                    </div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                  </div>
                </div>

                <div class="col-lg-7">
                  <form action="forms/contact.php" method="post" class="php-email-form" data-aos="" data-aos-delay="200">
                    <div class="row gy-4">

                      <div class="col-md-6">
                        <label for="name-field" class="pb-2">Your Name</label>
                        <input type="text" name="name" id="name-field" class="form-control" required=""/>
                      </div>

                      <div class="col-md-6">
                        <label for="email-field" class="pb-2">Your Email</label>
                        <input type="email" class="form-control" name="email" id="email-field" required=""/>
                      </div>

                      <div class="col-md-12">
                        <label for="subject-field" class="pb-2">Subject</label>
                        <input type="text" class="form-control" name="subject" id="subject-field" required=""/>
                      </div>

                      <div class="col-md-12">
                        <label for="message-field" class="pb-2">Message</label>
                        <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                      </div>

                      <div class="col-md-12 text-center">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit">Send Message</button>
                      </div>

                    </div>
                  </form>
                </div>

              </div>

            </div>

          </section>
          {/* <!-- /Contact Section --> */}

        </div>
    );
  };
  
  export default Home;