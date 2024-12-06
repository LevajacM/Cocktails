import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--white);
  width: 100vw;

  .nav-center {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .logo {
    color: var(--primary-500);
    letter-spacing: 2px;
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .nav-link {
    text-transform: capitalize;
    color: var(--grey-900);
    letter-spacing: 2px;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active-link {
    color: var(--primary-500);
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
    .nav-link {
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
