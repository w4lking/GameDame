
import DeathStranding from "../assets/images/deathStrandingImage.png";
import BobEsponja from "../assets/images/bobEsponjaImage.png";
import DeliverUsMars from "../assets/images/deliverUsMarsImage.png";
import Gow from "../assets/images/GodOfWarCard.png";

export const accountData = {
  userName: "Layon Walker",
  email: "nomeusuario@email.com",
  cpf: "123.456.789-00",
  acquiredGames: [
    {
      id: "game-1",
      title: "SpongeBob",
      imageUrl: BobEsponja,
      score: "100/100",
    },
    {
      id: "game-2",
      title: "Deliver Us Mars",
      imageUrl: DeliverUsMars,
      score: "95/100",
    },
    {
      id: "game-3",
      title: "God of War",
      imageUrl: Gow,
      score: "75/100",
    },
    {
      id: "game-4",
      title: "Death Stranding",
      imageUrl: DeathStranding,
      score: null, 
    },
  ],
};
