import React from 'react'

const Footer = () => {
  return (
    <div className='footer_position'>
      <div className='container-fluid' style={{ backgroundColor: '#FFFAF2' }}>
        <div className='row justify-content-evenly justify-content-center p-5 footer_decoration'>
          
          <div className='col-md-2 m-2 mx-2'>
            <div className='img-fluid mb-4'>
              <img
                style={{ width: 200 }}
                src="https://raw.githubusercontent.com/anupshinde04/ai-manim-generator/main/digidukaan.png"
                alt="DigiDukaan"
              />
            </div>

            <div className='mb-4'>
              <p className='fw-bold'>Orders & Purchase Queries</p>
              <p>Email: support@digidukaan.com</p>
              <p>Mon to Sat (10 am to 6 pm)</p>
            </div>

            <div className='mt-4'>
              <p>For Complaints & Feedback</p>
              <p>support@digidukaan.com</p>
            </div>
          </div>

          <div className='col-md-2 mt-2 mx-4'>
            <div>
              <h6>Shop</h6>
            </div>
            <div className='my-4 footer_link'>
              <a href="">Ganesha</a><br />
              <a href="">Graphic Work</a><br />
              <a href="">Home Decor</a><br />
              <a href="">Artifact</a><br />
              <a href="">Accessories</a><br />
              <a href="">Gifting</a><br />
              <a href="">Store</a><br />
            </div>
          </div>

          <div className='col-md-2 m-2'>
            <div>
              <h6>About Us</h6>
            </div>
            <div className='my-4'>
              <a href="">Our Story</a><br />
              <a href="">Careers</a><br />
              <a href="">Investor Relations</a><br />
              <a href="">New Supplier</a><br />
              <a href="">Blog</a><br />
            </div>
          </div>

          <div className='col-md-2 m-2'>
            <div>
              <h6>Customer Care</h6>
            </div>
            <div className='my-4'>
              <a href="">Our Policies</a><br />
              <a href="/contactus">Contact Us</a><br />
              <a href="">FAQs</a><br />
            </div>
          </div>

          <div className='col-md-3 m-2'>
            <div>
              <h6 className='mx-4'>Follow Us</h6>
            </div>
            <div>
              <section className="d-flex mx-3 p-1">
                <a className="btn btn-floating m-0 p-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-floating m-0 p-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-floating m-0 p-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-floating m-0 p-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
              </section>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 footer_img'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
