import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscoverContent from "../components/DiscoverContent";
import Title from "../components/Title"
import Cover from "../assets/img/mechanic.jpg";
// import CardProducts from "../components/CardProducts"
// import Wrench from "../assets/img/wrench.png";
// import Oil from "../assets/img/oil.png";
import BlockShaft from "../assets/img/blockshaft.jpg";
import Tyres from "../assets/img/tyres.jpg";

const CompanyPage = () => {
  const data = {
    id: "product",
    classe: "discoverContent",
    textClass: "discoverText",
    img: Cover,
    imgClass:"discoverImg",
    paragraph: "La nostra officina offre servizi completi di tagliando auto. Con tecnici esperti e attrezzature all'avanguardia, garantiamo manutenzione accurata e ricambi originali per mantenere il vostro veicolo in perfette condizioni. Affidateci la vostra auto per un tagliando di qualità. Visitateci per prenotare il servizio",
    title: "Tagliando auto",
  };
  const data1 = {
    id: "product2",
    classe: "discoverContent1",
    img: Tyres,
    imgClass:"discoverImg",
    textClass: "discoverText",
    paragraph: "La nostra officina è specializzata in meccanica leggera, offrendo servizi rapidi e precisi per la manutenzione quotidiana del vostro veicolo. Dalla sostituzione di filtri e olio ai controlli sui freni e le sospensioni, i nostri tecnici esperti utilizzano attrezzature moderne per garantire interventi di alta qualità. Affidateci la vostra auto per una manutenzione efficiente e sicura. Venite a trovarci per i vostri interventi di meccanica leggera!",
    title: "Meccanica leggera",
  };
  const data2 = {
    id: "product3",
    classe: "discoverContent",
    img: BlockShaft,
    imgClass:"discoverImg1",
    textClass: "discoverText",
    paragraph: "La nostra officina è specializzata nell'installazione del Block Shaft 2, il sistema antifurto meccanico all'avanguardia. Con anni di esperienza e un team di esperti qualificati, garantiamo un'installazione rapida e precisa per proteggere il vostro veicolo.",
    title: "Installazione Block Shaft 2",
  };
  // const handle1 = () => {
  //   window.location.href = "#product";
  // }
  // const handle2 = () => {
  //   window.location.href = "#product2";
  // }


  return (
    <>
      <Navbar />
      <div className="pageContent" id="#products">
      <div className="spaceContainer"></div>
        <div className="homeProducts">
          <h2 className="contentSubtitle">I nostri servizi</h2>
          {/* <div className="productsContainer">
            <CardProducts
              nameCard="Revisione"
              fotoCard={Wrench}
              handler={() => handle1()}
            />
            <CardProducts
              nameCard="Revisione"
              fotoCard={Oil}
              handler={() => handle2()}
            />
            <CardProducts
              nameCard="Revisione"
              fotoCard={Wrench}
              handler={() => handle1()}
            />
          </div> */}
        </div>
        <div className="spaceContainer"></div>
          <DiscoverContent {...data} />
        <div className="spaceContainer"></div>
          <DiscoverContent {...data1} />
          <div className="spaceContainer"></div>
          <DiscoverContent {...data2} />
          <div className="spaceContainer"></div>
          <Title />
        </div>
      <Footer />
    </>
  );
};
export default CompanyPage;
