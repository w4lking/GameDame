import icone from '../../assets/images/perfil_icone.png'; 

function NavBar() {
  return (
    <nav>
        <ul>
        <img src={icone} alt="Icone de Perfil" />
        <li><a href="/launches">Lançamentos</a></li>
        <li><a href="/popular">Populares</a></li>
        <li><a href="/genres">Gêneros</a></li>
        <li><a href="/promotions">Promoções</a></li>
        <li><a href="/account">Conta</a></li>
        </ul>
          
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar jogos..." />
            <button type="submit">Buscar</button>
        </div>
    </nav>
  );
}

export default NavBar;