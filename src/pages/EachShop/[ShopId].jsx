import Image from "next/image"
import { FaHome } from "react-icons/fa";
import { ImEarth } from "react-icons/im";

const shop = (shopDetails) => {

  //shopリンク
  const shopLink = shopDetails.results.shop[0].urls.pc;
  //map情報
  const latitude = shopDetails.results.shop[0].lat;
  const longitude = shopDetails.results.shop[0].lng;
  const googleMapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <>
      <div className="card my-3">
        <div className="card-body">
          <h2 className="card-title">{shopDetails.results.shop[0].name}</h2> 
          <h5 className="card-subtitle mb-2 text-body-secondary">{shopDetails.results.shop[0].name_kana}</h5>
          <br />
          <p>{shopDetails.results.shop[0].address}</p>
          <p>{shopDetails.results.shop[0].open}</p> 
          <a href={shopLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary me-3">
            <FaHome />店舗ページ
          </a>
          <a href={googleMapLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <ImEarth />マップ
          </a>
        </div>
      </div>
      <div className="mb-3" style={{ position: "relative", maxWidth: "100%", height: "200px" }}>
      <Image 
        className="photo" 
        src={shopDetails.results.shop[0].photo.pc.l} 
        alt={"image"} 
        layout={"fill"}
        objectFit={"contain"}
        // sizes="(max-width: 768px) 50vw"
        // width={100}
        // height={100}

      />  
      </div>
    </>
  );
}

export default shop;

//グルメサーチapiからデータの取得
export const getServerSideProps = async(context) =>{

  const apiKey = process.env.NEXT_PUBLIC_GURUMESEARCH_API_KEY;
  const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const shopId = context.query.ShopId;
  const format = "json"; // フォーマットJSONを指定

  // 外部APIからデータをFetch
  try{
    const res = await fetch(
      `${baseUrl}?key=${apiKey}&id=${shopId}&format=${format}`  //店舗idを指定
    );
    const json = await res.json();
    const { results } = json;

    return { props: { results } };
  }catch(e){
    console.error(e);
  }
}