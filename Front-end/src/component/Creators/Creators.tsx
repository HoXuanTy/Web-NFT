import React, { useState, useEffect } from 'react'
import { MdVerified } from "react-icons/md";
import styles from '../../scss/Creators.module.scss'
import { UserModel } from '../../models/UserModel';

import userApi from '../../api/userApi';
const Creators = () => {
    const [Creator, setCreator] = useState<UserModel[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        userApi.getCreator()
            .then((data) => setCreator(data))
            .catch(error => console.error('Có lỗi xảy ra khi lấy danh sách sản phẩm: ', error));
    };

    return (
        <div>
            {Creator.map((creator) => (
                <div key={creator.id} className={styles.container}>
                    <div className={styles.imageNFT}>
                        <img src={creator.products[0].image} alt="" />
                        <img src={creator.products[1].image} alt="" />
                        <img src={creator.products[2].image} alt="" />
                    </div>
                    <img src={creator.avartar} className={styles.avatar} />
                    <div className={styles.sectionInf}>
                        <div className={styles.Infor}>
                            <div className={styles.Infor_Name}>
                                <div className={styles.text}>{creator.nameUser}</div>
                                <MdVerified size={15} color='#0CAF60' />
                            </div>
                            <div className={styles.Infor_price}>
                                {creator.products && creator.products.length > 0 ? (
                                    `${creator.products[0]?.price || 'Price not available'} ETH`
                                ) : (
                                    'No products available'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Creators