import "./search.style.css";

export const Search = ({ placeholder, searchHandler }) => {
    return <input 
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={searchHandler} />
};