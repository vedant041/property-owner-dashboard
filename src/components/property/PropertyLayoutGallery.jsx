const PropertyLayoutGallery = ({ images }) => {
  return (
    <>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="layout"
          className="h-36 min-w-[220px] rounded-xl object-cover"
        />
      ))}
    </>
  );
};

export default PropertyLayoutGallery;
