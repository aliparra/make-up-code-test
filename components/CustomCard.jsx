import React from 'react';
import styles from '../styles/CustomCard.module.css'

const CustomCard = ({name,image_link,rating,price,price_sign}) => {
    return (

        <div className={`${styles.custom__card} border`}>
            <div className="text-center">
                <img src={image_link ? image_link : "https://via.placeholder.com/150" } alt="makeup logo"  height="150" className="mb-4"/>
                <h5><b>{name}</b></h5>
                <p>{rating ? `⭐ ${rating}` : " ⭐ No ratings yet" }</p>
                <h6>{price} {price_sign ? price_sign : "$"}</h6>
            </div>
        </div>
        
    );
};

export default CustomCard;