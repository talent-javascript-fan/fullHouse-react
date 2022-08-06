import React from 'react';
import './footer.scss';
import logo from '../../assets/images/logo.png';

export const Footer = () => {

    return (
        <div>
            <section className="footer-section">
                <div className="container footer">
                    <div className="row ">
                        <div className="col-md-3 p-0 social-link text-center">
                            <img className="logo" src={ logo } alt=""/>
                            <p> The New NFT Marketplace built on Bsc</p>                      
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column ">
                                <p className="text-white" ><b>Fullhouse</b></p>
                                <p className="text-white" href="/">Discover</p>
                                <p className="text-white"  href="/">Connect wallet</p>
                                <p className="text-white"  href="/">Create item</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column ">
                                <p className="text-white" ><b>Info</b></p>
                                <p className="text-white" href="/">Download</p>
                                <p className="text-white"  href="/">Demos</p>
                                <p className="text-white"  href="/">Support</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column ">
                                <p className="text-white" ><b>Join Newsletter</b></p>
                                <p className="text-white" >Subscribe our newsletter to get quick updates on upcoming NFT drops</p>
                                <input type="text" className="input-left" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>



    )
}
export default Footer