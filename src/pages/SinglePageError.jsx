import Wrapper from '../assets/wrappers/SinglePage';
import img from '../assets/single-page-error.svg';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div className='section-center'>
        <img src={img} alt='error img' className='img' />
        <h3>{error.message}</h3>
      </div>
    </Wrapper>
  );
};

export default SinglePageError;
