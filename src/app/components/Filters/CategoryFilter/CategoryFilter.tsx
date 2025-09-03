"use client";
import React, { useEffect } from "react";
import { useMenuItemsStore } from "@/app/store/itemsStore";
import "./CategoryFilter.css";

const CategoryFilter: React.FC = () => {
    const { items, selectedCategory, setSelectedCategory, setFilteredItems } =
        useMenuItemsStore();

    useEffect(() => {
        let filtered = items;

        if (selectedCategory !== "All") {
            filtered = items.filter(
                (item) => item.category === selectedCategory
            );
        }

        setFilteredItems(filtered);
    }, [selectedCategory, items, setFilteredItems]);

    return (
        <div className="category-filter-container">
            <select
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
};

export default CategoryFilter;
