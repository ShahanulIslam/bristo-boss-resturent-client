import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title="Our menu"></Cover>
            <SectionTitle
                subHeading="Don't Miss"
                heading="Todays Offer"
            ></SectionTitle>

            {/* Offered Section */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Section */}
            <MenuCategory items={desserts} title="desert"  img={dessertImg}></MenuCategory>
            {/* Pizzas Section */}
            <MenuCategory items={pizzas} title="pizza"  img={pizzaImg}></MenuCategory>
            {/* Salads Section */}
            <MenuCategory items={salads} title="salad"  img={saladImg}></MenuCategory>
            {/* Soups Section */}
            <MenuCategory items={soups} title="soup"  img={soupImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;