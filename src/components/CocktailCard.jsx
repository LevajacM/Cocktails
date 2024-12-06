import Wrapper from '../assets/wrappers/CocktailCard';
import { Link, useOutletContext } from 'react-router-dom';

const CocktailCard = ({
  idDrink: id,
  strAlcoholic: type,
  strDrink: name,
  strGlass: glass,
  strDrinkThumb: img,
}) => {
  return (
    <Wrapper>
      <img src={img} alt={name} className='img' />
      <section className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{type}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </section>
    </Wrapper>
  );
};

export default CocktailCard;
