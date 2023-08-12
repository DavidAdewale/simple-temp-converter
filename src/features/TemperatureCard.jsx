import { styled } from 'styled-components';
import Form from '../style/Form';
import { useState } from 'react';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Card = styled.div`
  width: 80rem;
  height: 50rem;
  padding: 2rem 4rem;
  gap: 4rem;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  border-radius: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    width: 60rem;
  }
  @media only screen and (max-width: 37.5em) {
    width: 35rem;
    height: auto;
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TemperatureCard() {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState('celsius');
  const [to, setTo] = useState('fahrenheit');
  const [results, setResults] = useState(0);

  const year = new Date().getFullYear();

  function handleSubmit(e) {
    e.preventDefault();

    let convertedValue;
    if (from === 'celsius' && to === 'fahrenheit') {
      convertedValue = (value * 9) / 5 + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      convertedValue = ((value - 32) * 5) / 9;
    } else {
      convertedValue = value;
    }

    setResults(Math.round(convertedValue));
  }

  return (
    <CardContainer>
      <Card>
        <h2>David&lsquo;s Temp. Converter</h2>

        <Form onSubmit={handleSubmit}>
          <div>
            <fieldset>
              <label htmlFor="temperatue">Temp</label>
              <input
                type="number"
                id="temperatue"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="from">From</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="celsius">Celsuis</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="to">to</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="celsius">Celsuis</option>
              </select>
            </fieldset>
          </div>
          <button type="submit">Submit</button>
        </Form>
        <Results>
          <h1>{results}</h1>
          <p>degree {to}</p>
        </Results>
      </Card>
      <p>
        &copy; {year} David Adewale. ID:<strong>33644</strong>
      </p>
    </CardContainer>
  );
}

export default TemperatureCard;
