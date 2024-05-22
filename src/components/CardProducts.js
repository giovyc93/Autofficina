
const Card1 = ({ fotoCard, nameCard, handler}) => {
  return (
    <>
      <div className="products">
        <img className="productsImage" src={fotoCard} alt="Teams"></img>
        <h2 className="nameCard">{nameCard}</h2>
        <button className="button" onClick={handler}></button>
      </div>
    </>
  );
};
export default Card1;
