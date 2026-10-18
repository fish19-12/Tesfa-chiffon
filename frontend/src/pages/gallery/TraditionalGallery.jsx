import FashionGalleryLayout from "../../components/FashionGalleryLayout";
import { FaTshirt } from "react-icons/fa";

const TraditionalGallery = () => {
  return (
    <FashionGalleryLayout
      title="Ethiopian"
      highlight="Heritage"
      badge="Traditional Collection"
      icon={<FaTshirt />}
      category="Traditional"
    />
  );
};

export default TraditionalGallery;
