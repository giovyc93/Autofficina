import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapDetails from "../components/MapDetails";
import Title from "../components/Title"
import Map from "../assets/img/map.png";

const MapPage = () => {
    return (
        <>
            <div className="pageAboutUs">
                <Navbar />
                <div className="teamTitle">
                    <h2 className="contentSubtitle">Contattaci</h2>
                </div>
                <div className="cardMapsContainer">
                    <MapDetails mail="--" address="Via Sperone, 3d, 90123" tel="091 7297718" city="Palermo, PA" />
                    <div className="imgMap">
                        {/* <iframe load="lazy" title="Mappa azienda" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi-BRpO3uGRMRmYdmGqjteFs&key=AIzaSyDI5orfqNB-5gDSj8vfupH_t0b-BWZctaQ"></iframe> */}
                        <img src={Map} alt="Map"></img>
                    </div>
                </div>
                <div className="spaceContainer2"></div>
                <Title />
                <Footer />
            </div>
        </>
    );
};
export default MapPage;
