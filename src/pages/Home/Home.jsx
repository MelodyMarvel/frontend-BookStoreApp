// import React from 'react'
import Loading from '../../components/Loader/Loader';
import { useGlobalContext } from '../../context';
import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import { useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';

function Home() {
  const { loading, fetchBooks } = useGlobalContext();

  useEffect(()=>{
    fetchBooks();
}, [fetchBooks])

  return (
    
    <div>
      <Header/>
      <Outlet/>

      {loading ? (
        <Loading />
      ) : (
        <SearchResult />
      )}    
      </div>
  )
}

export default Home