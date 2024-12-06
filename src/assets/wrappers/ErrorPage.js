import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
    font-weight: 500;
    border: 2px solid var(--primary-500);
    padding: 0.4rem 1rem;
    border-radius: 3px;
    transition: var(--transition);
  }
  a:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default Wrapper;
