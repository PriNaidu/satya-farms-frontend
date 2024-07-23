import React from 'react'
import can from '../components/utils/assets/images/imresizer-440.jpg'
import mainBannerImage from '../components/utils/assets/images/imresizer-1920.jpg'
import overViewImage from '../components/utils/assets/images/p4.jpg'
import proj1 from '../components/utils/assets/images/overview_images/proj1.svg'
import proj2 from '../components/utils/assets/images/overview_images/proj2.svg'
import proj3 from '../components/utils/assets/images/overview_images/proj3.svg'
import proj4 from '../components/utils/assets/images/overview_images/proj4.svg'
import master_plan_img from '../components/utils/assets/images/master_plan.jpg'
import banquetHall from '../components/utils/assets/images/amenities/banquet-hall.webp'
import kidsArea from '../components/utils/assets/images/amenities/playarea.svg'
import swimmingPool from '../components/utils/assets/images/amenities/swimming.svg'
import gym from '../components/utils/assets/images/amenities/gym.svg'
import tennisCourt from '../components/utils/assets/images/amenities/tennis.svg'
import security from '../components/utils/assets/images/amenities/24_7 Security.webp'
import walkingTrack from '../components/utils/assets/images/amenities/walking_track.svg'
import shuttle from '../components/utils/assets/images/amenities/Badminton-Court.webp'
import basketBall from '../components/utils/assets/images/amenities/Basket-ball-court.webp'
import landscape from '../components/utils/assets/images/amenities/Landscape.png'
import Supermarket from '../components/utils/assets/images/amenities/Supermarket.png'
import EF_FF from '../components/utils/assets/images/carousel/EF_FF.jpg'
import EF_GF from '../components/utils/assets/images/carousel/EF_GF.jpg'
import WF_FF from '../components/utils/assets/images/carousel/WF_FF.jpg'
import WF_GF from '../components/utils/assets/images/carousel/WF_GF.jpg'

import img1 from '../components/utils/assets/images/carousel/1.jpg'
import img2 from '../components/utils/assets/images/carousel/2.jpg'
import img3 from '../components/utils/assets/images/carousel/3.jpg'
import img4 from '../components/utils/assets/images/carousel/4.jpg'



import MyCarousel from './carousel'

