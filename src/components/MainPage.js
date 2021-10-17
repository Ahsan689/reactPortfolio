import React,{useState,useEffect} from 'react';
import {Carousel, Accordion} from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from  '@srexi/purecounterjs';


const MainPage = () => {
  

  const [isOpen1 , setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] =useState(false);
  const [isOpen3, setIsOpen3] =useState(false);
  const [isOpen4, setIsOpen4] =useState(false);
  const [isOpen5, setIsOpen5] =useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const portfolio = [
    {
      id:1,
      category:'filter-app',
      name:'App1',
      para:'App',
      image:'assets/img/portfolio/portfolio-1.jpg',
    },
    {
      id:2,
      category:'filter-app',
      name:'App2',
      para:'App',
      image:'assets/img/portfolio/portfolio-2.jpg'
    },
    {
      id:3,
      category:'filter-app',
      name:'App3',
      para:'App',
      image:'assets/img/portfolio/portfolio-3.jpg'
    },
    {
      id:4,
      category:'filter-web',
      name:'Web1',
      para:'web',
      image:'assets/img/portfolio/portfolio-4.jpg'
    },
    {
      id:5,
      category:'filter-web',
      name:'Web2',
      para:'web',
      image:'assets/img/portfolio/portfolio-5.jpg'
    },
    {
      id:6,
      category:'filter-web',
      name:'Web3',
      para:'web',
      image:'assets/img/portfolio/portfolio-6.jpg'
    },
    {
      id:7,
      category:'filter-card',
      name:'Card1',
      para:'card',
      image:'assets/img/portfolio/portfolio-7.jpg'
    },
    {
      id:8,
      category:'filter-card',
      name:'Card2',
      para:'card',
      image:'assets/img/portfolio/portfolio-8.jpg'
    },
    {
      id:9,
      category:'filter-card',
      name:'Card3',
      para:'card',
      image:'assets/img/portfolio/portfolio-9.jpg'
    },
    
  ]
 
  const [item, setItem] = useState(portfolio);

  const filteredItems = (categItems) =>{
        const updatedItems = portfolio.filter((currElem)=>{
          return currElem.category === categItems;
        })

        setItem(updatedItems);
  } 

    return (
        <>
          
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">
        <a href="/">Groovin</a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          {/* <li>
            <a href="blog.html">Blog</a>
          </li> */}
          {/* <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="getstarted scrollto" href="/login">
              Login &nbsp; <i  className="fa fa-sign-in"></i> 
            </a>
            
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  {/* <section id="hero">
    <div className="hero-container">
      <div
        id="heroCarousel"
        data-bs-interval={5000}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
        <div className="carousel-inner" role="listbox"> */}

          {/* Slide 1 */}
          {/* <div
            className="carousel-item active"
            style={{ background: "url(assets/img/slide/slide-1.jpg)" }}
          >
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">
                  Grow Your Business
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* Slide 2 */}
          {/* <div
            className="carousel-item"
            style={{ background: "url(assets/img/slide/slide-2.jpg)" }}
          >
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">
                  Lorem Ipsum Dolor
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* Slide 3 */}
          {/* <div
            className="carousel-item"
            style={{ background: "url(assets/img/slide/slide-3.jpg)" }}
          >
            <div className="carousel-background">
              <img src="assets/img/slide/slide-3.jpg" alt />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">
                  Sequi ea ut et est quaerat
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div>
        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </section> */}
  {/* End Hero */}

        <Carousel indicators={false} fade id="hero">
       
            <Carousel.Item >
            <img src="assets/img/slide/slide-1.jpg" className="w-100" style={{height:665}}/>
            <div className="dark-overlay"></div>
            <Carousel.Caption className="Carousel-Caption-top">
                <h2 className="animate__animated animate__fadeInDown" >
                Web Development
                </h2>
                <p className="animate__animated animate__fadeInUp">
                Today, it's hard to imagine a successful business without at least one website or app. The larger the company, the more complex the software solutions it needs. Our web development experts are ready to support your company with  software of any type and difficulty.
                </p>
                {/* <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div> */}
           </Carousel.Caption>
            
                    
            </Carousel.Item>

            <Carousel.Item >
            <img src="assets/img/slide/slide-2.jpg" className="w-100" style={{height:665}}/>
            <div className="dark-overlay"></div>
            <Carousel.Caption className="Carousel-Caption-top">
            <h2 className="animate__animated animate__fadeInDown">
                  UI/UX Design
                </h2>
                <p className="animate__animated animate__fadeInUp">
                Many brilliant products fail to win the hearts of their users due to poor design. However, a creative and attractive design is not enough to satisfy your customers, as it must go hand in hand with an intuitive user interface. Our design team will ensure that users of your digital products have the best experience.
                </p>
                {/* <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
            <img src="assets/img/slide/slide-3.jpg" className="w-100" style={{height:665}}/>
            <div className="dark-overlay"></div>
                <Carousel.Caption className="Carousel-Caption-top">
                <h2 className="animate__animated animate__fadeInDown">
                  Mobile App Development
                </h2>
                <p className="animate__animated animate__fadeInUp">
                Mobile-first is no longer a trend, but a necessity for almost every company with a software product. Mobile apps are beneficial for businesses in absolutely every industry as they help to cover a wider audience, move to the next level, and increase sales.
                </p>
                {/* <div>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div> */}
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6 icon-box">
                  <i className="bx bx-receipt" />
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div className="col-md-6 icon-box">
                  <i className="bx bx-cube-alt" />
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
                <div className="col-md-6 icon-box">
                  <i className="bx bx-images" />
                  <h4>Labore consequatur</h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
                <div className="col-md-6 icon-box">
                  <i className="bx bx-shield" />
                  <h4>Beatae veritatis</h4>
                  <p>
                    Expedita veritatis consequuntur nihil tempore laudantium
                    vitae denat pacta
                  </p>
                </div>
              </div>
            </div>
            {/* End .content*/}
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Counts Section ======= */}
    <section id="counts" className="counts">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span 
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={2}
              data-purecounter-once="false"
              className="purecounter"
              />
              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={521}
                data-purecounter-duration={2}
                data-purecounter-once="false"
                className="purecounter"
              />
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-headset" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={1463}
                data-purecounter-duration={2}
                data-purecounter-once="false"
                className="purecounter"
              />
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-people" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={2}
                data-purecounter-once="false"
                className="purecounter"
              />
              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Counts Section */}
    {/* ======= Clients Section ======= */}
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-1.png"
              className="img-fluid"
              alt
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-2.png"
              className="img-fluid"
              alt
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-3.png"
              className="img-fluid"
              alt
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-4.png"
              className="img-fluid"
              alt
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-5.png"
              className="img-fluid"
              alt
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/client-6.png"
              className="img-fluid"
              alt
            />
          </div>
        </div>
      </div>
    </section>
    {/* End Clients Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
            <img src="assets/img/ui-design.png" width="60%" />
            </div>
            <h4 className="title">
              <a href>UI/UX Design</a>
            </h4>
            <p className="description">
            We make sure that your web application's user interface follows the patterns of your users' behavior and solves your business's problems.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
            <img src="assets/img/1016081_design_web design_web_ux_icon.png" width="70%" />
            </div>
            <h4 className="title">
              <a href>Front-end Development</a>
            </h4>
            <p className="description">
            We work with modern frameworks like React.js, Next.js, to create next-generation user experiences that integrate and interact seamlessly with your database and APIs.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
            <img src="assets/img/1174949_js_react js_logo_react_react native_icon.png" width="70%" />
            </div>
            <h4 className="title">
              <a href>ReactNative Mobile App</a>
            </h4>
            <p className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
            <img src="assets/img/1743800_api_app_application_development_software_icon.png" width="70%" />
            </div>
            <h4 className="title">
              <a href>API Development and Integration</a>
            </h4>
            <p className="description">
            We can help you if you need to build or consume an API. Our teams have worked with all sort of APIs.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
            <img src="assets/img/282805_php_icon.png" width="70%" />
            </div>
            <h4 className="title">
              <a href>Back-end Development</a>
            </h4>
            <p className="description">
            Leverage our expertise with PHP, Laravel, Python, to build custom, secure, and reliable backends and APIs for web or mobile applications across multiple domains.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <img style={{backgroundPosition:'cover center'}} src="assets/img/3338940_cart_basket_ecommerce_sale_shopping_icon.png" width="70%" />
            </div>
            <h4 className="title">
              <a href>ECommerce Applications</a>
            </h4>
            <p className="description">
            If you have a store or need a new one, our web application development services can surely help you. We can create a store for you from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Us</h2>
          <h6>
          Our  partnerships with clients go beyond technology. We delve into the daily realities of our clients and work collaboratively to create superior digital experiences for global development.
          </h6>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <span>01</span>
              <h4>Quality over Quantity</h4>
              <p>
              That is the key to our philosophy. We strive to provide the best service and produce the highest quality products by constantly innovating and improving all aspects of our process.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>02</span>
              <h4>Passion and Commitment</h4>
              <p>
              We are passionate about our work. We are enthusiastic about the work we do. We build strong and trusting relationships with our clients and foster close ties between our team members.

              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>03</span>
              <h4>Flexibility</h4>
              <p>
              We use a set tools and procedures that can be adapted to each client’s wants and needs. We know each company has different needs that have to be worked out in different ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Why Us Section */}
    {/* ======= Portfolio Section ======= */}
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h4>
            The Projects that we build
            takes our clients to the next level.
          </h4>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li  onClick={()=>{setItem(portfolio)}} data-filter="*" className="filter-active">
                All
              </li>
              <li onClick={()=>{filteredItems('filter-app')}} data-filter=".filter-app">App</li>
              <li onClick={()=>{filteredItems('filter-web')}} data-filter=".filter-card">Card</li>
              <li onClick={()=>{filteredItems('filter-card')}} data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        
         
        
        <div className="row portfolio-container">
          {
            item.map((elem)=>{
              const {id, name, image, para, category} = elem;

              return(
                <div className="col-lg-4 col-md-6 portfolio-item ">
                <div className="portfolio-wrap">
                  <img
                    src={image}
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>{name}</h4>
                    <p>{para}</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          }
         


          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
    {/* ======= Team Section ======= */}
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>
          We are a passionate team.
          </p>
          <p>
          Looking to impact and change the world through software development.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member">
              <img src="assets/img/team/team-1.jpg" className="img-fluid" alt />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="member">
              <img src="assets/img/team/team-2.jpg" className="img-fluid" alt />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="member">
              <img src="assets/img/team/team-3.jpg" className="img-fluid" alt />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
            <div className="member">
              <img src="assets/img/team/team-4.jpg" className="img-fluid" alt />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href>
                      <i className="bi bi-twitter" />
                    </a>
                    <a href>
                      <i className="bi bi-facebook" />
                    </a>
                    <a href>
                      <i className="bi bi-instagram" />
                    </a>
                    <a href>
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/* End Team Section */}
    {/* ======= Pricing Section ======= */}
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box">
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box recommended">
              <h3>Business</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Developer</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Pricing Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div>
          <Accordion >
      
            <Accordion.Item className="mb-1" eventKey="0">
              <Accordion.Header>
              How long will it take to get a new website?
              </Accordion.Header>
              <Accordion.Body>
              On average, we shoot for a six to eight week turnaround, but the pace of any project is set by each client. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. The functionality needs may also play a role – more complex sites will take more time to develop.
              </Accordion.Body>
            </Accordion.Item>
            {/* ////// */}
            <Accordion.Item className="mb-1" eventKey="1">
              <Accordion.Header>
              Will my website be mobile-friendly?
              </Accordion.Header>
              <Accordion.Body>
              Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.
              </Accordion.Body>
            </Accordion.Item>
              {/* ////// */}
              <Accordion.Item className="mb-1" eventKey="2">
              <Accordion.Header>
              Are there any other costs for my website?
              </Accordion.Header>
              <Accordion.Body>
              If you host through us, there are hosting charges. There may also be costs for photos if you can’t supply them yourself. However we always do our best to use stock images sites that are free where possible. Other than that, we always make extra charges if there are any crystal clear up front so you know exactly where you stand.
              </Accordion.Body>
            </Accordion.Item>

             {/* ////// */}
             <Accordion.Item className="mb-1" eventKey="3">
              <Accordion.Header>
              How much input do I have in the process?
              </Accordion.Header>
              <Accordion.Body>
                 A lot! Your input and feedback is crucial to this process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality.
              </Accordion.Body>
            </Accordion.Item>

            {/* ////// */}
            <Accordion.Item className="mb-1" eventKey="4">
              <Accordion.Header>
              How much does a new website cost?
              </Accordion.Header>
              <Accordion.Body>
              There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your small business. 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <h2 className="mt-5 text-center"> READY TO GET STARTED</h2>
        <p className="text-center"> Don't be afraid! We'll walk you through the entire process, hold your hand as much as you need, and help you through all the technical aspects that may seem scary. We work best with clients who leave the heavy lifting to us.
        </p>
        <div className="faq-list">
          <ul>
            {/* <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                data-bs-target="#faq-list-1"
                onClick={()=>{setIsOpen1(!isOpen1)}}
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className={"bx "+(isOpen1? 'icon-close bx-chevron-up':'icon-show bx-chevron-down')} />
                <i className={"bx icon-close bx-chevron-up"+(isOpen? '':'')} />
              </a>
              <div
                id="faq-list-1"
                className={"collapse "+(isOpen1?"show":"")}
                data-bs-parent=".faq-list"
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li> */}
            {/* <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
                onClick={()=>{setIsOpen2(!isOpen2)}}
              >
                Feugiat scelerisque varius morbi enim nunc?{" "}
                <i className={"bx "+(isOpen2? 'icon-close bx-chevron-up':'icon-show bx-chevron-down')} />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className={"collapse "+(isOpen2?"show":"")}
                data-bs-parent=".faq-list"
                
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li> */}
            {/* <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
                onClick={()=>{setIsOpen3(!isOpen3)}}
              >
                Dolor sit amet consectetur adipiscing elit?{" "}
                <i className={"bx "+(isOpen3? 'icon-close bx-chevron-up':'icon-show bx-chevron-down')} />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className={"collapse "+(isOpen3?"show":"")}
                data-bs-parent=".faq-list"
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li> */}
            {/* <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
                onClick={()=>{setIsOpen4(!isOpen4)}}
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
                 <i className={"bx "+(isOpen4? 'icon-close bx-chevron-up':'icon-show bx-chevron-down')} />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className={"collapse "+(isOpen4?"show":"")}
                data-bs-parent=".faq-list"
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li> */}
            {/* <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
                onClick={()=>{setIsOpen5(!isOpen5)}}
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className={"bx "+(isOpen5? 'icon-close bx-chevron-up':'icon-show bx-chevron-down')} />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className={"collapse "+(isOpen5?"show":"")}
                data-bs-parent=".faq-list"
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt" />
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone" />
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">+1 5589 55488 55</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope" />
              <h3>Email</h3>
              <p>
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="form">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Groovin</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA
                <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      {/* <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Groovin</span>
        </strong>
        . All Rights Reserved
      </div> */}
      
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/groovin-free-bootstrap-theme/ */}

      {/* <div className="credits">
      
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
    </div>
  </footer>
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>

        </>
    );
};

export default MainPage;