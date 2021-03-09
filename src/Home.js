import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            {/* product---> prod id,title,price,rating, image */}
            <div className="home_row">
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdERuNbjpKTm-TLA8CNUzaYiaVyjXtroHlWIE2G5QS8H_y9hnm920L9SlqiDAMkYQobW6vsiEb&usqp=CAc"
                price={250}
                rating={3}
                />
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVZ7dwtnxhHWqQ68tjM3Tl_wnTIOP4wuJtiCnRQVlXSjMsYNt6oGrmpKmBEqh5jxflpzS7IEO&usqp=CAc"
                price={250}
                rating={3}
                />
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1sd214v9ldYXbqT4BhTKaS6DicLyZVjLAZRLOe1gF3UqINBcw_EB9wyhmcfyDr8fVA5EcnGT0Q&usqp=CAc"
                price={250}
                rating={3}
                />
            </div>
            <div className="home_row">
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiISKzHiw5n-Pr0C-6tUZif0rGaj6Lay-GkeuqrGETJH2hmcM7QuE9fwdoh2tmE5altwdm9Krqfw&usqp=CAc"
                price={250}
                rating={3}
                />
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F9zbqk2C1wrLUvXWXefWhXno6DvXVwJ1dCVCubsxGtjtivWn7HMKNW93aFZcdKNCS5eZpXRe&usqp=CAc"
                price={250}
                rating={3}
                />
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO432_tQZ8u6-uBE8EkqyqSAVWjIiEzsW1NQ&usqp=CAU"
                price={250}
                rating={3}
                />
                <Product
                id="101"
                title="T-shirts are just a staple of casual wear"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdERuNbjpKTm-TLA8CNUzaYiaVyjXtroHlWIE2G5QS8H_y9hnm920L9SlqiDAMkYQobW6vsiEb&usqp=CAc"
                price={250}
                rating={3}
                />
                
            </div>
            
        </div>
    );
};

export default Home;