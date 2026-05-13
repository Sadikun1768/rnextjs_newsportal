"use client"

import { useState, useEffect } from "react";

export default function NewsList() {
  
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState();
    

    useEffect(() => {

    }, [])
    
  return (
    <div>
        <h3>News List</h3>


    </div>
  )
}
