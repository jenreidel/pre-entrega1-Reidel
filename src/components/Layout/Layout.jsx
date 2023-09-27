import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import banner from '../../assets/img/banner-jardininterior1.png';

const Layout = ({children}) => {
    return (
        <>
            <NavBar />
                <div>
                    <img src={banner} width="100%" alt="banner de plantas con el logo de tu jardin interior" />
                </div>
                <div>
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default Layout;