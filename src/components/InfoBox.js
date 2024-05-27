const InfoBox = () => {
    return (
        <div className="infoContainer">
            <div className="boxInfo">
                <h1 className="subtitleHome1">Orario di apertura</h1>
                <ol className="boxList">
                    <li>Lunedì - Venerdì 08.00 - 18.30 (Orario continuato) </li>
                    <li>Sabato 08.00 - 13.00 </li>
                    <li>Domenica - chiuso </li>
                </ol>
            </div>
            <div className="boxInfo2">
                <h1 className="subtitleHome1">Nome officina</h1>
                <h1 className="subtitleHome1">partita iva</h1>
            </div>
            <div className="boxInfo">
                <h1 className="subtitleHome1">Contatti</h1>
                <ol className="boxList">
                    <li>Palermo PA</li>
                    <li>Via Sperone, 3d, 90123</li>
                    <li>Tel - 0917297718</li>
                    <li>Cell - 3400874374</li>
                    <li>Email - </li>
                </ol>
            </div>
        </div>
    )
}
export default InfoBox