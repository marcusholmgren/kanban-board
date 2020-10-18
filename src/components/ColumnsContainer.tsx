import React from 'react';
import { AddItemButton } from './AddItemButton';

export function ColumnContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="m-2 bg-grey-600 rounded-md border-2 border-gray-400">
      {children}
    </div>
  );
}
