import React from 'react';
import { ColumnContainer } from './ColumnsContainer';
import { ColumnTitle } from './ColumnTitle';
import { AddNewItem } from './AddNewItem';

interface ColumnProps {
  text: string;
}

export function Column({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <div className=" w-full p-2 font-sans">
      {children}
      </div>
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
}
