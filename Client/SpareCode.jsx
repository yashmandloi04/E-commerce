import React from 'react'

const SpareCode = () => {
  return (
    <>
      <div className="preloader-wrapper">
      <div className="preloader">
      </div>
    </div>

    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="index.html">
                <img src="/Assets/images/logo.png" alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>
          
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search htmlFor more than 20,000 products" />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div>

            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#user"></use></svg> */}
                </a>
              </li>
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#heart"></use></svg> */}
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#cart"></use></svg> */}
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#search"></use></svg> */}
                </a>
              </li>
            </ul>

            <div className="cart text-end d-none d-lg-block dropdown">
              <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                <span className="cart-total fs-5 fw-bold">$1290.00</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
            <nav className="main-menu d-flex navbar navbar-expand-lg" />

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                <div className="offcanvas-header justify-content-center">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
              
                  <select className="filter-categories border-0 mb-0 me-5">
                    <option>Shop by Departments</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                  </select>
              
                  <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                    <li className="nav-item active">
                      <a href="#women" className="nav-link">Women</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#men" className="nav-link">Men</a>
                    </li>
                    <li className="nav-item">
                      <a href="#kids" className="nav-link">Kids</a>
                    </li>
                    <li className="nav-item">
                      <a href="#accessories" className="nav-link">Accessories</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu" aria-labelledby="pages">
                        <li><a href="index.html" className="dropdown-item">About Us </a></li>
                        <li><a href="index.html" className="dropdown-item">Shop </a></li>
                        <li><a href="index.html" className="dropdown-item">Single Product </a></li>
                        <li><a href="index.html" className="dropdown-item">Cart </a></li>
                        <li><a href="index.html" className="dropdown-item">Checkout </a></li>
                        <li><a href="index.html" className="dropdown-item">Blog </a></li>
                        <li><a href="index.html" className="dropdown-item">Single Post </a></li>
                        <li><a href="index.html" className="dropdown-item">Styles </a></li>
                        <li><a href="index.html" className="dropdown-item">Contact </a></li>
                        <li><a href="index.html" className="dropdown-item">Thank You </a></li>
                        <li><a href="index.html" className="dropdown-item">My Account </a></li>
                        <li><a href="index.html" className="dropdown-item">404 Error </a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#brand" className="nav-link">Brand</a>
                    </li>
                    <li className="nav-item">
                      <a href="#sale" className="nav-link">Sale</a>
                    </li>
                    <li className="nav-item">
                      <a href="#blog" className="nav-link">Blog</a>
                    </li>
                  </ul>
                
                </div>

              </div>
          </div>
        </div>
      </div>
    </header>

    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-labelledby="My Cart">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        {/* <span><Icon icon="mdi:home" /></span> */}
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Growers cider</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Fresh grapes</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Heinz tomato ketchup</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
  
          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
    
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasSearch" aria-labelledby="Search">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Search</span>
          </h4>
          <form role="search" action="index.html" method="get" className="d-flex mt-3 gap-0">
            <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="What are you looking htmlFor?" aria-label="What are you looking htmlFor?" />
            <button className="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>

    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-bread-baguette.png" alt="Category Thumbnail" />
                  <h3 className="category-">Breads & Sweets</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-soft-drinks-bottle.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-wine-glass-bottle.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-animal-products-drumsticks.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-bread-herb-flour.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a href="index.html" className="nav-link category-item swiper-slide">
                  <img src="/Assets/images/icon-vegetables-broccoli.png" alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap flex-wrap justify-content-between mb-5">
              
              <h2 className="section-title">Newly Arrived Brands</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                </div>  
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <div className="brand-carousel swiper">
              <div className="swiper-wrapper">
                
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-11.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-12.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-13.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-14.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-11.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/Assets/images/product-thumb-12.jpg" className="img-fluid rounded" alt="Card title" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">Honey best nectar you wish to get</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-6">
            <div className="banner-ad bg-danger mb-3" style={{backgroundImage: 'url(images/ad-image-3.png)', backgroundRepeat: 'no-repeat',backgroundPosition: 'right bottom'}}>
              <div className="banner-content p-5">

                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                <h3 className="banner-title">Luxa Dark Chocolate</h3>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <a href="#" className="btn btn-dark text-uppercase">Show Now</a>

              </div>
            
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-ad bg-info" style={{backgroundImage: 'url(images/ad-image-4.png)', backgroundRepeat: 'no-repeat',backgroundPosition: 'right bottom'}}>
              <div className="banner-content p-5">

                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                <h3 className="banner-title">Creamy Muffins</h3>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <a href="#" className="btn btn-dark text-uppercase">Show Now</a>

              </div>
            
            </div>
          </div>
             
        </div>
      </div>
    </section>

    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex justify-content-between">
              
              <h2 className="section-title">Most popular products</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>  
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <div className="products-carousel swiper">
              <div className="swiper-wrapper">
                
                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoes.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoketchup.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>
                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoes.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoketchup.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>
                
              </div>
            </div>
            {/* <!-- / products-carousel --> */}

          </div>
        </div>
      </div>
    </section>

    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex justify-content-between">
              
              <h2 className="section-title">Just arrived</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>  
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <div className="products-carousel swiper">
              <div className="swiper-wrapper">
                
                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoes.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoketchup.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>
                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoes.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-tomatoketchup.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>

                <div className="product-item swiper-slide">
                  {/* <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a> */}
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src="/Assets/images/thumb-bananas.png"  className="tab-image" />
                    </a>
                  </figure>
                  <h3>Sunstar Fresh Melon Juice</h3>
                  {/* <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlink:href="#star-solid"></use></svg> 4.5</span> */}
                  <span className="price">$18.00</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              {/* <svg width="16" height="16"><use xlink:href="#minus"></use></svg> */}
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                {/* <svg width="16" height="16"><use xlink:href="#plus"></use></svg> */}
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                  </div>
                </div>
                
              </div>
            </div>
            {/* <!-- / products-carousel --> */}

          </div>
        </div>
      </div>
    </section>

    <section id="latest-blog" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="section-header d-flex align-items-center justify-content-between my-5">
            <h2 className="section-title">Our Recent Blog</h2>
            <div className="btn-wrap align-right">
              {/* <a href="#" className="d-flex align-items-center nav-link">Read All Articles <svg width="24" height="24"><use xlink:href="#arrow-right"></use></svg></a> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img src="/Assets/images/post-thumb-1.jpg" alt="post" className="card-img-top" />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  {/* <div className="meta-date"><svg width="16" height="16"><use xlink:href="#calendar"></use></svg>22 Aug 2021</div> */}
                  {/* <div className="meta-categories"><svg width="16" height="16"><use xlink:href="#category"></use></svg>tips & tricks</div> */}
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">Top 10 casual look ideas to dress up your kids</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img src="/Assets/images/post-thumb-2.jpg" alt="post" className="card-img-top" />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  {/* <div className="meta-date"><svg width="16" height="16"><use xlink:href="#calendar"></use></svg>25 Aug 2021</div> */}
                  {/* <div className="meta-categories"><svg width="16" height="16"><use xlink:href="#category"></use></svg>trending</div> */}
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">Latest trends of wearing street wears supremely</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="post-item card border-0 shadow-sm p-3">
              <div className="image-holder zoom-effect">
                <a href="#">
                  <img src="/Assets/images/post-thumb-3.jpg" alt="post" className="card-img-top" />
                </a>
              </div>
              <div className="card-body">
                <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  {/* <div className="meta-date"><svg width="16" height="16"><use xlink:href="#calendar"></use></svg>28 Aug 2021</div> */}
                  {/* <div className="meta-categories"><svg width="16" height="16"><use xlink:href="#category"></use></svg>inspiration</div> */}
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="#" className="text-decoration-none">10 Different Types of comfortable clothes ideas htmlFor women</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 my-5">
      <div className="container-fluid">

        <div className="bg-warning py-5 rounded-5" style={{backgroundImage: 'url(images/bg-pattern-2.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="/Assets/images/phone.png" alt="phone" className="image-float img-fluid" />
              </div>
              <div className="col-md-8">
                <h2 className="my-5">Shop faster with foodmart App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <img src="/Assets/images/app-store.jpg" alt="app-store" />
                  <img src="/Assets/images/google-play.jpg" alt="google-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>


    <section className="py-5">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
          <div className="col">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2 text-dark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"/></svg> */}
                </div>
                <div className="col-md-10">
                  <div className="card-body p-0">
                    <h5>Free delivery</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className="col">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2 text-dark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z"/></svg> */}
                </div>
                <div className="col-md-10">
                  <div className="card-body p-0">
                    <h5>100% secure payment</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className="col">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2 text-dark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z"/></svg> */}
                </div>
                <div className="col-md-10">
                  <div className="card-body p-0">
                    <h5>Quality guarantee</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className="col">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2 text-dark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"/></svg> */}
                </div>
                <div className="col-md-10">
                  <div className="card-body p-0">
                    <h5>guaranteed savings</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className="col">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-2 text-dark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z"/></svg> */}
                </div>
                <div className="col-md-10">
                  <div className="card-body p-0">
                    <h5>Daily offers</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SpareCode