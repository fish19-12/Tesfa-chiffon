import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaLayerGroup } from "react-icons/fa";

const TextileGallery = () => {
  return (
    <FashionGalleryLayout
      title="Luxury"
      highlight="Fabrics"
      badge="Premium Textile"
      icon={<FaLayerGroup />}
      category="Textile"
    />
  );
};

export default TextileGallery;
