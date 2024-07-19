import React from 'react'
import mainImg from '../components/utils/assets/images/Picture1.jpg'
import can from '../components/utils/assets/images/can.webp'
import ef from '../components/utils/assets/images/ef.jpg'
import p4 from '../components/utils/assets/images/p4.jpg'

const Main = () => {
    return (
        <main>
            <section>
                <div className="banner_img">
                    <picture>
                        <source media="(max-width:767px)" srcset={can} />
                        <img className="img-fluid w-100" src={mainImg} alt="banner" style={{ maxHeight: '600px' }} />
                    </picture>
                </div>
            </section>

            <section className="overview_sec py-4 py-md-5" id="overview">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-3">
                            <div className="over-txt">
                                <div className="sec_head wow fadeInUp">
                                    <h3 className="justify-content-start">OVERVIEW</h3>
                                </div>
                                <p className="wow fadeInUp">Looking for a serene and peaceful neighborhood to call home or a great investment opportunity? Look no further than our Gated Community Villa Project in Medchal, Hyderabad!

                                    KOTAS Virginia City features 113 stunning villas, ranging in size from 120 sqyds to 340 sqyds and built-up areas between 1500 sft to 3500 sft, so you're sure to find the perfect fit for your needs. Whether you're looking for a cozy retreat or a spacious family home, our villas have everything you need to live comfortably and luxuriously.

                                    Located in the growing North Hyderabad area, our Gated Community Villa Project is situated in the heart of a new IT corridor, making it an ideal place to live or invest. You'll enjoy easy access to top employers, schools, shopping centers, and entertainment options, all while living in a peaceful and secure community.
</p>
                                <p>Our villas are designed to offer the best of modern living, with a host of amenities and features that will make your life comfortable and convenient. From high-quality fixtures and finishes to spacious living areas and bedrooms, you'll love the attention to detail and care that has gone into creating these beautiful homes.</p>
                            </div>
                            <btn className="btn wow fadeInUp" data-bs-toggle="modal" data-bs-target="#modalForm22">
                                Download Brochure
                            </btn>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <div className="over-img wow fadeInUp">
                                <img src={p4} alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="proj_sec" id="projHighlight">
                <div className="container py-md-5 py-4">
                    <div className="sec_head wow fadeInUp">
                        <h3>KOTAS VIRGINIA CITY HIGHLIGHTS</h3>
                    </div>
                    <p className="mb-lg-3 mb-0 wow fadeInUp text-center">
                        Experience the finest living at the finest location.

                    </p>
                    <div className="row gx-md-5 gy-5 gy-md-5 mt-2 mx-auto">
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src="assets/images/proj1.svg" className="img-fluid" alt="icon" />
                                <div>
                                    <h5>
                                        The only ongoing KOTAS Virginia project of Medchal</h5>
                                    <p className="mb-0">
                                        With all the villas situated out of the city, APR INFRA offers a prime location advantage of Bachupally!


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src="assets/images/proj2.svg" className="img-fluid" alt="icon" />
                                <div>
                                    <h5>Subscribe to uninterrupted views for life
                                    </h5>
                                    <p className="mb-0">
                                        Nestled amidst majestic hills and scenic lakes, life at APR Hillside Villas enables you to wake up to amazing views every day.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src="assets/images/proj3.svg" className="img-fluid" alt="icon" />
                                <div>
                                    <h5>4 BHK Triplex villas with a home theater</h5>
                                    <p className="mb-0">
                                        When every home in Bachupally is an apartment, own luxury like never before with APR Infra Villas.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src="assets/images/proj4.svg" className="img-fluid" alt="icon" />
                                <div>
                                    <h5>
                                        Like-minded community
                                    </h5>
                                    <p className="mb-0">
                                        Stay successful being surrounded by like-minded people. APR Group Villas homes feature the perfect community for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-lg-5 mt-4">
                        <btn className="btn wow fadeInUp" data-bs-toggle="modal" data-bs-target="#modalForm">
                            Download Brochure
                        </btn>
                    </div>
                </div>
            </section>

            <section className="ameniti_sec py-md-5 py-4" id="ameniti">
                <div className="container">
                    <div className="sec_head wow fadeInUp">
                        <h3 className="mb-5">AMENITIES</h3>
                    </div>
                    <div className="row gx-3 gy-4">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/banquet-hall.webp" alt="icon" />
                                <p className="mb-0">Banquet Hall</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/ameniti2.svg" alt="icon" />
                                <p className="mb-0">Kid’s Play Area</p>
                            </div>
                        </div>




                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/ameniti7.svg" alt="icon" />
                                <p className="mb-0">Swimming Pool</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/ameniti8.svg" alt="icon" />
                                <p className="mb-0"> Gym</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/ameniti10.svg" alt="icon" />
                                <p className="mb-0">Tennis Court</p>
                            </div>
                        </div>


                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/24_7 Security.webp" alt="icon" />
                                <p className="mb-0">24x7 Security</p>
                            </div>
                        </div>




                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/ameniti12.svg" alt="icon" />
                                <p className="mb-0">Walking Track</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/Badminton-Court.webp" alt="icon" />
                                <p className="mb-0">Shuttle Court (Out Door)</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/Basket-ball-court.webp" alt="icon" />
                                <p className="mb-0">Basketball Practice Court</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/Landscape.png" alt="icon" />
                                <p className="mb-0">Landscape</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div d-flex align-items-center wow fadeInUp">
                                <img src="assets/images/Supermarket.png" alt="icon" />
                                <p className="mb-0">Supermarket</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default Main