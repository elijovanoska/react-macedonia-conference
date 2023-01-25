import './App.css';
import styled from 'styled-components';
import topImage from './images/react-macedonia-conference-room.png';
import Logo from './components/Logo';
import NavBar from './components/Navbar';
import About from './components/About';
import Speakers from './components/Speakers/Speakers';

import 'bootstrap/dist/css/bootstrap.min.css';

const TopBackground = styled.img`
background-image: url(${topImage})  ;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 100%;
position: fixed;
opacity: 0.2;
background-size: cover;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
margin:20px
`

function App() {
  return (
    <div className="App">
      <TopBackground></TopBackground>
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <About id="about" />
      <Speakers />
    </div>
  );
}

export default App;
