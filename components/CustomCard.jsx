import React from 'react';
import styles from '../styles/CustomCard.module.css'

const CustomCard = ({name,image_link,rating,price,price_sign}) => {
    return (

        <div className={`${styles.custom__card} border`}>
            <img src={image_link ? image_link : "https://via.placeholder.com/150" } alt="makeup logo"  height="150"/>
            <p>{name}</p>
            <p>{rating ? `⭐ ${rating}` : "No ratings yet" }</p>
            <p>{price} {price_sign ? price_sign : "$"}</p>
        </div>
        
    );
};

export default CustomCard;