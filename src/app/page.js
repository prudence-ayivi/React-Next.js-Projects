import Image from "next/image";
import styles from "./styles/home.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";

export default function Home() {
  return (
    <main className="Home">
      <div className="Header">
        <div className="HeaderUp">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Bienvenue sur mon site <br />
            <code className="font-mono font-bold text-center">
              Je suis Darius {" < Kode />"} !
            </code>
          </h3>
          <p>
            Développeur d'Application Mobile pour Android et iOS; et Développeur
            Backend. <br />
            Avec +3 ans d'expérience, j'ai à mon actif plusieurs dizaines &nbsp;
            d'applications dont certaines que vous avez probablement utilisé.
          </p>
        </div>
        <div className="SideHeader">          
              <Image
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />              
        </div>
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Découvrez en plus sur moi !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div>

      <div className="Stacks">
        <div className="html">
          <img src="/html.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>HTML</code>
          </p>
        </div>
        <div className="css">
          <img src="/css.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>CSS</code>
          </p>
        </div>
        <div className="javascript">
          <img src="/javascript.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>JavaScript</code>
          </p>
        </div>
        <div className="react">
          <img src="/react.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>React</code>
          </p>
        </div>
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qui suis-je ? 🤔 {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="Header">
      <div className="SideHeader">
          <Carousel indicators={false}>
            <CarouselItem>
              {" "}
              <img
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />
              <CarouselCaption>
                <p>Je suis Darius Kode ! </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />
              <CarouselCaption>
                <p>Développeur Mobile Flutter</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />
              <CarouselCaption>
                <p>Développeur Backend </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Image
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />
              <CarouselCaption>
                <p>Avec +3 ans d'expérience </p>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </div>
        <div className="HeaderUp">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Bienvenue sur mon site <br />
            <code className="font-mono font-bold text-center">
              Je suis Darius {" < Kode />"} !
            </code>
          </h3>
          <p>
            Développeur d'Application Mobile pour Android et iOS; et Développeur
            Backend. <br />
            Avec +3 ans d'expérience, j'ai à mon actif plusieurs dizaines &nbsp;
            d'applications dont certaines que vous avez probablement utilisé.
          </p>
        </div>        
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mes Compétences {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="Skills"> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent mx-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Mobile  {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent mx-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Backend {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div>  
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent mx-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Backend  {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mes Technos {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="Stacks">
        <div className="html">
          <img src="/html.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>HTML</code>
          </p>
        </div>
        <div className="css">
          <img src="/css.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>CSS</code>
          </p>
        </div>
        <div className="javascript">
          <img src="/javascript.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>JavaScript</code>
          </p>
        </div>
        <div className="react">
          <img src="/react.svg" className="Stacks-logo" alt="logo" />
          <p>
            <code>React</code>
          </p>
        </div>
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vous avez un projet ? Contacter moi !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="ContactSection">
        <div className="ContactText">
          <h3 className={`mb-3 text-2xl font-semibold`}>
            Bienvenue sur mon site <br />
            <code className="font-mono font-bold text-center">
              Je suis Darius {" < Kode />"} !
            </code>
          </h3>
          <p>
            Développeur d'Application Mobile pour Android et iOS; et Développeur
            Backend. <br />
            Avec +3 ans d'expérience, j'ai à mon actif plusieurs dizaines &nbsp;
            d'applications dont certaines que vous avez probablement utilisé. 
            Avec +3 ans d'expérience, j'ai à mon actif plusieurs dizaines &nbsp;
            d'applications dont certaines que vous avez probablement utilisé.
          </p>
        </div>
        <div className="SideHeader">          
              <Image
                src="/IMG_9236.JPG"
                alt="Darius"
                width={500}
                height={250}
                priority
              />              
        </div>
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Les projets que j'ai réalisés !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vous avez un projet ? Contacter moi !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quelques Témoignages sur mon Travail {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mes Autres réalisations {" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Découvrez mes articles pour en savoir plus !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div>
      <div className="DiscoverMe">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vous avez un projet ? Contacter moi !{" "}
          <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            -|&gt;
          </span>
        </a>
      </div> 
    </main>
  );
}
