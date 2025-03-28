import Logo from '../../assets/img/logo.png';
import './_header.scss';
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo SportSee" />
      <ul>
        <li><a href='/'>Accueil</a></li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  )
}
export default Header