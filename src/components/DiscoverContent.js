

const DiscoverContent = ({ classe, id, textClass, paragraph, title, img, imgClass }) => {
  return (
    <div className={classe}>
      <div id={id} className={textClass}>
        <h2 className="discoverSubtitle">{title}</h2>
        <p className="discoverParagraph">{paragraph}</p>
      </div>
      <img
        src={img}
        alt="panino-Sfondo-mare"
        className={imgClass}
      />
    </div>
  )
}
export default DiscoverContent