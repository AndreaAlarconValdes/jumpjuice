import { useState } from "react";
import { MenuFilter } from "../components/MenuFilter";
import "./Menu.css";
import { menuArray } from "../data/constants";
import Modal from "../components/Modal";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("smoothies");



  const filteredItems =
    filter === "smoothies"
      ? menuArray
      : menuArray.filter((item) => item.category === filter);
  return (
    <div className="complete-menu">
      <MenuFilter
        filters={[
          "fresh juices",
          "smoothies",
          "protein smoothies",
          "smoothies +",
          "vegan smoothies",
        ]}
        initialFilter="smoothies"
        onChange={(category) => setFilter(category)}
      />
      <div className="section menu-section">
        {filteredItems.map((item) => (
          <button onClick={() => setIsOpen(true)} className="menu-modal-btn">
            <div className="menu-card">
              <div className="image-container"
              style={{
                backgroundColor: item.color
              }}>
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="smoothie-img"
                />
              </div>
              <h3>{item.title}</h3>
            </div>
          </button>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl="./berry-blitz-modal.png"
        title="BERRY BLITZ"
        description="Berry Blitz is a vibrant, refreshing smoothie that blends the tangy sweetness of orange juice with a medley of mixed berries, the creamy richness of banana, and the cool smoothness of natural frozen yogurt. Served over ice, it’s the perfect balance of fruity, creamy, and invigorating — a burst of flavor in every sip."
      />
    </div>
  );
};

export default Menu;
