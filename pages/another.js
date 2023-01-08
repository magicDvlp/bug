import {useGetPokemonQuery, pokemonApi} from '../api';
import Link from 'next/link';
import {wrapper} from '../store';

export default function Other() {
  useGetPokemonQuery();
  return (
    <>
      <Link href="/">To home</Link>
      <p>another page</p>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
  store.dispatch(pokemonApi.endpoints.getPokemon.initiate());
  await Promise.all(store.dispatch(pokemonApi.util.getRunningQueriesThunk()));
  return {
    revalidate: 10
  }
});
