import React from 'react'
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import styles from '../../scss/NFTCard.module.scss'
import ButtonProps from '../Button/Buttons';
import { NFTCardProps } from '../../models/ProductModel';

const NFTCard: React.FC<NFTCardProps> = ({ data }) => {
    return (
        <div className={styles.NFTCard}>
            <div className={styles.container}>
                {data.products.map((product) => (
                    <div key={product.productId} className={styles.card}>
                        <div>
                            <img src={data.avartar} className={styles.avatar} alt={data.nameUser} />
                            <img src={product.image} alt={product.nameProduct} className={styles.imgProduct} />
                            <div className={styles.Infor}>
                                <div className={styles.Infor_Name}>
                                    <div className={styles.text}>{data.nameUser}</div>
                                    <MdVerified size={15} color='#0CAF60' />
                                </div>
                                <div className={styles.textName}>{product.nameProduct}</div>
                            </div>
                            <div className={styles.BottomCard}>
                                <div className={styles.Like}>
                                    <FaRegHeart size={20} color='#808195' />
                                </div>
                                <ButtonProps children={"Place Bid"} className={styles.Button} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default NFTCard;