import { useState } from "react";
import Image from "next/image"
import Link from 'next/link'
import ReactPaginate from 'react-paginate';

const Locations = ({ results }) => {
  console.log(results.results_returned);
  // console.log(results.shop[1].id);

  /* ページング用 */
  const [itemStart, setItemStart] = useState(0);  //アイテムの表示開始位置
  const [perPage, setPerPage] = useState(10); //1ページあたりの表示件数
  const handlePageClick = (data) => { //ページ選択時の動作
    let pageNumber = data['selected']; 
    setItemStart(pageNumber * perPage)
  }



  return(
    <>
      <ul className="card">
        <div className="flex"> 
          {results.shop.slice(itemStart, itemStart+perPage).map(shop => (
              <li key={shop.id}>
                <Link href={`./EachShop/${shop.id}`}>
                  <p className="shop">{shop.name}</p>
                  <p className="access">{shop.access}</p>  
                  <p className="open">{shop.open}</p>
                  {/* <Image 
                    className="photo" 
                    src={shop.photo.pc.m} 
                    alt={"image"} 
                    layout={"fill"}
                    objectFit={"cover"}
                  /> */}
                </Link>
              </li>
            ))}
        </div> 
      </ul>

      <ReactPaginate
        pageCount={results.results_returned/perPage} // 全体のページ数
        pageRangeDisplayed={3} // 表示するページ番号の範囲
        marginPagesDisplayed={1} // 左右の余白に表示するページ番号の数
        onPageChange={handlePageClick}
        previousLabel='<' 
        nextLabel='>' 
        breakLabel='...' 
      />
      
    
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
  const format = "json"; // フォーマットJSONを指定

  // 外部APIからデータをFetch
  try{
    const res = await fetch(
      `${baseUrl}?key=${apiKey}&lat=${latitude}&lng=${longitude}&range=${range}&format=${format}`
    );
    const json = await res.json();
    const { results } = json;

    return { props: { results } };
  }catch(e){
    console.error(e);
  }
}
