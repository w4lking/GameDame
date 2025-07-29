// 1. Importe as imagens que serão usadas no banner
import Gow from "../assets/images/gowImage.png";
import DaysGone from "../assets/images/daysGImage.png";
import ZeroDown from "../assets/images/zeroDownImage.png";

// 2. Crie e exporte a lista de dados dos banners
export const bannerGamesData = [
  {
    id: "banner-1",
    title: "God of War",
    imageUrl: Gow,
    discount: "-40%",
    price: "R$ 119,95",
  },
  {
    id: "banner-2",
    title: "Days Gone",
    imageUrl: DaysGone,
    discount: "-15%",
    price: "R$ 169,90",
  },
  {
    id: "banner-3",
    title: "Horizon Zero Dawn",
    imageUrl: ZeroDown,
    discount: "-25%",
    price: "R$ 149,99",
  },
];
