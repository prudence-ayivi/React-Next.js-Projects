import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="footerStyles">
      <div className="footerRow">
        <div>
            <h4 className="footerSection"> En savoir plus </h4>
            <ul>
              <li>
                <Link href="/"> A propos de moi </Link>
              </li>
              <li>
                <Link href="/"> Mes Compétences </Link>
              </li> 
              <li>
                <Link href="/"> Mes Projets </Link>
              </li> 
              <li>
                <Link href="/"> Autres réalisations </Link>
              </li> 
              <li>
                <Link href="/"> Blog </Link>
              </li>
            </ul>
        </div>
        <div>
            <h4 className="footerSection"> Se connecter </h4>
            <ul>
              <li>
                <Link href="/"> Me Contacter </Link>
              </li>
              <li>
                <Link href="/"> M'acheter un Café 🧁 </Link>
              </li>           
              <li>
                <Link href="/#"> Mes Réseaux Sociaux </Link>
                <div className="SocialMedia"> 
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="Mail"
                      width={47}
                      height={48}
                    /> Mail
                  </Link>
                </div> 
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="GitHub"
                      width={47}
                      height={48}
                    /> GitHub
                  </Link>
                </div>
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="Facebook"
                      width={47}
                      height={48} 
                    /> Facebook
                  </Link>
                </div> 
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="Instagram"
                      width={47}
                      height={48} 
                    /> Instagram
                  </Link>
                </div> 
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="LinkedIn"
                      width={47}
                      height={48}
                    /> LinkedIn
                  </Link>
                </div>             
                <div className="ImageSocial">
                  <Link href={"/https://www.instagram.com"} target="_blank">
                    <Image
                      src={"/insta.png"}
                      alt="X"
                      width={47}
                      height={48}
                    /> X
                  </Link>
                </div> 
                </div>
              </li>
            </ul>
        </div>
        </div>
        <div className="footerBottom">
          <span>
            Copyright {new Date().getFullYear()} Darius Kode 🚀 - Tous droits
            réservés | Build with ❤ by Prudence AYIVI
          </span>          
        </div>    
    </footer>
  );
}
