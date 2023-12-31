import React,{useState} from 'react'
import "./search.css"
import {useNavigate} from 'react-router-dom';
import Metadata from '../layout/Metadata';

const Search = () => {
    const [keyword,setKeyword] = useState("");
    const navigate = useNavigate();
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
        if(keyword.trim()){
             navigate(`/products/${keyword}`);
        }
        else{
            navigate("/products")
        }
    }
  return (
    <>
    <Metadata title="SEARCH A PRODUCT -- ECOMMERCE"/>
    <form className = "searchBox" onSubmit={searchSubmitHandler}>
        <input type="text" placeholder='Search a product...' onChange={(e)=>setKeyword(e.target.value)}/>
        <input type="submit" value="Search" />
        </form>
    </>
  )
}

export default Search