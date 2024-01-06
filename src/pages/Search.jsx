/* pages/Serch.jsx

検索画面 

*/

import { useState } from "react"
import { useRouter } from "next/router";


const Search = () => {

  const [range, setRange] = useState(1);  //検索範囲
  const [people, setPeople] = useState(""); //人数
  const [keyword, setKeyword] = useState(""); //検索キーワード

  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(range);

    // 位置情報の取得
    if (!navigator.geolocation) {
      alert("このブラウザーは位置情報に対応していません");
    } else {
      console.log("位置情報を取得中…");
      navigator.geolocation.getCurrentPosition(success, error);
    }

  };

  const success = (position) => {
    //console.log(position.coords.latitude);
    //console.log(position.coords.longitude);

    router.push({
      pathname:"/locations",   //URL
      query: {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude,
        range : range,
      } //検索クエリ
    });

  }

  const error = () => {
    console.log("Unable to retrieve your location");
    alert("位置情報が取得できませんでした");
  }


  return (
    <>
      <h1>近くの飲食店を検索</h1>
      <form onSubmit={handleSubmit}>

        <select value={range} onChange={(e) => setRange(e.target.value)} type="int" name="range" placeholder="範囲" >

          <option value="1">300m</option>
          <option value="2">500m</option>
          <option value="3">1km</option>
          <option value="4">2km</option>
          <option value="5">3km</option>
        </select>
        <br />
        <select value={people} onChange={(e) => setPeople(e.target.value)} type="int" name="people">
          <option value="">人数</option>
          <option value="1">1人</option>
          <option value="2">2人</option>
          <option value="3">3人</option>
          <option value="4">4人</option>
          <option value="5">5人</option>
          <option value="6">6人</option>
        </select>
        <br />
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" name="keyword" placeholder="キーワード" />
        <br />
        <button>検索</button><br />
      </form>
    </>
  );
}

export default Search;