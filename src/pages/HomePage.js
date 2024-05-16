import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Home from "../assets/img/Home.jpg";
import Title from "../components/Title"
import Cover from "../assets/img/mechanic.jpg";
import Tyres from "../assets/img/tyres.jpg";
import DiscoverContent from "../components/DiscoverContent";



const HomePage = () => {
  const data = {
    classe: "discoverContent",
    paragraph: "Se hai bisogno di noleggiare un'auto mentre il tuo veicolo è in revisione, Centro Revisione Ienna ti metterà in contatto con diverse compagnie di noleggio a breve e lungo termine con cui collaborano, garantendoti le tariffe più vantaggiose sul mercato. Inoltre, per soddisfare le esigenze delle grandi aziende, l'officina di Palermo offre soluzioni personalizzate per le revisioni periodiche dei veicoli aziendali, tra cui la gestione assicurativa senza pagamento anticipato.",
    title: "Centro revisioni Ienna",
    img: Cover
  };
  const data1 = {
    classe: "discoverContent1",
    paragraph: " Come Centro Autorizzato dalla Motorizzazione Civile, offre anche servizi di revisione periodica per automobili, motociclette e autocarri, fornendo la documentazione necessaria per la conformità del veicolo. Sia che si tratti di auto, furgoni, camion o moto.",
    title: "Revisione Veicoli Completa presso il Centro Autorizzato",
    img: Tyres
  };
  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="carousel-container">
          <div className="carousel">
            <img
              src={Home}
              alt={`Home`}
              className="carousel__img" />
            <div class="centered">
              <a href="/discover" className="aTitle"><h1 className="titleHome">Centro revisione IENNA</h1></a>
            </div>
          </div>
        </div>
        <Content
          contentParagraph="Centro Revisione Auto Ienna è una delle principali officine di Palermo, specializzata nelle riparazioni meccaniche di veicoli di ogni tipo, sia civili che commerciali. Grazie a un team di meccanici esperti e all'uso di avanzate tecniche di diagnostica computerizzata, l'officina è in grado di ripristinare completamente la funzionalità dei veicoli, correggendo malfunzionamenti e migliorando le prestazioni complessive."
        />
        <DiscoverContent {...data} />
        <DiscoverContent {...data1} />
        <Title />
      </div>
      <Footer />

    </>
  );
};


export default HomePage;
