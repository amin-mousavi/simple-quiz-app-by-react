import logoImage from '../assets/quiz-logo.png'

function Header() {
    return ( <header>
        <img src={logoImage} alt="Quiz logo" />
        <h1>Quiz App by React</h1>
    </header> );
}

export default Header;