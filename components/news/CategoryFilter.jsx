// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger,
//      SelectValue } from "../ui/select";
import { Select } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectGroup } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";

export default function CategoryFilter({ onCategoryChange }) {

    const categories = [" Pizza", "Vegetarian", "Chocolate", "Chicken", "Beef", "Pasta", "Seafood", "Salad", "Soup", "Dessert"];


    return (
        <div>
            <h3 className="text-xl font-bold">Category Filter:</h3>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem key="all" value="all" className="capitalize">
                            All Categories
                        </SelectItem>
                        {categories.map((category) => (
                            <SelectItem key={category} value={category} className="capitalize">
                                {category}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>


        </div>
    )
}

                   