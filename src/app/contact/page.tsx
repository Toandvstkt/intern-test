'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.message || !validateEmail(form.email)) {
      setStatus('❌ Vui lòng nhập đúng và đầy đủ thông tin.');
      return;
    }

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('✅ Gửi thành công!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Gửi thất bại.');
      }
    } catch (err) {
      setStatus('❌ Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-tr from-green-50 to-white">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">✉️ Liên hệ với chúng tôi</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Họ tên"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-600 px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-600 px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Nội dung liên hệ"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 text-gray-600 px-3 py-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Gửi
        </button>
        {status && <p className="text-center text-sm text-blue-600 mt-2">{status}</p>}
      </form>

      <div className="text-center mt-10">
        <button
          onClick={() => router.push('/')}
          className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-black transition"
        >
          ← Quay về trang chủ
        </button>
      </div>
    </main>
  );
}
