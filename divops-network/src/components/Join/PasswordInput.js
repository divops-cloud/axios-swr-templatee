const PasswordInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      className="flex flex-grow bg-black border border-gray-700 rounded p-2 w-full text-center focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-500 hover:text-white cursor-pointer focus:text-white"
      placeholder="A vision without action is merely a dream..."
      value={name}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};

export default PasswordInput;