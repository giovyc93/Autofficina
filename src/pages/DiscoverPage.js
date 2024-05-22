import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscoverContent from "../components/DiscoverContent";
import Title from "../components/Title"
import Cover from "../assets/img/mechanic.jpg";
import CardProducts from "../components/CardProducts"
import Wrench from "../assets/img/wrench.png";
import Oil from "../assets/img/oil.png";

const CompanyPage = () => {
  const data = {
    id: "product",
    classe: "discoverContent",
    textClass: "discoverText",
    img: Cover,
    imgClass:"discoverImg",
    paragraph: "Se hai bisogno di noleggiare un'auto mentre il tuo veicolo è in revisione, Centro Revisione Ienna ti metterà in contatto con diverse compagnie di noleggio a breve e lungo termine con cui collaborano, garantendoti le tariffe più vantaggiose sul mercato. Inoltre, per soddisfare le esigenze delle grandi aziende, l'officina di Palermo offre soluzioni personalizzate per le revisioni periodiche dei veicoli aziendali, tra cui la gestione assicurativa senza pagamento anticipato.",
    title: "Centro revisioni Ienna",
  };
  const data1 = {
    id: "product2",
    classe: "discoverContent1",
    img: Cover,
    imgClass:"discoverImg",
    textClass: "discoverText",
    paragraph: " Come Centro Autorizzato dalla Motorizzazione Civile, offre anche servizi di revisione periodica per automobili, motociclette e autocarri, fornendo la documentazione necessaria per la conformità del veicolo. Sia che si tratti di auto, furgoni, camion o moto.",
    title: "Revisione Veicoli Completa",
  };
  const handle1 = () => {
    window.location.href = "#product";
  }
  const handle2 = () => {
    window.location.href = "#product2";
  }


  return (
    <>
      <Navbar />
      <div className="pageContent" id="#products">
      <div className="spaceContainer"></div>
        <div className="homeProducts">
          <h2 className="contentSubtitle">I nostri servizi</h2>
          <div className="productsContainer">
            <CardProducts
              nameCard="Crocchè"
              fotoCard={Wrench}
              handler={() => handle1()}
            />
            <CardProducts
              nameCard="Crocchè"
              fotoCard={Oil}
              handler={() => handle2()}
            />
            <CardProducts
              nameCard="Crocchè"
              fotoCard={Wrench}
              handler={() => handle1()}
            />
          </div>
        </div>
        <div className="spaceContainer"></div>
          <DiscoverContent {...data} />
          <div className="spaceContainer"></div>
          <DiscoverContent {...data1} />
          <div className="spaceContainer"></div>
          <Title />
        </div>
      <Footer />
    </>
  );
};
export default CompanyPage;
