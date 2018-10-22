import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation>

          <img src='./img/rocket-launch.svg' alt='rocket-logo'></img>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#time-tracker'>Time Tracker</a></li>
          </ul>

        </Navigation>

        <Section className='hero' id='home'>

          <Title>Welcome Freelancer!</Title>

          <p className='intro'>
            Congats, you have found the single best tool</p>
          <p className='rocket-para'>to plan and track your awesome projects</p>

          <p>Get started right now!</p>

        </Section>

        <Section id='about'>

          <div className='subtitle-wrapper'>
            <Subtitle>About this great tool</Subtitle>
            <Arrow href='#' />
          </div>
        </Section>


        <Section id='time-tracker'>
          <div className='subtitle-wrapper'>
            <Subtitle>Time Tracker</Subtitle>
            <Arrow href='#' />
          </div>
          <img className='time-icon' src='./img/time.svg' alt='Time Tracker Icon' />
          <Placeholder children={'Lucios Time Tracker'} />
        </Section>

        <Footer>
          <div className='subtitle-wrapper'>
            <Subtitle>Check us out on github</Subtitle>
            <Arrow href='#' />
          </div>
        </Footer>
      </div>
    );
  }
}

export default App;

const Placeholder = styled.div`
  margin: 50px auto 0 auto;
  height: 200px;
  width: 300px;
  border: 1px solid black;
`

const Arrow = styled.a`
  &:before {
    content: 'arrow';
/*     background: url('chevron-up-dark.png') no-repeat; */
    font-family: serif;
    border: 0.25px solid #0b2f37;
    padding: 2px;
  }
`

const Navigation = styled.nav`
  background-color: #0b2f37;
  height: 5vh;
  color: #ebede1;
  padding: 10px;
  display:flex;
  align-items:center;
  justify-content:space-around;

  ul {
    list-style-type:none;
    display:flex;
    justify-content:flex-end;

    li  {
      display: inline-block;
      margin-right: 15px;
      padding-right: 5px;
      font-weight: bold;
      border-right: 2px solid #ebede1;

      /* &:hover {
        border-bottom: 2px solid #ebede1;
      } */
    }
  }
`

const Title = styled.h1`
  color:rgba(11,47,55, 0.9);  
  font-size: 2.5rem;
  text-shadow: 0px 4px rgba(64,135,56,0.75), 0px 8px rgba(255,166,0, 0.75);

`

const Section = styled.section`
  height:60vh;
  border-bottom:5px solid #0b2f37;
  padding: 50px;
  background-color:#ebede1;
`
const Subtitle = styled.h2`
`
const Footer = styled.footer`
  height:10vh;
`
