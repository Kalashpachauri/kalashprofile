import React, { useState } from 'react';

function DropdownSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="searchable-dropdown">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                list="options-list"
            />
            <datalist id="options-list" className="">
                <option value="Apple" />
                <option value="Banana" />
                <option value="Cherry" />
                <option value="Date" />
                <option value="Grape" />
                <option value="Kiwi" />
                <option value="Mango" />
                <option value="Orange" />
                <option value="Pear" />
                <option value="Anar" />
            </datalist>
        </div>
    );
}

export default DropdownSearch;