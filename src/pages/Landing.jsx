import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useQuery } from '@tanstack/react-query';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || 'o';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      searchTerm = searchTerm || 'o';
      const resp = await axios.get(`${baseUrl}${searchTerm}`);
      return resp.data.drinks;
    },
  };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
