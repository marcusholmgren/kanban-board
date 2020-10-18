import React from 'react';

export function AppContainer({ children }: React.PropsWithChildren<{}>) {
  return <div className="grid grid-cols-3 h-screen max-w-md mx-auto sm:max-w-full bg-blue-600">
    {children}
    </div>;
}
