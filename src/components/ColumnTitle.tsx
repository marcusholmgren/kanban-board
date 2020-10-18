import React from 'react';

interface ColumnTitleProps {
  text: string;
}

export function ColumnTitle({ children }: React.PropsWithChildren<{}>) {
  return <div className="font-bold p-2 bg-gray-400">{children}</div>;
}
