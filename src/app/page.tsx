import CategoryFilter from "./components/Filters/CategoryFilter/CategoryFilter";
import InputFilter from "./components/Filters/InputFilter/InputFilters";
import PriceFilter from "./components/Filters/PriceFilter/PriceFilter";
import PriceSort from "./components/Filters/SortByPrice/SortByPrice";
import MenuItems from "./components/MenuItems/MenuItems";

export default function Home() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                    alignItems: "center",
                    padding: "3px 10px",
                    border: "1px solid white",
                    borderRadius: "8px",
                }}
            >
                <InputFilter />
                <CategoryFilter />
                <PriceFilter />
                <PriceSort />
            </div>
            <MenuItems />
        </>
    );
}
