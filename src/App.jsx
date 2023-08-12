import { styled } from 'styled-components';
import TemperatureCard from './features/TemperatureCard';
import GlobalStyles from './style/GlobalStyles';

const Page = styled.div`
  min-height: 100vh;
  padding: 2.5rem 0;
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
