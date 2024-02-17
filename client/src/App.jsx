import { Outlet } from 'react-router-dom';
import {
  // ApolloClient,
  // InMemoryCache,
  ApolloProvider,
  // createHttpLink
} from '@apollo/client';
import './App.css'
// import { setContext } from '@apollo/client/link/context';
// const httpLink = createHttpLink({
//   uri: '/graphql'
// });

function App() {
  return (
  <ApolloProvider>
    <Outlet />
  </ApolloProvider>
    )
}

export default App
