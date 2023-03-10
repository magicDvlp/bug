import {pokemonApi, useGetPokemonQuery} from '../api';
import Link from 'next/link';
import {wrapper} from '../store';

export default function Home() {
  useGetPokemonQuery();
  return (
    <>
      <Link href="/another">To another page</Link>
      <p>home page</p>
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