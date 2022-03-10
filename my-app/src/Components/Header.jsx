import background from '../images/image-mockups.png';
import './Header.css'
import Button from "./Button";

function Header() {
      return (
            <header className="header">
                  <div className="header-primary">
                        <img src={background} alt="background" />
                  </div>
                  <div className="header-secondary">
                        <h1>Next generation digital banking</h1>

                        <p>Take your financial life online. Your EasyBank account will be a one-stop-shop for spending , saving, budgeting , investing , and much more.</p>

                        <Button/>

                  </div>
            </header>
      )
}

export default Header;