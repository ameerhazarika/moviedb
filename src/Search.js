import React, {useState} from 'react';
//import { tsPropertySignature } from '@babel/types';


const Search = (props)=>{


          const [searchValue,setSearchValue] = useState("");


          const handleInputChange = (e)=>{

            setSearchValue(e.target.value);
          }

          const resetInputFields =() =>{


            setSearchValue("");

          }

          const callSearch = (e)=>{

            e.preventDefault();
            props.search(searchValue);


          }


          return(


                <form className="search">


                  <input value={searchValue} onChange={handleInputChange} type='text'></input>
                  <input onClick={(e)=>{callSearch();resetInputFields();}} type="Submit" value="SEARCH"></input>



                </form>


          )





}

export default Search;