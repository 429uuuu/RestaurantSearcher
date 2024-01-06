const shop = (shopDetails) => {

  console.log(shopDetails.results.shop);
  return (
    <>
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