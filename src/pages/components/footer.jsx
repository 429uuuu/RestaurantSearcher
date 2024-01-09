//pages/componemts/footer

/* フッター */

const Footer = () => {
  return (
      <footer>
        <div className="bg-secondary text-dark p-2">
          <p className="text-center m-1" >@sample {new Date().getFullYear()}</p>
          <p className="text-center mt-0 mb-1" >Powered by <a href="http://webservice.recruit.co.jp/" className="link-dark" >ホットペッパーグルメ Webサービス</a></p>
        </div>
      </footer>
  )
}

export default Footer