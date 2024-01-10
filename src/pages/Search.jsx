/* pages/Serch.jsx

検索画面 

*/

import { useState } from "react"
import { useRouter } from "next/router";
import {Form, Button } from 'react-bootstrap';
import {Container, Row, Col } from 'react-bootstrap';
import { MdGpsFixed } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";




const Search = () => {

  const [range, setRange] = useState(1);  //検索範囲
  const [people, setPeople] = useState(""); //人数
  const [keyword, setKeyword] = useState(""); //検索キーワード
  const [loading, setLoading] = useState(""); //ladingtext

  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(range);

    // 位置情報の取得
    if (!navigator.geolocation) {
      alert("このブラウザーは位置情報に対応していません");
    } else {
      console.log("位置情報を取得中…");
      setLoading("位置情報を取得中... ")
      navigator.geolocation.getCurrentPosition(success, error);
    }

  };

  const success = (position) => {
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
    <Container>
      <Row>
        <h1 className="text-center">近くの飲食店を検索</h1>
      </Row>
      
      <Form onSubmit={handleSubmit}>

        <Row>
        <Col className="justify-content-center"> 
          <Form.Group className="input-group px-0" >
            <span className="input-group-text" id="basic-addon1"><MdGpsFixed />　検索範囲</span>

            <Form.Select value={range} onChange={(e) => setRange(e.target.value)} type="int" name="range" placeholder="範囲" >
              <option value="1">300m</option>
              <option value="2">500m</option>
              <option value="3">1km</option>
              <option value="4">2km</option>
              <option value="5">3km</option>
            </Form.Select>
          </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* <Col className="px-0">
            <Form.Group className="input-group">
              <span className="input-group-text" id="basic-addon1">@</span>

              <Form.Select value={people} onChange={(e) => setPeople(e.target.value)} type="int" name="people">
                <option value="">人数</option>
                <option value="1">1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4">4人</option>
                <option value="5">5人</option>
                <option value="6">6人</option>
              </Form.Select>
            </Form.Group>
          </Col>*/}
          <Col className="justify-content-center"> 
            <Form.Group className="input-group">
              <span className="input-group-text" id="basic-addon1"><FaMagnifyingGlass />　キーワード</span>
              <Form.Control value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" name="keyword" placeholder="[焼肉, イタリアン]" />
            </Form.Group>
          </Col> 
        </Row>
        <Row className="d-flex justify-content-center">
          <Button variant="primary" type="submit">検索</Button>
        </Row>
        <p>{loading}</p>
      
      </Form>
    </Container>
    </>
  );
}

export default Search;