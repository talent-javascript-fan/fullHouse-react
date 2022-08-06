import '../App.css';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Sidebar } from '../components/sidebar/sidebar';
import club from '../assets/images/club-img.png';

export const Home = () => {
  return (
    <>
        <Header />
        
        <div className="main-search-container">
            <div className="main-search-title">
                <span className="main-search-title"><b>Marketplace</b></span>
            </div>
            <div className="main-search-content">
                <span className="main-search-content">Discover, collect, and sell extraordinary NFTs</span>
            </div>
        </div>
        <div className="main-content">
            <Sidebar />
            <div className="tab-container">
                <div className="tab-row">
                    <div className="img-col">                
                        <img src={club} alt="" />
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                    <div className="img-col">
                       <img src={club} alt="" />
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                    <div className="img-col">
                        <img src={club} alt="" />
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                </div>
                <div className="tab-row">
                    <div className="img-col">
                        <img src={club} alt="" />
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                    <div className="img-col">
                        <img src={club} alt=""/>
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                    <div className="img-col">
                        <img src={club} alt=""/>
                        <span>offered($1234.0) 0.228Eth</span>
                        <span>by @Darrel_Steward</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Home;