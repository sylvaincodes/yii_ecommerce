import React from "react";

const Input = ({ btn }: { btn: string }) => {
  return (
    <div className="w-3/6 relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
      <input
        className="block w-full px-4 py-4 text-gray-900 
        placeholder-gray-900 
        bg-transparent border border-gray-400 outline-none focus:border-0 
        rounded-xl sm:border-none sm-focus:ring-0 
        sm:focus:border-transparent bg-gray-50"
        type="text"
        name=""
      />
      <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
        <button
          type="submit"
          className="inline-flex px-6 py-3 text-lg font-bold 
          text-white capitalize transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Input;
