import React, { useState } from "react";

const Search = ({ data }) => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState(data);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredResults = data.filter((item) => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 mb-5 rounded-xl shadow-sm shadow-secondary focus:outline-none"
            />
            <ul className="space-y-2">
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;