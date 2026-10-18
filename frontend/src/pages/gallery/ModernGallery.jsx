import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaPalette } from "react-icons/fa";

const ModernGallery = () => {
  return (
    <FashionGalleryLayout
      title="Custom"
      highlight="Design"
      badge="Custom Fashion"
      icon={<FaPalette />}
      category="Custom"
    />
  );
};

export default ModernGallery;