const Main = () => {
    return (
        <main>
            <section className=' banner_sec position-relative'>
                <div className="banner_img">
                    <picture>
                        <source media="(max-width:767px)" srcset={can} />
                        <img className="img-fluid w-100" src={mainBannerImage} alt="banner" />
                    </picture>
                </div>
                <div className='banner_caption  mb-md-0 d-flex align-items-end align-items-md-center top-0 start-0 end-0 bottom-0'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-5'>
                                <div className='banner_form  d-md-block wow fadeInUp rounded-3 '>
                                    <h5 className='mb-3'>Request a callback</h5>
                                    <div className='loader' id="loader1"></div>


                                    <form>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <input type="text" name="Name" id="last_name" placeholder="Name*" class="form-control" required="" />
                                        </div>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <input type="email" name="Email" id="email" placeholder="Email*" class="form-control" required="" />
                                        </div>
                                        <div class="form-group mb-2 mb-lg-3">
                                            <select required="" name="budget" id="budget" class="form-control" style={{ appearance: 'revert' }}>
                                                <option value=""> The Budget Range You're Looking For?</option>
                                                <option value="3.69 Cr* Onwards ">3.69 Cr* Onwards </option>
                                                <option value="4Cr* Onwards ">4Cr* Onwards </option>
                                                <option value="Above 4.5 Cr* ">Above 4.5 Cr* </option>
                                            </select>
                                        </div>
                                        <div className='form-group mb-2 mb-lg-3'>
                                            <input type="tel" name="Phone" id="number" placeholder="Enter Phone Number" class="form-control" pattern="^[6-9][0-9]{9}$" required="" autocomplete="off" />

                                        </div>
                                        <button class="btn w-100 btn-txt" type="submit" name="submit" id="submitBtn1">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview_sec py-4 py-md-5" id="overview">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-3">
                            <div className="over-txt">
                                <div className="sec_head wow fadeInUp">
                                    <h3 className="justify-content-start text-center mb-3">OVERVIEW</h3>
                                </div>
                                <p className="wow fadeInUp">Looking for a serene and peaceful neighborhood to call home or a great investment opportunity? Look no further than our Gated Community Villa Project in Medchal, Hyderabad!

                                    KOTAS Virginia City features 113 stunning villas, ranging in size from 120 sqyds to 340 sqyds and built-up areas between 1500 sft to 3500 sft, so you're sure to find the perfect fit for your needs. Whether you're looking for a cozy retreat or a spacious family home, our villas have everything you need to live comfortably and luxuriously.

                                    Located in the growing North Hyderabad area, our Gated Community Villa Project is situated in the heart of a new IT corridor, making it an ideal place to live or invest. You'll enjoy easy access to top employers, schools, shopping centers, and entertainment options, all while living in a peaceful and secure community.
                                </p>
                                <p>Our villas are designed to offer the best of modern living, with a host of amenities and features that will make your life comfortable and convenient. From high-quality fixtures and finishes to spacious living areas and bedrooms, you'll love the attention to detail and care that has gone into creating these beautiful homes.</p>
                            </div>
                            {/* <btn className="btn wow fadeInUp" data-bs-toggle="modal" data-bs-target="#modalForm22">
                                Download Brochure
                            </btn> */}
                        </div>
                        <div className="col-lg-6 m-auto">
                            <div className="over-img wow fadeInUp">
                                <img src={overViewImage} alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="proj_sec" id="projHighlight">
                <div className="container py-md-5 py-4">
                    <div className="sec_head wow fadeInUp">
                        <h3 className="text-center">KOTAS VIRGINIA CITY HIGHLIGHTS</h3>
                    </div>
                    <p className="mb-lg-3 mb-0 wow fadeInUp text-center ">
                        Experience the finest living at the finest location.

                    </p>
                    <div className="row gx-md-5 gy-5 gy-md-5 mt-2 mx-auto">
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src={proj1} className="img-fluid" alt="icon" />
                                <div>
                                    <h5 className="text-center mb-3">
                                        The only ongoing KOTAS Virginia project of Medchal</h5>
                                    <p className="mb-0 text-center">
                                        With all the villas situated out of the city, APR INFRA offers a prime location advantage of Bachupally!


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src={proj2} className="img-fluid" alt="icon" />
                                <div>
                                    <h5 className="text-center mb-4">Subscribe to uninterrupted views for life
                                    </h5>
                                    <p className="text-center mb-0">
                                        Nestled amidst majestic hills and scenic lakes, life at APR Hillside Villas enables you to wake up to amazing views every day.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src={proj3} className="img-fluid" alt="icon" />
                                <div>
                                    <h5 className="text-center mb-4">4 BHK Triplex villas with a home theater</h5>
                                    <p  className="mb-0 text-center">
                                        When every home in Bachupally is an apartment, own luxury like never before with APR Infra Villas.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proj_div d-flex justify-content-between align-items-center wow fadeInUp">
                                <img src={proj4} className="img-fluid" alt="icon" />
                                <div>
                                    <h5 className="text-center mb-4">
                                        Like-minded community
                                    </h5>
                                    <p className="mb-0 text-center">
                                        Stay successful being surrounded by like-minded people. APR Group Villas homes feature the perfect community for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-lg-5 mt-4">
                        {/* <btn className="btn wow fadeInUp" data-bs-toggle="modal" data-bs-target="#modalForm">
                            Download Brochure
                        </btn> */}
                    </div>
                </div>
            </section>

            <section className='master_sec pt-3 pb-4 py-md-5 text-center id="master'>
                <div className='container'>
                    <div className='sec_head wow fadeInUp'>
                        <h3>PROJECT PLANS</h3>
                    </div>
                    <p className='mb-4 wow fadeInUp'>Experience the blend of perfection with integrity.</p>
                    <div className='row gy-md-0 gy-3'>
                        <div className='col-md-6'>
                            <div className='master_div rounded-3 h-100'>
                                <h6 className='mb-0 wow fadeInUp'>Master Plan</h6>
                                <div className='my-lg-4 my-3 mx-lg-5 mx-4'>
                                    <div className='master_img_div position-relative mx-auto wow fadeInUp'>
                                        <a href='image' data-fancybox="Master-info" data-caption="Master Plan">
                                            <img class="master_img img-fluid" src={master_plan_img} alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='master_div rounded-3 h-100'>
                                <h6 className='mb-0 wow fadeInUp'>Floor Plan</h6>
                                <div className='my-lg-4 my-3 mx-lg-5 mx-4'>
                                    <div className='master_img_div position-relative mx-auto wow fadeInUp'>
                                    <MyCarousel images={[EF_GF, EF_FF, WF_FF, WF_GF]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ameniti_sec py-md-5 py-4" id="ameniti">
                <div className="container">
                    <div className="sec_head wow fadeInUp">
                        <h3 className="mb-5 txt-center">AMENITIES</h3>
                    </div>
                    <div className="row gx-3 gy-4">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={banquetHall} alt="icon" />
                                <p className="mb-0 txt-center">Banquet Hall</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div wow fadeInUp">
                                <img src={kidsArea} alt="icon" />
                                <p className="mb-0 txt-center">Kid’s Play Area</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={swimmingPool} alt="icon" />
                                <p className="mb-0 txt-center">Swimming Pool</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div wow fadeInUp">
                                <img src={gym} alt="icon" />
                                <p className="mb-0 txt-center"> Gym</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={tennisCourt} alt="icon" />
                                <p className="mb-0 txt-center">Tennis Court</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div wow fadeInUp">
                                <img src={security} alt="icon" />
                                <p className="mb-0 txt-center">24x7 Security</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={walkingTrack} alt="icon" />
                                <p className="mb-0 txt-center">Walking Track</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={shuttle} alt="icon" />
                                <p className="mb-0 txt-center">Shuttle Court (Out Door)</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={basketBall} alt="icon" />
                                <p className="mb-0 txt-center">Basketball Practice Court</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div  wow fadeInUp">
                                <img src={landscape} alt="icon" />
                                <p className="mb-0 txt-center">Landscape</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="ameniti_div wow fadeInUp">
                                <img src={Supermarket} alt="icon" />
                                <p className="mb-0 txt-center">Supermarket</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='gallery_sec' id="gallery">
                <div className='container'>
                
                <MyCarousel images={[img1, img2, img3, img4]} />
                </div>
            </section>

            <div class="map_div pt-md-5 pb-md-5 pt-4 pb-5 text-center">
            <div class="container">
                <div class="sec_head text-center mb-3 mb-md-4 wow fadeInUp">
                    <h3>LOCATION MAP</h3>
                </div>
                <div class="map_wrap">
                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Medchal,%20Secunderabad,%20Telangana%20501401%20+(Kotas%20Virginia%20City)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" class="wow fadeInUp mb-0" width="100%" height="400" style={{borderRadius:'20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
        </main>
    )
}

export default Main