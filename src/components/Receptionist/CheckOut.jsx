import React, { useState } from 'react';

export function CheckOut() {
  const [roomNumber, setRoomNumber] = useState('');

  const handleCheckOut = () => {
    // Here you would typically send this data to your backend
    console.log('Checking out room:', roomNumber);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-600">
        <h2 className="text-xl font-bold text-white">Client Check-out</h2>
      </div>
      <div className="p-6">
        <form onSubmit={(e) => { e.preventDefault(); handleCheckOut(); }} className="space-y-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Check Out
          </button>
        </form>
      </div>
    </div>
  );
}

