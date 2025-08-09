import { useState } from "react";
import { MenuFilter } from "../components/MenuFilter"
import "./Menu.css"
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
        <>
            <header className="menu-header">
                <h1>Our smoothies are the best</h1>
                <p>Fruit smoothies can be an easy way to nourish your body with essential nutrients.</p>
            </header>
            <div className="complete-menu">
                <MenuFilter
                    filters={["fresh juices", "smoothies", "protein smoothies", "smoothies +", "vegan smoothies", "bowls"]}
                    initialFilter="smoothies"
                    onChange={(category) => setFilter(category)}
                />
                <div className="section menu-section">
                    {filteredItems.map((item) => (
                        <button onClick={() => setIsOpen(true)} className="menu-modal-btn">
                            <div className="menu-card">
                                <div className="smoothie-container">
                                    <svg data-v-ea5e7d="" className="product__bottle-circle" xmlns="http://www.w3.org/2000/svg" width="298" height="298" viewBox="0 0 298 298"><path data-v-ea5e7d="" d="M279,73.12c-11.9-20.44-31.5-38.9-56.7-53.39A150.42,150.42,0,0,0,147.42,0C119,0,92.9,6.4,71.83,18.52,48.39,32,28.51,51.39,15.83,73.12,1.8,97.27,0,126.16,0,148.63c0,31.89,5.25,55.75,16.52,75.12,11.76,20.2,30.8,38,56.59,52.79C97.87,290.78,122.86,298,147.42,298c29.64,0,54.8-12.29,73.41-23,22.24-12.78,44.66-27.79,58.12-50.9C291.41,202.69,298,176.59,298,148.63s-6.58-54.15-19-75.51" transform="translate(0 0)" style={{ fill: item.color }}></path></svg>
                                    <img src={item.imageSrc} alt={item.title} className="smoothie-img" />
                                    <img src={item.imageSrcFruit} alt={item.title} className="fruit-img" />
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
        </>
    )
}

export default Menu