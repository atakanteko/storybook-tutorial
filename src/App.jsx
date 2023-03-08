import React from 'react';
import styled from 'styled-components';
import useTheme from './themes';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1` 
  font-size: 1.5em;
  text-align: center; 
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: ${(props) => props.backgroundColor};
`;

function App() {
  const { palette } = useTheme();
  console.log(palette);
  return (
    <Wrapper backgroundColor={palette.backgroundPaper}>
      <Title>
        Hello World!
      </Title>
    </Wrapper>
  );
}

export default App;
