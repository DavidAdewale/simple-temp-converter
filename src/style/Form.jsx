import { styled } from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 4rem;
  gap: 3rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-light-gray);
  border-radius: 2.5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  & div {
    display: flex;
    gap: 1rem;
  }

  & fieldset {
    border: none;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    & input,
    & select {
      font-family: inherit;

      border-radius: 2.5rem;
      border: none;
      border: 1px solid var(--color-gray);
      padding: 0.5rem 2rem;
    }

    & input {
      width: 10rem;
    }

    & select {
      & option {
        font-family: inherit;
      }
    }
  }

  & button {
    background-color: var(--color-btn);
    color: var(--color-white);
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 2.5rem;
    position: relative;
    z-index: 1;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      &::after {
        width: 100%;
        height: 100%;
        background-color: var(--color-btn-hover);
      }
    }

    &:active {
      transform: scale(1);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 2.5rem;
      z-index: -1;

      transition: width 0.3s ease 0.3s;
      transition: height 0.3s ease;
    }
  }
`;

export default Form;
