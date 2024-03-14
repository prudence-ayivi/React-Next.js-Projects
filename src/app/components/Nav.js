import Image from "next/image";
import Link from 'next/link' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem , CarouselCaption } from 'react-bootstrap';


export default function Nav() {
  return (
    <nav className="navStyles"> 
    <div className="HeadIntro"> 
    <div className="HeadImg"> 
    <Link href={"/#"}> 
    <Image 
      src={"/AvaIcon3640-200.png"}
      alt="Darius" 
      width= "100" 
      height= "100" 
      object-fit= "cover" 
    /> 
    </Link> 
    </div>
    <div className="HeadText">
    <p>Je suis Darius {" < Kode />"} ! <br />
    Développeur Mobile Flutter
    </p>  
    </div> 
    </div>
    <div className="Menu"> 
        <ul> 
            <li>
                <Link href='/'>A Propos</Link> 
            </li>
            <li>
                <Link href='/blog'>Mes Projets </Link> 
            </li> 
            <li>
                <Link href='/codonsEnsemble'>Blog </Link> 
            </li> 
            <li>
                <Link href='/projets'>Se connecter</Link> 
            </li>             
        </ul> 
    </div> 
    </nav>
  );
}


