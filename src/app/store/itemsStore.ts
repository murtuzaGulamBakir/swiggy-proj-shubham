import { create } from "zustand";
import { MenuItem } from "../shared/ItemCard/ItemCard";

type ItemsStore = {
    items: MenuItem[];
    filteredItems: MenuItem[];
    setFilteredItems: (items: MenuItem[]) => void;
    cartItems: MenuItem[];
    setCartItems: (items: MenuItem[]) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

export const useMenuItemsStore = create<ItemsStore>((set) => ({
    items: [
        {
            id: 1,
            name: "Item 1",
            description: "Item 1 nice description",
            price: 200,
            category: "Veg",
            imageUrl:
                "https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
        },
        {
            id: 2,
            name: "Item 2",
            description: "Item 2 nice description",
            price: 300,
            category: "Non-Veg",
            imageUrl:
                "https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
        },
        {
            id: 3,
            name: "Item 3",
            description: "Item 3 nice description",
            price: 400,
            category: "Veg",
            imageUrl:
                "https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
        },
        {
            id: 4,
            name: "Item 4",
            description: "Item 4 nice description",
            price: 500,
            category: "Dessert",
            imageUrl:
                "https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg",
        },
    ],
    filteredItems: [],
    cartItems: [],
    setCartItems: (items) => set({ cartItems: items }),
    setFilteredItems: (items) => set({ filteredItems: items }),
    selectedCategory: "All",
    setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
