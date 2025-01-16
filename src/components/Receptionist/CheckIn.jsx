import React, { useState } from 'react';

export function CheckIn() {
  const [guestName, setGuestName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [services, setServices] = useState({
    breakfast: false,
    wifi: false,
    parking: false,
    roomService: false,
  });

  const handleCheckIn = () => {
    // Here you would typically send this data to your backend
    console.log('Checking in:', { guestName, roomNumber, services });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-600">
        <h2 className="text-xl font-bold text-white">Client Check-in</h2>
      </div>
      <div className="p-6">
        <form onSubmit={(e) => { e.preventDefault(); handleCheckIn(); }} className="space-y-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Hotel Services</h3>
            {Object.entries(services).map(([service, checked]) => (
              <div key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={service}
                  checked={checked}
                  onChange={(e) => setServices(prev => ({ ...prev, [service]: e.target.checked }))}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={service} className="text-sm font-medium text-gray-700">
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </label>
              </div>
            ))}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Check In
          </button>
        </form>
      </div>
    </div>
  );
}

