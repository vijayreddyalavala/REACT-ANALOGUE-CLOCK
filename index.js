import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import B from './B';
import './styles.css';

const ClockWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 8rem 0;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 2rem 0 0;
    font-family: Raleway;
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 4rem 0;
  }
`;

const ClockGrids = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 4rem;
  background: #d0d3d4;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

function App() {
  return (
    <div className="App">
      <ClockGrids>
        <ClockWrapper>
          <h5>Hello Evergent Inc !</h5>
          <B size={300} />
          <h6>Built with ❤️</h6>
        </ClockWrapper>
      </ClockGrids>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
