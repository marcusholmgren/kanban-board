import React from 'react';
import { AppContainer } from './components/AppContainer';
import { Column } from './components/Column';
import Card from './components/Card';
import { AddNewItem } from './components/AddNewItem';
import { TrelloCard } from './components/TrelloCard';

interface AppProps {}

function App({}: AppProps) {
  return (
    <AppContainer>
      <Column text="To Do">
      <TrelloCard />
        <Card text="Generate app scaffold" />{' '}
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />{' '}
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />{' '}
      </Column>
      {/* <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} /> */}
    </AppContainer>
  );
}

export default App;
