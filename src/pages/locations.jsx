import Image from "next/image"

const Locations = ({ results }) => {
  console.log(results.results_returned);
  console.log(results.shop[0].photo);


  return(
    <>
      <ul className="card">
        <div className="flex">
          {results.shop.map(shop => (
            <li key={shop.id}>
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
            </li>))}
        </div>
      </ul>
      
    
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
