export default function UserDetails({ user }) {
  if (!user) return <p className="md:w-2/3">Chọn người dùng để xem chi tiết</p>;

  return (
    <div className="md:w-2/3">
      <h2 className="text-xl font-bold mb-2">Chi tiết</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Điện thoại:</strong> {user.phone}</p>
      <p><strong>Địa chỉ:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
}