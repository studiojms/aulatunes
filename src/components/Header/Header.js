import logo from '../../assets/logo.svg';

/**
 * Application header with logo
 * 
 */
function Header() {
  return (
    <header className="at-header">
      <img src={logo} alt="AulaTunes Logo - The word Aula written" />
    </header>
  );
}

export default Header;
