import React, { useState } from 'react';
import orderBg from "../../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drink"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabindex] = useState(initialIndex);

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className='my-5'>
            <Helmet>
                <title>Bistro Boos | Order Food</title>
            </Helmet>
            <Cover img={orderBg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel><OrderTab items={salads}></OrderTab> </TabPanel>
                <TabPanel><OrderTab items={pizzas}></OrderTab> </TabPanel>
                <TabPanel><OrderTab items={soups}></OrderTab> </TabPanel>
                <TabPanel><OrderTab items={desserts}></OrderTab> </TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab> </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;