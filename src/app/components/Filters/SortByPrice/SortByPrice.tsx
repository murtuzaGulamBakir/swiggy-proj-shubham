"use client";
import React, { useState, useEffect } from "react";
import "./PriceSort.css";
import { useMenuItemsStore } from "@/app/store/itemsStore";

type SortOrder = "default" | "asc" | "desc";

const PriceSort: React.FC = () => {
    const { items, filteredItems, setFilteredItems } = useMenuItemsStore();
    const [sortOrder, setSortOrder] = useState<SortOrder>("default");

    const toggleSort = () => {
        if (sortOrder === "default") setSortOrder("asc");
        else if (sortOrder === "asc") setSortOrder("desc");
        else setSortOrder("default");
    };

    useEffect(() => {
        if (sortOrder === "default") {
            setFilteredItems(items);
            return;
        }

        const sortedItems = [...filteredItems].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

        setFilteredItems(sortedItems);
    }, [sortOrder, items]);

    const getIcon = () => {
        switch (sortOrder) {
            case "asc":
                return "↑";
            case "desc":
                return "↓";
            default:
                return "⇅";
        }
    };

    return (
        <button className="sort-button" onClick={toggleSort}>
            Sort by Price {getIcon()}
        </button>
    );
};

export default PriceSort;
