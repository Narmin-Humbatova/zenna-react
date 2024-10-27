import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Search.css'

const Search:React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Axtarış üçün lazım olan funksiyanı burda çağırın
    console.log('Axtarış sorğusu:', searchQuery);
    // Burada API-yə və ya filtr funksiyasına sorğu göndərilə bilər
  };

  return (
    <div className='search-for text-center py-5'>
      <input
      className='search-input'
        type="text"
        placeholder="SEARCH FOR"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}><FaSearch /></button>
    </div>
  );
};


export default Search