import React from 'react';
import './Footer.css';
import { Button } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the Adventure newsletter to received our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-area'>
                    <form>
                        <input className='footer-input' name='email' 
                        type='email' 
                        placeholder='Your email address' />
                        <Button buttonStyle='btn--outline'>Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <link to='/sign-up'>How it works</link>
                        <link to='/'>Testimonials</link>
                        <link to='/'>Careers</link>
                        <link to='/'>Investigators</link>
                        <link to='/'>Terms of Service</link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <link to='/'>Contact</link>
                        <link to='/'>Support</link>
                        <link to='/'>Destinations</link>
                        <link to='/'>Sponsorships</link>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            <link to='/'>Submit Video</link>
                            <link to='/'>Ambassadors</link>
                            <link to='/'>Agency</link>
                            <link to='/'>Influencer</link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <link to='/'>Instagram</link>
                            <link to='/'>Facebook</link>
                            <link to='/'>Youtube</link>
                            <link to='/'>Twitter</link>
                        </div>
                    </div>
                </div>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <link to='/' className='social-logo'>LAKBAY<i class='fab fa-typo3' />
                            </link>
                        </div>
                        <small class='website-rights'>LAKBAY © 2023</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'>
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'>
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'>
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'>
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link Linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linkedin'>
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Footer;
