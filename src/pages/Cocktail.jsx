import Wrapper from '../assets/wrappers/CocktailPage';
import { Link, useLoaderData, Navigate } from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useQuery } from '@tanstack/react-query';

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const searchId = params.id;
    await queryClient.ensureQueryData(singleCocktailQuery(searchId));
    return { searchId };
  };

const singleCocktailQuery = (searchId) => {
  return {
    queryKey: ['cocktail', searchId],
    queryFn: async () => {
      const resp = await axios.get(`${baseUrl}${searchId}`);
      return resp.data.drinks;
    },
  };
};

const Cocktail = () => {
  const { searchId } = useLoaderData();
  console.log(useQuery(singleCocktailQuery(searchId)));

  const { data: drinkData } = useQuery(singleCocktailQuery(searchId));

  if (!drinkData) {
    return <Navigate to='/' />;
  }

  const drink = drinkData[0];
  const {
    strDrinkThumb: img,
    strDrink: title,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;
  const ingredients = [];
  ingredients.push(drink.strIngredient1);
  ingredients.push(drink.strIngredient2);
  ingredients.push(drink.strIngredient3);
  ingredients.push(drink.strIngredient4);
  ingredients.push(drink.strIngredient5);
  ingredients.push(drink.strIngredient6);
  ingredients.push(drink.strIngredient7);
  ingredients.push(drink.strIngredient8);
  ingredients.push(drink.strIngredient9);
  ingredients.push(drink.strIngredient10);
  ingredients.push(drink.strIngredient11);
  ingredients.push(drink.strIngredient12);
  ingredients.push(drink.strIngredient13);
  ingredients.push(drink.strIngredient14);
  ingredients.push(drink.strIngredient15);
  let ing = drink.strIngredient1;
  for (let i = 1; i < 15; i++) {
    if (!ingredients[i]) {
      break;
    }
    ing += ', ';
    ing += ingredients[i];
  }

  return (
    <Wrapper>
      <header>
        <Link to={'/'} className='btn'>
          back home
        </Link>
        <h3>{title}</h3>
      </header>
      <section className='drink'>
        <img src={img} alt={title} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {title}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ing}
          </p>
          <p style={{ textTransform: 'lowercase' }}>
            <span
              className='drink-data'
              style={{ textTransform: 'capitalize' }}
            >
              instructions :
            </span>
            {instructions}
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Cocktail;
