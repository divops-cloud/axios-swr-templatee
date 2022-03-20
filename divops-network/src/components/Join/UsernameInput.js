const UsernameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      // className="bg-gray-900 border border-gray-700 rounded p-2 w-full text-center"
      className="flex flex-grow bg-black border border-gray-700 rounded p-2 w-full text-center focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-500 hover:text-white cursor-pointer focus:text-white"
      placeholder="Divops"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default UsernameInput;