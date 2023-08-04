import { styled } from 'styled-components';
import TemperatureCard from './features/TemperatureCard';
import GlobalStyles from './style/GlobalStyles';

const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Page>
      <GlobalStyles />
      <TemperatureCard />
    </Page>
  );
}

export default App;
