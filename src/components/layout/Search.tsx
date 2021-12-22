import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { filterData } from "../../serveies/filterData";
interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const [filters] = useState(filterData);
  return (
    <div>
      {filters?.map((filter) => (
        <div key={filter.queryName}>
          <Select
            variant="outline"
            onChange={(e: any) => console.log(e.target.value)}
            placeholder={filter.placeholder}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
};
