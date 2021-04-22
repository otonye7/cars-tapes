import { SearchContainer } from './search.styles';
import SearchIcon from '@material-ui/icons/Search';



const Search = () => {
    return (
        <SearchContainer>
        <form className='container'>
        <input className='forms' type="text" placeholder="I am looking for..." />
        <SearchIcon className='search'/>
       </form>
        </SearchContainer>
    )
}

export default Search;