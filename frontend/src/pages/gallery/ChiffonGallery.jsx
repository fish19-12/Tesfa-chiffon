import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaStar } from "react-icons/fa";

const ChiffonGallery = () => {
  return (
    <FashionGalleryLayout
      title="Luxury"
      highlight="Chiffon"
      badge="Chiffon Collection"
      icon={<FaStar />}
      category="Chiffon"
    />
  );
};

export default ChiffonGallery;
