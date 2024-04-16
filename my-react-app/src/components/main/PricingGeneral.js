import React, { useState, useEffect } from 'react';
import Footer from './utils/Footer';
import Header from './utils/Header';
import { useNavigate } from 'react-router-dom';

const PaymentGeneral = () => {
  const [isSchool, setIsSchool] = useState(true);
  const [pricingData, setPricingData] = useState(null);
  const [pricingData_corporate, setPricingData_corporate] = useState(null);

  const toggleMode = () => {
    setIsSchool(!isSchool);
  };

  useEffect(() => {
    fetch('http://20.244.108.174/api/price/general/')
      .then(response => response.json())
      .then(data => setPricingData(data))
      .catch(error => console.error('Error fetching pricing data:', error));
  }, []);

  useEffect(() => {
    fetch('http://20.244.108.174/api/price/corporate/')
      .then(response => response.json())
      .then(data => setPricingData_corporate(data))
      .catch(error => console.error('Error fetching pricing data:', error));
  }, []);

  const navigate = useNavigate();

  const handleChoose = () => {
    navigate('/payment');
  };

  return (
    <>
      <Header />
      <section className="centered-section">
        <h2>Pick a plan that’s right <br />for you</h2>
        <p>Pay as you go service, cancel anytime</p>
        <div className="d-flex justify-center mb-4 bg-btnn add-width ">
          <div className="bg-gray-200 rounded-full px-2 py-2 d-flex items-center ">
            <button
              type='button'
              className={`${isSchool
                ? " bg-white text-gray-600 shadow-md"
                : "bg-gray-200 text-gray-800"
                } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn`}
              onClick={toggleMode}
            >
              General
            </button>
            <button
              type='button'
              className={`${!isSchool
                ? "bg-white text-gray-600 shadow-md"
                : "bg-gray-200 text-gray-800 "
                } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none school-btn `}
              onClick={toggleMode}
            >
              School/Corporate
            </button>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='row m-0 p-0 align-items-center justify-content-center'>
          {isSchool ? (
            <>
            <div className='col-md-6 col-lg-3 col-12'>
              <div className="pricing-card pricing-one ">
                <h2 className=''>FREE</h2>
                <div className="checkbox-container">
                  <input type="checkbox" id="feature1" defaultChecked />
                  <label htmlFor="feature1">Tourment creations</label>
                  <input type="checkbox" id="feature2" defaultChecked />
                  <label htmlFor="feature2">Watch Score</label>
                  <input type="checkbox" id="feature3" defaultChecked />
                  <label htmlFor="feature3">Start match</label>
                  <input type="checkbox" id="feature4" defaultChecked />
                  <label htmlFor="feature4">Ad-Free Experience</label>
                </div>
                <button className="button">choose</button>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-12'>
              <div className="pricing-card">
                <p className='bg-light'>Per match live session</p>
                <h2> ₹149<sub className='sub-font ps-2'>With GST</sub></h2>
                <div className="checkbox-container">
                  <input type="checkbox" id="feature5" defaultChecked />
                  <label htmlFor="feature5">All features</label>
                  <input type="checkbox" id="feature6" defaultChecked />
                  <label htmlFor="feature6">One license key</label>
                  <input type="checkbox" id="feature7" defaultChecked />
                  <label htmlFor="feature7">Yearly subcription plan</label>
                  <input type="checkbox" id="feature8" defaultChecked />
                  <label htmlFor="feature8">One year support & updates</label>
                  <input type="checkbox" id="feature9" defaultChecked />
                  <label htmlFor="feature9">Per month ad-free: ₹99</label>
                  <input type="checkbox" id="feature10" defaultChecked />
                  <label htmlFor="feature10">6 month subscription: ₹499</label>
                  <input type="checkbox" id="feature11" defaultChecked />
                  <label htmlFor="feature11">12 month subscription: ₹999</label>
                </div>
                <button className="button">choose</button>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-12'>
              <div className="pricing-card back-blue">
                <p className='bg-blue mb-1'>popular</p>
                <p className='bg-white-cm mb-1'>2 Cameras </p>
                <h2 className='customy-spce'> ₹199<sub className='sub-font ps-2'>With GST</sub> <br></br><span >Per member, per Month</span></h2>

                <div className="checkbox-container customy-container">
                  <input type="checkbox" id="feature13" defaultChecked />
                  <label htmlFor="feature13">Per month ad-free: ₹99</label>
                  <input type="checkbox" id="feature14" defaultChecked />
                  <label htmlFor="feature14">One license key</label>
                  <input type="checkbox" id="feature15" defaultChecked />
                  <label htmlFor="feature15">6 month subscription: ₹499</label>
                  <input type="checkbox" id="feature16" defaultChecked />
                  <label htmlFor="feature16">12 month subscription: ₹999</label>

                </div>
                <button className="button">choose</button>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-12'>
              <div className="pricing-card">

                <p className='bg-cameras mb-1'>4 cameras</p>
                <h2> ₹299<sub className='sub-font ps-2'>With GST</sub><br></br> <span className='customy-cont'>Per member, per Month</span></h2>

                <div className="checkbox-container second-costom">
                  <input type="checkbox" id="feature17" defaultChecked />
                  <label htmlFor="feature17">All features</label>
                  <input type="checkbox" id="feature18" defaultChecked />
                  <label htmlFor="feature18">One license key</label>
                  <input type="checkbox" id="feature19" defaultChecked />
                  <label htmlFor="feature19">Yearly subcription plan</label>
                  <input type="checkbox" id="feature20" defaultChecked />
                  <label htmlFor="feature20">One year support & updates</label>
                  <input type="checkbox" id="feature21" defaultChecked />
                  <label htmlFor="feature21">Per month ad-free: ₹99</label>
                  <input type="checkbox" id="feature22" defaultChecked />
                  <label htmlFor="feature22">6 month subscription: ₹499</label>
                  <input type="checkbox" id="feature23" defaultChecked />
                  <label htmlFor="feature23">12 month subscription: ₹999</label>
                </div>
                <button className="button">choose</button>
              </div>
            </div>
          </>
          ) : (
            <>
              <div className='row p-0 align-items-center justify-content-center'>
                <div className='col-md-6 col-lg-3 col-12'>
                  <div className="pricing-card back-blue">
                    <div className='d-flex'>
                      <p className='bg-blue mb-1'>popular</p>
                      <p className='bg-white-cm mb-1 mx-2'>Yearly </p>
                    </div>
                    <h2 className='customy-spce'> ₹25000<sub className='sub-font ps-2'>With GST</sub> <br></br><span >Per member, per Month</span></h2>

                    <div className="checkbox-container customy-container">
                      <input type="checkbox" id="feature13" defaultChecked />
                      <label htmlFor="feature13">all features</label>
                      <ul className='sub-text-list'>
                        <li>
                          Membership Programs
                        </li>
                        <li>
                          Exclusive Content
                        </li>
                        <li>
                          Group Discounts
                        </li>
                        <li>
                          Customizable Packages
                        </li>
                      </ul>
                      <input type="checkbox" id="feature14" defaultChecked />
                      <label htmlFor="feature14">Includes 30 Free Live Matches</label>
                      <input type="checkbox" id="feature15" defaultChecked />
                      <label htmlFor="feature15">Priority Support</label>


                    </div>
                    <button className="button">choose</button>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 col-12'>
                  <div className="pricing-card">

                    <p className='bg-cameras mb-1'>4 cameras</p>
                    <h2> ₹15000<sub className='sub-font ps-2'>With GST</sub><br></br> <span className='customy-cont'>Per member, per Month</span></h2>

                    <div className="checkbox-container second-costom">
                      <input type="checkbox" id="feature17" defaultChecked />
                      <label htmlFor="feature17">All features</label>
                      <ul className='sub-text-list'>
                        <li>
                          Membership Programs
                        </li>
                        <li>
                          Group Discounts
                        </li>

                      </ul>
                      <input type="checkbox" id="feature18" defaultChecked />
                      <label htmlFor="feature18">Includes 15 Free Live Matches</label>
                      <input type="checkbox" id="feature19" defaultChecked />
                      <label htmlFor="feature19">Early Access to New Content</label>


                    </div>
                    <button className="button">choose</button>
                  </div>
                </div>
              </div>

            </>
          )}
        </div>
      </section>
      <section className='container'>
        <div className='centered-section'>
          <h6>Payment Methods</h6>
          <img src='visa.png' alt='Visa logo' />
          <p>We accept Visa, American Express, Mastercard, Paypal and Crypto</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentGeneral;
