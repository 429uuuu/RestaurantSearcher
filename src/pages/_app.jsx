import Header from "./components/header"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Pagenation.css'


const MyApp = ({ Component, pageProps }) => {

    //console.log(Component)
    //console.log(pageProps)
    return (
        <div className="container">
            <Header/>
            <Component {...pageProps}/>   
            <Footer/> 
        </div>
    )
}

export default MyApp