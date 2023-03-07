import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/nebula1.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Wrapper>
      <Hero/>
      <About/>
      <Gallery/>
      <Contact/>
    </Wrapper>
  )
}

export default App