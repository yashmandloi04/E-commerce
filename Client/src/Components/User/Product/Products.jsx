import React from 'react'
import ProductCard from './ProductCard';


const Products = ({ allProduct }) => {

  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

              <div className="bootstrap-tabs product-tabs">
                <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                  <h3>Trending Products</h3>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a href="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</a>
                      <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Fruits & Veges</a>
                      <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Juices</a>
                    </div>
                  </nav>
                </div>
                <div className="tab-content" id="nav-tabContent">


                  <div
                    className="tab-pane fade show active"
                    // id="nav-all"
                    // role="tabpanel"
                    // aria-labelledby="nav-all-tab"
                  >
                    {/* Product Grid */}
                    {/* product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 */}
                    <div className="">
                      {/* Product Card */}
                      {
                        allProduct
                        &&
                        allProduct.map(product => <ProductCard key={product._id} product={ product } />)
                      }
                      {/* / Product Card */}
                    </div>
                    {/* / Product Grid */}
                  </div>



                </div>
                {/* <!-- / product-grid --> */}

              </div>

            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default Products