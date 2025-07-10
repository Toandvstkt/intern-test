export default function UserList({ users, onSelect }) {
  return (
    <div className="md:w-1/3">
      <h2 className="text-xl font-bold mb-2">Danh sách người dùng</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li
            key={user.id}
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => onSelect(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}