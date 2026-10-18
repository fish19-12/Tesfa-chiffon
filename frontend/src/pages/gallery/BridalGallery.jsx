import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaCrown } from "react-icons/fa";

const BridalGallery = () => {
  return (
    <FashionGalleryLayout
      title="Luxury"
      highlight="Bridal"
      badge="Bridal Collection"
      icon={<FaCrown />}
      category="Bridal"
    />
  );
};

export default BridalGallery;
