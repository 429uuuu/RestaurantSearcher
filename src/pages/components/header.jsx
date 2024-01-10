/* pages/components/header

  ヘッダー

*/

import Navbar from 'react-bootstrap/Navbar';

/* ヘッダー */

import Link from "next/link"
import Image from "next/image"

const Header = () => {

    
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          Restaurant Searcher
        </Navbar.Brand>
      </Navbar>

      
    )
}

export default Header