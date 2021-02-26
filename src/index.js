import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

import React from "react";
import ReactDOM from "react-dom";

import './app.css'

import Car from './componentes/boton.js'
import './style.scss'

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
      {
        characters {
          results {
            id
            name
          }
        }
      }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.characters.results.map(character => (
          <p key={character.id}>
            {character.name}<br/>
          </p>
        ));
      }}
    </Query>
  );
};

function App() {
  return (
    <div className="App">
      <h1>HOLA pendejos</h1>
      <CharactersQuery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
ReactDOM.render(
  <Car/>,
  rootElement
);