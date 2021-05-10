import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import MainTwo from './components/MainTwo';
import Proyectos from './components/Proyectos';
import Contact from './components/Contact';
import BackgroundForms from './components/BackgroundForms';
import styled from '@emotion/styled';

const BodyContainer = styled.div`
  background: linear-gradient(135deg, #FAD7A1 0%, #E96D71 100%);
  margin: 0;
  padding: 0;
`;


function App() {
  return (
    <BodyContainer>
      <BackgroundForms/>
      <Header/>
      <MainSection/>
      <MainTwo/>
      <Proyectos/>
      <Contact/>
      <Footer/>
    </BodyContainer>
  );
}

export default App;
