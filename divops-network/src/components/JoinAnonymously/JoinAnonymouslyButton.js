const JoinAnonymouslyButton = ({ joinAnonymously }) => {
  return (
    <button
      onClick={joinAnonymously}
      className="flex flex-grow rounded p-2 w-full semibold text-lg text-gray-300 ring:text-indigo-100 text-center justify-center bg-purple-800 focus:ring focus:ring-2 focus:ring-indigo-100 cursor-pointer"
    >
      Coming Soon
    </button>
  );
};

export default JoinAnonymouslyButton;