"use client";
import React, { useState, useEffect, useRef } from "react";

const SearchInput = ({ onSearch, placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const prevTermRef = useRef(""); // store last searched term

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms delay

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Trigger search only if term has at least 3 characters and changed
  useEffect(() => {
    if (debouncedTerm.length >= 3 && debouncedTerm !== prevTermRef.current) {
      onSearch?.(debouncedTerm);
      prevTermRef.current = debouncedTerm; // update last searched term
    }
  }, [debouncedTerm, onSearch]);

  return (
    <div className="flex justify-end relative">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="absolute top-[-60px] border border-white placeholder-white text-white p-2 mb-4 rounded w-full max-w-[300px]"
      />
    </div>
  );
};

export default SearchInput;
