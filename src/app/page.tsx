import CategoryFilter from "./components/Filters/CategoryFilter/CategoryFilter";
import InputFilter from "./components/Filters/InputFilter/InputFilters";
import PriceFilter from "./components/Filters/PriceFilter/PriceFilter";
import MenuItems from "./components/MenuItems/MenuItems";

export default function Home() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "flex-start",
                }}
            >
                <InputFilter />
                <CategoryFilter />
                <PriceFilter />
            </div>
            <MenuItems />
        </>
    );
}
