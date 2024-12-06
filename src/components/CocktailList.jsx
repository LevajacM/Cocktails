import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';
import noImg from '../assets/no-data.svg';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={noImg} alt='no data' style={{ height: '15rem' }} />
        <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>
          No matching cocktails found...
        </h3>
      </div>
    );
  }

  return (
    <Wrapper>
      {drinks.map((item) => {
        return <CocktailCard key={item.idDrink} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
