import React, { useState } from "react";
import "./MenuFilter.css";

export interface MenuFilterProps {
  filters?: string[];
  initialFilter?: string;
  onChange?: (category: string) => void;
  className?: string;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  filters = ["fresh juices", "smoothies", "protein smoothies", "smoothies +", "vegan smoothies"],
  initialFilter = "smoothies",
  onChange,
  className = "",
}) => {
  const [selected, setSelected] = useState<string>(initialFilter);

  const colors = ["#97c93d", "#ea3833", "#9f2a63", "#4b9dca", "#7ac143"];

  const handleClick = (category: string) => {
    setSelected(category);
    onChange?.(category);
  };

  return (
    <div className={`menu-filter ${className}`}>
      {filters.map((cat, index) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`filter-button ${selected === cat ? "selected" : ""}`}
          style={{ "--btn-color": colors[index % colors.length] } as React.CSSProperties}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
