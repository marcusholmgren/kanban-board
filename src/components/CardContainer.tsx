import React from 'react';

export function CardContainer({ children }: React.PropsWithChildren<{}>) {
  return <div className="bg-white rounded-md p-6 text-left font-medium text-gray-700">{children}</div>;
}
