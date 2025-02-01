import ProductStore from "../../store/ProductStore";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

function ProductImages() {
  const { Details } = ProductStore();
  const Images = [
    {
      original: Details[0]["details"]["img1"],
      thumbnail: Details[0]["details"]["img1"],
    },
    {
      original: Details[0]["details"]["img2"],
      thumbnail: Details[0]["details"]["img2"],
    },
    {
      original: Details[0]["details"]["img3"],
      thumbnail: Details[0]["details"]["img3"],
    },
    {
      original: Details[0]["details"]["img4"],
      thumbnail: Details[0]["details"]["img4"],
    },
    {
      original: Details[0]["details"]["img5"],
      thumbnail: Details[0]["details"]["img5"],
    },
    {
      original: Details[0]["details"]["img6"],
      thumbnail: Details[0]["details"]["img6"],
    },
  ];
  return (
    <div>
      <ReactImageGallery autoPlay={true} items={Images} showThumbnails={true} />
      <p>{Details.description}</p>
    </div>
  );
}

export default ProductImages;
