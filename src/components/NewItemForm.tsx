import React, { useState, Children } from 'react';

interface NewItemFormProps {
  onAdd(text: string): void;
}

export function NewItemForm() {
  const [text, setText] = useState('');
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}> Create</NewItemButton>
    </NewItemFormContainer>
  );
}

export function NewItemFormContainer({
  children,
}: React.PropsWithChildren<{}>) {
  return <div className="w-20 max-w-md">
      {children}
  </div>;
}

interface NewItemButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function NewItemButton(
  props: React.PropsWithChildren<NewItemButtonProps>,
) {
  return (
    <button
      className="rounded-md border-none shadow-none text-center p-2 bg-green-600"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

interface NewItemInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function NewItemInput(props: NewItemInputProps) {
  return (
    <input
      className="bg-gray-200 focus:bg-white border-transparent focus:border-blue-400 w-full pt-2 pb-2 pl-1 pr-1 mt-4"
      placeholder="Focus me"
      onChange={props.onChange}
    />
  );
}
