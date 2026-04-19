import React from 'react';
import Fade from './animations/fade.js';
// import required modules
import Browse from './Browse';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IndiaMap from './IndiaMap.jsx';

const Home = () => {
  // Add these at the top of your Home component, after other useState
const [selectedState, setSelectedState] = useState(null);
const [stateProducts, setStateProducts] = useState([]);
const [gameProgress, setGameProgress] = useState(3); // Starting progress

// Add this handler function inside Home component
const handleStateSelect = async (stateName) => {
  setSelectedState(stateName);
  
  // Mock products for demo (replace with real API later)
  const mockProducts = [
    { _id: 1, name: `${stateName} Brass Lamp`, price: 450, image: 'lamp.jpg' },
    { _id: 2, name: `${stateName} Handloom Saree`, price: 1899, image: 'saree.jpg' },
    { _id: 3, name: `${stateName} Terracotta Pot`, price: 299, image: 'pot.jpg' },
    { _id: 4, name: `${stateName} Wooden Craft`, price: 750, image: 'wood.jpg' },
    { _id: 5, name: `${stateName} Silver Jewelry`, price: 1299, image: 'jewelry.jpg' },
    { _id: 6, name: `${stateName} Painting`, price: 899, image: 'painting.jpg' }
  ];
  
  setStateProducts(mockProducts);
  setGameProgress(prev => Math.min(28, prev + 1));
};

// Add this helper function
const getProductEmoji = (name) => {
  if (name.includes('Brass') || name.includes('Lamp')) return '🪔';
  if (name.includes('Saree') || name.includes('Handloom')) return '🧵';
  if (name.includes('Pot') || name.includes('Terracotta')) return '🏺';
  if (name.includes('Wooden')) return '🪵';
  if (name.includes('Jewelry') || name.includes('Silver')) return '💍';
  if (name.includes('Painting')) return '🖼️';
  return '🛍️';
};

  return (
    <div className=''>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />

          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={6}
            aria-label="Slide 7"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={7}
            aria-label="Slide 8"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={8}
            aria-label="Slide 9"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Brass-Ganesha_Banner.jpg?v=1677564309" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top>
                <h1 className='homeimg3ds fs-9 p-3 mb-5 pb-0' style={{ fontSize: '60px' }}>Free Shiping </h1>
                <p className='homeimg3ds mb-5 pt-0  fs-6' style={{ marginBottom: '30rem' }}>For All Our Online Stores In India.</p>
              </Fade>

            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Bell_Banner_-_14-04-2022.png?v=1649938773" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <button className='btn btn-warning rounded-0 border border-dark homeimg3ds mb-5 p-3 fs-4'>Shop The Collection</button>
              </Fade>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Web-Banner-for-Gifiting-catalog_Web.jpg?v=1665123509" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Resin.jpg?v=1687499076" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="https://thebombaystore.com/cdn/shop/files/TBS6292_1a5b4ed3-4727-447a-a5a7-8b37a32d032c.jpg?v=1687500120" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <h5 className='homeimg3ds fs-9 p-3' style={{ fontSize: '60px' }}>Wall Ascents</h5>
                <p className='homeimg3ds mb-5 ' style={{ marginBottom: '30rem' }}>Some representative placeholder content for the first slide.</p>
                <button className='btn btn-warning border border-dark rounded-0 homeimg3ds mb-5 fs-5'>Shop The Collection</button>
              </Fade>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={6000}>
            <img src="https://thebombaystore.com/cdn/shop/files/TBS6292_1a5b4ed3-4727-447a-a5a7-8b37a32d032c.jpg?v=1687500120" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <h5 className='homeimg3ds  fs-9 p-3' style={{ fontSize: '60px' }}>Wall Ascents</h5>
                <p className='homeimg3ds mb-5' style={{ marginBottom: '30rem' }}>Some representative placeholder content for the first slide.</p>
                <button className='btn btn-warning border-0 homeimg3ds mb-5 fs-5'>Shop The Collection</button>
              </Fade>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={7000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Web-Banner_Umbrella-Campaign_2023.jpg?v=1686221213" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <h5 className='homeimg3ds fs-1 p-3'>Wall Ascents</h5>
                <p className='homeimg3ds mb-5' style={{ marginBottom: '30rem' }}>Some representative placeholder content for the first slide.</p>
                <button className='btn btn-warning border-0 homeimg3ds mb-5 fs-5'>Shop The Collection</button>
              </Fade>

            </div>
          </div>
          <div className="carousel-item" data-bs-interval={8000}>
            <img src="https://thebombaystore.com/cdn/shop/files/Dwaar_Collection_Banner_-_Low.jpg?v=1648640231" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade top >
                <h5 className='homeimg3ds fs-1 p-3'>Wall Ascents</h5>
                <p className='homeimg3ds mb-5' style={{ marginBottom: '30rem' }}>Some representative placeholder content for the first slide.</p>
                <button className='btn btn-warning  border-0 rounded-0 homeimg3ds mb-5 fs-5'>Shop The Collection</button>
              </Fade>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* === SHOP BY MAP + GAMIFICATION SECTION === */}
<Fade bottom>
  <section className="py-16 bg-white my-5">
    <div className="container-fluid">
      <Fade left>
        <h1 className='text-dark text-center pt-5 mb-4'>Shop By Map</h1>
        <p className='text-secondary text-center m-3'>Discover authentic handicrafts from across India</p>
      </Fade>

      {/* 👇 SIDE-BY-SIDE LAYOUT 👇 */}
      <div className='row justify-content-center mt-5'>
        {/* Map - Always Left */}
        <div className='col-lg-7 col-xl-8 mb-4'>
          <div className='card border-0 shadow-sm rounded-5 mx-auto' style={{ maxWidth: '600px' }}>
            <div className='card-body p-4'>
              <IndiaMap onStateSelect={handleStateSelect} />
            </div>
          </div>
        </div>

        {/* Gamification Panel - Right side (shows on click) */}
        {selectedState ? (
          <div className='col-lg-5 col-xl-4'>
            <div className='card border-0 shadow-sm rounded-5 h-100'>
              <div className='card-body p-4'>
                <h5 className='card-title text-dark mb-3 capitalize fw-bold fs-4'>
                  {selectedState} Crafts
                </h5>
                <p className='card-text text-muted mb-4'>
                  Authentic handicrafts from {selectedState}
                </p>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2 small">
                    <span className="text-muted">Products:</span>
                    <strong>{stateProducts.length}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2 small">
                    <span className="text-muted">States:</span>
                    <strong>{gameProgress}/28</strong>
                  </div>
                  <div className="progress" style={{height: '8px'}}>
                    <div 
                      className="progress-bar bg-warning" 
                      style={{width: `${(gameProgress/28)*100}%`}}
                    />
                  </div>
                </div>
                <button className='btn btn-warning border border-dark w-100 rounded-0 mb-3 fs-6 fw-bold'>
                  Shop {selectedState}
                </button>
                <div className="text-center">
                  <small className="text-success fw-bold fs-6">
                    ⭐ Level {Math.floor(gameProgress/7)+1} Explorer
                  </small>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='col-lg-5 col-xl-4'>
            <div className='card border-0 shadow-sm rounded-5 h-100 d-flex align-items-center justify-content-center text-center bg-light'>
              <div>
                <div className="display-4 mb-3">🗺️</div>
                <h5 className="text-muted mb-1">Click any state</h5>
                <p className="text-muted small">Start exploring India!</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Products below */}
      {selectedState && stateProducts.length > 0 && (
        <>
          <hr className="my-5" />
          <div className='row justify-content-evenly justify-content-center'>
            <div className='col-12 mb-4'>
              <h5 className='text-center text-dark fw-bold mb-3'>
                Handicrafts from {selectedState}
              </h5>
            </div>
            {stateProducts.slice(0, 3).map((product) => (
              <div key={product._id} className='col-md-4 mb-4'>
                <div className='card border-0 h-100'>
                  <div className='card-body p-4 text-center'>
                    <div className="mb-4">
                      <span className="display-5">{getProductEmoji(product.name)}</span>
                    </div>
                    <h6 className='card-title text-dark mb-3'>{product.name}</h6>
                    <p className='fs-3 fw-bold text-warning mb-3'>₹{product.price}</p>
                    <button className='btn btn-warning border border-dark w-100 rounded-0 fw-bold py-2'>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
</Fade>




      <div className='container-fluid homebg'>
        <Fade left>
          <h1 className='text-center p-4'>Feature Categories</h1>
        </Fade>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-6'>
            <div className='card rounded-5 mx-5  '>
              <div className='card-body rounded-5 homeimg1 '>
                <div className='homeimg2ds'>
                  <Fade bottom>
                    <h4>Brass</h4>
                    <p className='text-white'>Add elegance and charm to  <br />your home with these <br />beautiful masterpieces</p>
                    <button className='btn btn-warning border border-white   mb-5 rounded-0 '>Shop Now</button>
                  </Fade>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card  rounded-5 mx-5 '>
              <div className='card-body rounded-5  homeimg2 '>
                <div className='homeimg2ds'>
                  <Fade bottom>
                    <h4>Copper</h4>
                    <p className='text-white'>Add elegance and charm to <br /> your home with these <br /> beautiful masterpieces</p>
                    <button className='btn btn-warning border border-white mb-5  rounded-0 mb-5 '>Shop Now</button>
                  </Fade>

                </div>

              </div>
            </div>
          </div>
        </div>

        <Fade right>
          <h1 className='text-dark text-center pt-5'>Collections</h1>
        </Fade>


        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/files/Collection_Ajrakh.jpg?v=1664781166" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h3>Ajrakh</h3>
                  <p> With origins from thousands of years ago, Ajrakh hails from the desert regions of Kutch, Gujarat. The printing is done by hand with  hand carved wooden blocks. It is distinguished by its color - Indigo &amp; Maroon.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Kalamkari.jpg?v=1664781209" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h3>Kalamkari</h3>
                  <p> Kalamkari’ is an ancient style of hand painting. The term Kalamkari comes from the words ‘kalam’ meaning pen and ‘kari’ meaning craftsmanship. It was done with a tamarind pen &amp; natural dyes, using interlacing patterns of leaves, flowers and birds design!.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Sui-Dhagga.jpg?v=1664781222" alt="" />
              </div>
              <div className='card-body cardbg  p-3 '>
                <Fade bottom>
                  <h3 >Sui Dhaga</h3>
                  <p> Sui Dhaaga is a representation of different embroideries of India, like Kantha, Aari and Sheesha. The Design is inspired by Ornate patterns and stitches, amalgamated into beautiful collage.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'   > Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Trending Products</h1>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>


        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/products/TBS13795_2_500x.jpg?v=1634206681" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h5>Brass BookMark Peacock</h5>
                  <p>Rs450</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'>Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/20221123_142146_500x.jpg?v=1669379050" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h5>Kanmani Triball Doll</h5>
                  <p>Rs1145</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'>Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/001_25e65e8b-a10d-4c40-b664-95cd80cb2e2b_500x.jpg?v=1646042732" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h5 >Iron Music Design</h5>
                  <p>Rs1950</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'> Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Best Seller</h1>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/products/04_a2d52f24-a4a1-49e8-b9e3-241026207918_500x.jpg?v=1648648942" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h6>Elephant Procesesion Kullads (180ml each)</h6>
                  <p>Rs900</p>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/3_19aeda55-c7de-4301-9361-085ac1a2e888_500x.jpg?v=1626637109" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h6>Shatranj Leather Case</h6>
                  <p>Rs950</p>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/1_881997f8-b973-4597-821c-5ae258eac5c5_500x.jpg?v=1649941581" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h6 >Brass Singing Bowl</h6>
                  <p>Rs2,100</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Shop By Price</h1>
            <p className='text-secondary text-center m-3'>Buy The Most Exclusive Gift In Your Budget</p>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/collections/1_8933990a-5285-4978-8088-ae79854b4116_640x.jpg?v=1668410893" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h4>Below Rs500</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/8_640x.jpg?v=1669266148" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h4>From Rs. 501 To Rs. 1000</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/02_640x.jpg?v=1669266003" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h4 >From Rs. 1001 To Rs. 2500</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade top>
            <h1 className='text-dark text-center pt-5'>Shop By Occasion</h1>
            <p className='text-secondary text-center m-3'>Hand picked product for all your gifting needs!!</p>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/collections/For_him_640x.jpg?v=1664780591" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h4>For Him</h4>
                  <button className='btn btn- border border-dark mt-3 rounded-0 text-white fw-bold  px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/For_her_640x.jpg?v=1660973778" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h4>For Her</h4>
                  <button className='btn btn-warning border border-dark mt-3 rounded-0 text-white fw-bold px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/House_Warming_640x.jpg?v=1660973976" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h4 >House Warming</h4>
                  <button className='btn btn-warning border border-dark mt-3 rounded-0 text-white fw-bold px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;