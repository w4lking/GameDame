
import DeathStranding from "../assets/images/deathStrandingImage.png";
import BobEsponja from "../assets/images/bobEsponjaImage.png";

export const cartData = {
  items: [
    {
      id: "cart-item-1",
      title: "SpongeBob: Battle for BikiniBottom",
      platform: "Plataforma: PC",
      price: 120.00,
      imageUrl: BobEsponja,
    },
    {
      id: "cart-item-2",
      title: "Death Stranding",
      platform: "Plataforma: PC",
      price: 100.00,
      imageUrl: DeathStranding,
    },
  ],
  get total() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
};
