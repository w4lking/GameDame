// 1. Importe as imagens dos jogos no carrinho
import DeathStranding from "../assets/images/deathStrandingImage.png";
import BobEsponja from "../assets/images/bobEsponjaImage.png";

// 2. Crie e exporte o objeto com os dados do carrinho
export const cartData = {
  items: [
    {
      id: "cart-item-1",
      title: "SpongeBob: Battle for BikiniBottom",
      platform: "Plataforma: PC",
      price: 299.00,
      imageUrl: BobEsponja,
    },
    {
      id: "cart-item-2",
      title: "Death Stranding",
      platform: "Plataforma: PC",
      price: 299.00,
      imageUrl: DeathStranding,
    },
  ],
  // Calcula o total dinamicamente
  get total() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
};
