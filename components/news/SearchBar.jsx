"use client"

import { Input } from "@/components/ui/input"



export default function SearchBar({onSearch}) {
  return (
    <div className="md:w-2/4">
        <Input
        type="text"
        className="w-full rounded-md border border-gray-500 px-4 py-2"
        placeholder="Search Recipes Here..."
        onChange={(e) => onSearch(e.target.value)} 
        />
    </div>
  )
}
