import React from 'react';
import Logo from '../../assets/img/Logo.png';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu(){
  return(
    <nav className="Menu">

      <Link to="/">
        <img src={Logo} alt="Logo" className="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo!
      </Button>
    </nav>
  )
}

export default Menu;