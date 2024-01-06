const shop = (shopDetails) => {

  //shopリンク
  const shopLink = shopDetails.results.shop[0].urls.pc;
  //map情報
  const latitude = shopDetails.results.shop[0].lat;
  const longitude = shopDetails.results.shop[0].lng;
  const googleMapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;


  return (
    <>
      <p>{shopDetails.results.shop[0].name}</p> 
      <p>{shopDetails.results.shop[0].name_kana}</p>
      <p>{shopDetails.results.shop[0].address}</p>
      <p>{shopDetails.results.shop[0].open}</p> 
      <a href={shopLink} target="_blank" rel="noopener noreferrer">
        店舗ページ
      </a>
      <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
        Maps
      </a>
    </>
  );
}

export default shop;

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