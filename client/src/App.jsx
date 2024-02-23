import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import './App.css'
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql'
});

import Nav from './components/Nav';
import Footer from "./components/Foot.jsx";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Nav />
    <Outlet />
    <Footer />
  </ApolloProvider>
    )
}

export default App
