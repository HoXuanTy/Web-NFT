import React, { useState, useEffect } from 'react'
import SearchSort from '../../component/SearchSort/SearchSort'
import { FaArrowRight } from "react-icons/fa";
import styles from '../../scss/Home.module.scss'
import Creators from '../../component/Creators/Creators';
import NFTCard from '../../component/NFT/NFTCard';
import userApi from '../../api/userApi';
import { UserModel } from '../../models/UserModel';

function Home() {

  const [apiData, setApiData] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    try {
      userApi.getCreator()
      .then((data) => setApiData(data))
      .catch(error => console.error('Có lỗi xảy ra khi lấy danh sách sản phẩm: ', error));
    } catch (error) {
      setError(`Xảy ra lỗi: ${error}`)
    }finally{
      setLoading(false)
    }
   
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (apiData.length ===0){
    return <p>Không có sản phẩm</p>
  }

  return (
    <div className={styles.container}>
      <SearchSort />
      <div className={styles.section}>
        <span>Featured Creators</span>
        <div className={styles.viewAll}>
          <span>View All Greator</span>
          <FaArrowRight size={14} />
        </div>
      </div>

      <div className={styles.creatorCard}>
        <Creators />
        <Creators />
        <Creators />
      </div>
      <div className={styles.section}>
        <span>Featured Artwork</span>
        <div className={styles.viewAll}>
          <span>View All Greator</span>
          <FaArrowRight size={14} />
        </div>
      </div>
        <div>
          {apiData.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>


    </div>
  )
}

export default Home