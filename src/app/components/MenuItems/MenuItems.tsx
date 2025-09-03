"use client";
import MenuItem, {
    MenuItem as MenuItemType,
} from "@/app/shared/ItemCard/ItemCard";
import React from "react";
import "./MenuItems.css";
import { useMenuItemsStore } from "@/app/store/itemsStore";

const MenuItems = () => {
    const { filteredItems } = useMenuItemsStore();
    return (
        <>
            {filteredItems.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    No items found.
                </p>
            )}
            <div className="menu_items_container">
                {filteredItems.map((item) => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default MenuItems;
