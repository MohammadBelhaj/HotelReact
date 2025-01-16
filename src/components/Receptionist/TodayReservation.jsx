import React from 'react';

// This would typically come from your backend
const reservations = [
  { id: 1, guestName: 'John Doe', roomNumber: '101', checkIn: '2023-06-15T14:00:00Z', checkOut: '2023-06-17T11:00:00Z' },
  { id: 2, guestName: 'Jane Smith', roomNumber: '202', checkIn: '2023-06-15T15:00:00Z', checkOut: '2023-06-18T10:00:00Z' },
];

export function TodayReservations() {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-600">
        <h2 className="text-xl font-bold text-white">Today's Reservations</h2>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reservation.guestName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.roomNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(reservation.checkIn).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(reservation.checkOut).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

