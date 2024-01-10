/* /pages/location.jsx

  :一覧表示画面

*/

import { useState, useEffect } from "react";
import Image from "next/image"
import Link from 'next/link'
import ReactPaginate from 'react-paginate';
import {Container, Row, Col, Alert } from 'react-bootstrap';


const Locations = ({ results, latitude, longitude  }) => {

  /* ページング用 */
  const [itemStart, setItemStart] = useState(0);  //アイテムの表示開始位置
  const [perPage, setPerPage] = useState(10); //1ページあたりの表示件数
  const handlePageClick = (data) => { //ページ選択時の動作
    let pageNumber = data['selected']; 
    setItemStart(pageNumber * perPage)
  }
  /* 距離算出用 */
  const R = Math.PI / 180;


  return(
    <>
      <Container>
        <div className="card my-3" >

          <div className="card-header">
            <p className="mb-0">検索結果：{results.results_returned}件</p>
          </div>

          <ul className="list-group list-group-flush">  
              {results.shop.slice(itemStart, itemStart+perPage).map(shop => (
                  <li key={shop.id} className="list-group-item">
                    
                    <Link href={`./EachShop/${shop.id}`} className="link-dark link-underline link-underline-opacity-0">
                    <Row>
                    <Col md={3} className="display-block" style={{ display:"flex", alignItems: "center"}}>
                      <Image 
                        className="photo" 
                        src={shop.photo.pc.l} 
                        alt={"image"} 
                        layout={"responsive"}

                        width={100}
                        height={100}

                      />  
                      </Col>
                      <Col>
                        <h3 className="shop my-3">{shop.name}</h3>
                        <p className="card-subtitle mb-2 text-body-secondary">{shop.genre.name}　{shop.genre.catch} </p>
                        <p className="access"><b>アクセス：</b>{shop.access}</p>  
                        <p className="open"><b>営業時間：</b>{shop.open}</p>
                        {/* 直線距離 */}
                        <p><b>直線距離：</b>{Math.round(10 * (6371 * Math.acos(Math.cos(latitude*R) * Math.cos(shop.lat*R) * Math.cos(shop.lng*R - longitude*R) + Math.sin(latitude*R) * Math.sin(shop.lat*R))))/10}km</p>
                      </Col>
                    </Row>
                    </Link>
                    
                  </li>
              
              ))}
          </ul>
        </div>

        {/* ページネーション */}
        <ReactPaginate
          pageCount={results.results_returned/perPage} // 全体のページ数
          pageRangeDisplayed={3} // 表示するページ番号の範囲
          marginPagesDisplayed={1} // 左右の余白に表示するページ番号の数
          onPageChange={handlePageClick}
          previousLabel='<' 
          nextLabel='>' 
          breakLabel='...' 
          containerClassName='pagination justify-content-center'
          pageClassName='page-item page-item-color'
          pageLinkClassName='page-link page-item-color'
          activeClassName='active'
          previousClassName='page-item'
          nextClassName='page-item page-item-color'
          previousLinkClassName='page-link page-item-color'  
          nextLinkClassName='page-link page-item-color'
          breakClassName='page-item page-item-color' 
          breakLinkClassName='page-link page-item-color' 
        />
        
      </Container>  
    </>
  );

};

export default Locations;

//グルメサーチapiからデータの取得
export const getServerSideProps = async(context) =>{

  const apiKey = process.env.NEXT_PUBLIC_GURUMESEARCH_API_KEY;
  const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const latitude = context.query.latitude;
  const longitude = context.query.longitude;
  const range = context.query.range;
  const count = 100;  //最大出力データ数
  const format = "json"; // フォーマットJSON

  // 外部APIからデータをFetch
  try{
    const res = await fetch(
      `${baseUrl}?key=${apiKey}&lat=${latitude}&lng=${longitude}&range=${range}&format=${format}&count=${count}` //緯度・軽度・範囲から検索
 
    );
    const json = await res.json();
    const { results } = json;

    return { props: { 
      results,
      latitude,
      longitude } };
  }catch(e){
    console.error(e);
    return context.status(400).json({message: "データの取得に失敗しました"})
    
  }
}
