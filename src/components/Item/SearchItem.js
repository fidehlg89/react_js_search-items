import React from "react";

const Search = ({ query, onChange, onSearch, onReset }) => {
  return (
    <div className="max-w-md w-full flex space-x-4">
      <div className="group relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none
      text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Filter projects"
          placeholder="Search items..."
          onChange={onChange}
          name="query"
          value={query}
        />
      </div>

      <button
        className="bg-gray-600 border border-transparent rounded-md py-2 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={onReset}
      >
        Reset
      </button>
      <button
        className="bg-indigo-600 border border-transparent rounded-md py-2 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
