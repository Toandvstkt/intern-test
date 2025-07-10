'use client';

import { useRouter } from 'next/navigation';
import { FaUserFriends, FaEnvelopeOpenText } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-10 bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 animate-pulse">
        🎯 Welcome to the Frontend Intern Test
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <button
          onClick={() => router.push('/users')}
          className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:scale-105 hover:bg-blue-700 transition"
        >
          <FaUserFriends size={20} />
          Danh sách người dùng
        </button>

        <button
          onClick={() => router.push('/contact')}
          className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded shadow-md hover:scale-105 hover:bg-green-700 transition"
        >
          <FaEnvelopeOpenText size={20} />
          Liên hệ
        </button>
      </div>
    </main>
  );
}
