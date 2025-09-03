"use client";
import React from "react";
import "./ItemCard.css";
import { useMenuItemsStore } from "@/app/store/itemsStore";

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity?: number;
    category: string;
}

const ItemCard: React.FC<MenuItem> = ({
    id,
    name,
    price,
    description,
    imageUrl,
    category,
}) => {
    const { cartItems, setCartItems } = useMenuItemsStore();

    const existingItem = cartItems.find((item) => item.id === id);
    const quantity = existingItem?.quantity || 0;

    const handleAdd = () => {
        if (existingItem) {
            const updatedCart = cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: (item.quantity || 0) + 1 }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([
                ...cartItems,
                {
                    id,
                    name,
                    description,
                    price,
                    imageUrl,
                    category,
                    quantity: 1,
                },
            ]);
        }
    };

    const handleRemove = () => {
        if (!existingItem) return;

        if (quantity > 1) {
            const updatedCart = cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity! - 1 }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems(cartItems.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="menu_card_container">
            <div className="menu_image">
                <img src={imageUrl} alt="Item image" />
            </div>
            <div className="menu_content">
                <h2 className="item_name">{name}</h2>
                <p className="item_description">{description}</p>
                <p className="menu_price">₹{price}</p>

                {quantity === 0 ? (
                    <button className="add_to_cart_btn" onClick={handleAdd}>
                        Add to Cart
                    </button>
                ) : (
                    <div className="cart-controls">
                        <button className="minus-btn" onClick={handleRemove}>
                            −
                        </button>
                        <span className="cart-quantity">{quantity}</span>
                        <button className="plus-btn" onClick={handleAdd}>
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemCard;
