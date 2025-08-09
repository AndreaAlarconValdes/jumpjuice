import React, { useState } from "react";
import "./MenuFilter.css";

export interface MenuFilterProps {
  filters?: string[];
  initialFilter?: string;
  onChange?: (category: string) => void;
  className?: string;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  filters = ["fresh juices", "smoothies", "protein smoothies", "smoothies +", "vegan smoothies", "bowls"],
  initialFilter = "smoothies",
  onChange,
  className = "",
}) => {
  const [selected, setSelected] = useState<string>(initialFilter);

  const handleClick = (category: string) => {
    setSelected(category);
    onChange?.(category);
  };

  return (
    <div className={`menu-filter ${className}`}>
      {filters.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`filter-button ${selected === cat ? "selected" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
