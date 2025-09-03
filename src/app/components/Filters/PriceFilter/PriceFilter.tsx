"use client";
import React, { useState, useEffect } from "react";
import "./PriceFilter.css";
import { useMenuItemsStore } from "@/app/store/itemsStore";

const PriceFilter: React.FC = () => {
    const { items, setFilteredItems } = useMenuItemsStore();
    const [minPrice, setMinPrice] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");

    useEffect(() => {
        let filtered = items;

        if (minPrice !== "" && maxPrice !== "") {
            filtered = items.filter(
                (item) => item.price >= minPrice && item.price <= maxPrice
            );
        } else if (minPrice !== "") {
            filtered = items.filter((item) => item.price >= minPrice);
        } else if (maxPrice !== "") {
            filtered = items.filter((item) => item.price <= maxPrice);
        }

        setFilteredItems(filtered);
    }, [minPrice, maxPrice, items, setFilteredItems]);

    return (
        <div className="price-filter-container">
            <input
                type="number"
                className="price-input"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) =>
                    setMinPrice(e.target.value ? parseInt(e.target.value) : "")
                }
            />
            <span className="price-separator">-</span>
            <input
                type="number"
                className="price-input"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) =>
                    setMaxPrice(e.target.value ? parseInt(e.target.value) : "")
                }
            />
        </div>
    );
};

export default PriceFilter;
