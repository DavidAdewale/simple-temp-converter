import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --color-bg: #F1DA51;
    --color-text: #212022;
    --color-white: #fffeff;
    --color-btn: #6052F2;
    --color-btn-hover: #3E3E40;
    --color-gray: #A8A8A8;
    --color-light-gray: #E2E2E2;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {

   font-family: 'Outfit', sans-serif;  background-color: var(--color-bg);
  color: var(--color-text);

  transition: color 0.3s, background-color 0.3s;
  height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid transparent;
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1{
    font-size: 6rem;
}

h2 {
    font-weight: 200;
}

img {
  max-width: 100%;

}

`;

export default GlobalStyles;
