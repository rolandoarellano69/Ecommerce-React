import logoSneakes from '@/assets/images/logo.svg';
import PicAvatar from '@/assets/images/image-avatar.png';

import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';

const MainHeader = () => {
  return (<header>
    <button className='md:hidden'>
      <MenuIcon/>
    </button>
    <img src={logoSneakes} alt="logo" />
    <nav className='hidden md:block'>
      <a href="/">Coleccion</a>
      <a href="/">Hombres</a>
      <a href="/">Mujeres</a>
      <a href="/">About</a>
      <a href="/">Contacto</a>
    </nav>
    <div>
      <button>
        <CartIcon/>
      </button>
      <img src={PicAvatar} alt="Avatar" />
    </div>
  </header>)

}

export default MainHeader;