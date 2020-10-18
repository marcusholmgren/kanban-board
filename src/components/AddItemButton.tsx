import React, { useState } from 'react';

interface AddItemButtonProps { 
  dark?: boolean
}


export function AddItemButton({ dark}: AddItemButtonProps) {
  return (
    <div className="bg-gray-400 hover:bg-blue-500 hover:text-white p-4">+ Add another task</div>
  );
}
