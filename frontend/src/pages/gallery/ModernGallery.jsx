import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaPalette } from "react-icons/fa";

const ModernGallery = () => {
  return (
    <FashionGalleryLayout
      title="Modern"
      highlight="Elegance"
      badge="Modern Collection"
      icon={<FaPalette />}
      category="Modern"
    />
  );
};

export default ModernGallery;
