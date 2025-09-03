"use client";
import React, { useState, useEffect } from "react";
import "./InputFilter.css";
import { useMenuItemsStore } from "@/app/store/itemsStore";

const InputFilter: React.FC = () => {
    const { items, setFilteredItems } = useMenuItemsStore();
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            setFilteredItems(items);
            return;
        }

        const lowerQuery = debouncedQuery.toLowerCase();

        const filtered = items.filter((item) => {
            const nameMatch = item.name.toLowerCase().includes(lowerQuery);
            const descMatch = item.description
                .toLowerCase()
                .includes(lowerQuery);
            const categoryMatch = item.category
                .toLowerCase()
                .includes(lowerQuery);
            const priceMatch = item.price.toString().includes(lowerQuery);

            return nameMatch || descMatch || categoryMatch || priceMatch;
        });

        setFilteredItems(filtered);
    }, [debouncedQuery, items, setFilteredItems]);

    return (
        <div className="filter-container">
            <input
                type="text"
                className="filter-input"
                placeholder="Search by name, description, category, or price..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default InputFilter;
