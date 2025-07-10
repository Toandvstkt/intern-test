'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => console.error('Lỗi khi lấy dữ liệu người dùng'));
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">📋 Danh sách người dùng</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="cursor-pointer text-gray-600 p-3 bg-white rounded shadow hover:bg-blue-50 transition"
            >
              {user.name}
            </div>
          ))}
        </div>

        <div className="md:w-2/3 bg-white text-gray-600 p-4 rounded shadow min-h-[200px]">
          {selectedUser ? (
            <>
              <h2 className="text-lg font-semibold text-blue-700 mb-2">{selectedUser.name}</h2>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
            </>
          ) : (
            <p className="text-gray-500">👉 Click vào một người dùng để xem chi tiết.</p>
          )}
        </div>
      </div>

      <button
        onClick={() => router.push('/')}
        className="mt-10 inline-block bg-gray-700 text-white px-5 py-2 rounded hover:bg-black transition"
      >
        ← Quay về trang chủ
      </button>
    </main>
  );
}
