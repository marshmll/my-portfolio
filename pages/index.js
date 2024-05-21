import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="block bg-[#F3F2EE] h-screen w-full">
        <h1 className="dm-serif-display bg-[url('/texture-background.jpg')] bg-center bg-no-repeat bg-cover text-[6.5rem] font-light inline-block text-transparent bg-clip-text absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max">
          Renan Andrade
        </h1>
        <p className="montserrat text-[1rem] absolute left-0 bottom-0 p-10">
          CIÊNCIA DA COMPUTAÇÃO
        </p>
        <a
          className="montserrat text-[1rem] absolute right-0 bottom-0 p-10"
          href="mailto:renandasilvaoliveiraandrade@gmail.com"
        >
          renandasilvaoliveiraandrade@gmail.com
        </a>
      </section>
      <section className="bg-[#121414] text-[#F3F2EE] py-8 px-10">
        <h2 className="dm-serif-display text-[3.5rem] mb-4">Saudações!</h2>
        <p className="montserrat text-[1rem] mb-2">
          Sou o Renan, desenvolvedor frontend, desenvolvedor em C++ e Java e
          futuro cientista da computação. Possuo conhecimento em tecnologias web
          como HTML, CSS, Javascript, React, Next.js, DatoCMS, SQL e um pouco de
          UX/UI. Além disso, possui conhecimento em desenvolvimento de jogos em
          C++ e aplicações em Java. Comecei meu aprendizado em programação em
          2021, entretanto minha paixão pela computação me acompanha desde o
          berço.
        </p>
        <p className="montserrat text-[1rem] mb-4">
          Além disso, possuo experiência com Python, e C. Sou um entusiasta de
          engenharia reversa, linguagens de baixo nível e funcionamento de
          sistemas operacionais, processadores e circuitos. Atuo como mentor de
          um projeto escolar de programação, linguagens e jornalismo que fundei
          no ano de 2023. Fui professor de música de um projeto volutário em
          colégios estaduais e municipais por 1 ano.
        </p>
        <p className="montserrat text-[1rem]">
          Bem-vindo ao meu portfólio — espero que goste!
        </p>
        <p className="tangerine text-[3rem] block text-right mr-10">
          Renan Andrade.
        </p>
      </section>
      <section className="p-10 bg-[#F3F2EE]">
        <div className="w-full flex flex-center flex-row justify-between mb-10">
          <div className="w-5/12">
            <h3 className="montserrat text-2xl font-bold mb-4">SOBRE MIM</h3>
            <p className="montserrat text-justify">
              Cursando Bacharelado em Ciência da Computação pela Pontifícia
              Universidade Católica do Paraná, com mais de 3 anos de experiência
              em desenvolvimento web. Desejo me especializar em linguagens como
              Python e C++ e me aprofundar em desenvolvimento nativo,
              desenvolvimento de sistemas operacionais, otimização de algoritmos
              e estruturas de dados. Possuo habilidade de aprendizado otimizado
              em um curto espaço de tempo e desejo cada vez mais expandir meu
              leque de conhecimentos.
            </p>
          </div>
          <div className="w-5/12 inline-block">
            <h3 className="montserrat text-2xl font-bold mb-4">CONTATO</h3>
            <ul className="montserrat leading-8">
              <li>
                <strong>Email</strong>:{" "}
                <a
                  className="underline"
                  href="mailto:renandasilvaoliveiraandrade@gmail.com"
                >
                  renandasilvaoliveiraandrade@gmail.com
                </a>
              </li>
              <li>
                <strong>Linkedin</strong>:{" "}
                <Link
                  className="underline"
                  href="https://www.linkedin.com/in/renan-andrade-8a06ba212/"
                >
                  Renan Andrade
                </Link>
              </li>
              <li>
                <strong>WhatsApp</strong>:{" "}
                <Link className="underline" href="https://wa.link/59ygot">
                  +55 (41) 99878-1618
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="montserrat text-2xl font-bold mb-4">COMPETÊNCIAS</h3>
          <div className="flex flex-center flex-row justify-between">
            <div className="montserrat w-5/12">
              <h4 className="font-bold mb-2">SOFT SKILLS</h4>
              <div className="flex flex-row flex-start">
                <ul className="mr-8">
                  <li>Organização</li>
                  <li>Compromisso</li>
                  <li>Comunicação</li>
                  <li>Aberto a aprendizados</li>
                </ul>
                <ul>
                  <li>Trabalho em equipe</li>
                  <li>Análise crítica</li>
                  <li>Respeito</li>
                  <li>Visão de carreira</li>
                </ul>
              </div>
            </div>
            <div className="montserrat w-5/12">
              <h4 className="font-bold mb-2">HARD SKILLS</h4>
              <div className="flex flex-row flex-start">
                <ul className="mr-8">
                  <li>Next.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>DatoCMS</li>
                  <li>C++</li>
                </ul>
                <ul>
                  <li>Clean Code</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Git</li>
                  <li>SQL</li>
                  <li>GNU/Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-[#F3F2EE] bg-[#121414] montserrat">
        <h3 className="dm-serif-display text-[5rem] py-8 px-10">Projetos</h3>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10">
          <div className="border-2 w-6/12 h-[20rem] bg-[url('/jornal-estudantil.png')] bg-top bg-no-repeat bg-cover hover:bg-[url('/jornal-estudantil.gif')]"></div>
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box">
            <h3 className="dm-serif-display mb-8 text-4xl">
              Jornal Estudantil Tiradentes
            </h3>
            <p className="text-justify">
              O Jornal Estudantil Tiradentes é um projeto idealizado por mim, em
              conjunto com meu ex-professor de Língua Portuguesa, José Cristiano
              Orrigo.
            </p>
            <p className="text-justify">
              Se trata de um projeto que uniu aspectos de jornalismo e
              tecnologia, proporcionando aos alunos uma interface simples de
              manipulação e inserção de conteúdos por sistema de CMS, promovendo
              a participação e o pensamento crítico dentro da comunidade
              escolar.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around">
                <Image
                  className="hover:scale-105"
                  src="/next.svg"
                  width={100}
                  height={50}
                  title="Next.js"
                  alt="Logotipo Next.js"
                />
                <Image
                  className="hover:scale-105"
                  src="/react.svg"
                  width={100}
                  height={50}
                  title="React.js"
                  alt="Logotipo React.js"
                />
                <Image
                  className="hover:scale-105"
                  src="/datocms.svg"
                  width={100}
                  height={50}
                  title="DatoCMS"
                  alt="Logotipo DatoCMS"
                />
                <Image
                  className="hover:scale-105"
                  src="/openweather.svg"
                  width={100}
                  height={50}
                  title="OpenWeather API"
                  alt="Logotpo OpenWeather API"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="px-5 py-3 bg-black text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open(
                      "https://github.com/marshmll/jornalestudantiltiradentes",
                      "_blank"
                    )
                    .focus();
                }}
              >
                <Image
                  src="/github.png"
                  width={30}
                  height={30}
                  className="mr-4"
                  alt="Logotipo GitHub"
                ></Image>
                Ver no GitHub
              </button>
              <button
                className="px-5 py-3 bg-red-800 text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open(
                      "https://jornalestudantiltiradentes.vercel.app",
                      "_blank"
                    )
                    .focus();
                }}
              >
                <Image
                  src="/jornal.png"
                  width={30}
                  height={30}
                  className="mr-4"
                ></Image>
                Site do projeto
              </button>
            </div>
          </div>
        </article>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10">
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box">
            <h3 className="montserrat mb-8 text-4xl font-bold">BIOHAZRD</h3>
            <p className="text-justify">
              BIOHAZRD é um jogo concebido por Victor Valério, Pedro Senes,
              Dillan Fernandes, Riscala Miguel Fadel Neto e Thomas Steinhausser
              (colegas da PUCPR), inicialmente desenvolvido em uma engine web
              denominada <strong>Construct</strong>.
            </p>
            <p className="text-justify">
              Atualmente, trabalho desenvolvendo uma engine própria para o jogo,
              utilizando <strong>C++</strong> em conjunto com uma biblioteca
              multimídia chamada <strong>SFML</strong> (Simple and Fast
              Multimedia Library). O objetivo é tornar o jogo otimizado, rodando
              nativamente em computadores Linux e Windows, também permitindo uma
              customização e gerenciamento de código mais eficaz.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around">
                <Image
                  className="hover:scale-105"
                  src="/cpp.png"
                  width={70}
                  height={70}
                  title="C++"
                  alt="Logotipo C++"
                />
                <Image
                  className="hover:scale-105"
                  src="/cmake.png"
                  width={70}
                  height={70}
                  title="CMake"
                  alt="Logotipo CMake"
                />
                <Image
                  className="hover:scale-105"
                  src="/sfml.png"
                  width={100}
                  height={50}
                  title="SFML"
                  alt="Logotipo SFML"
                />
                <Image
                  className="hover:scale-105"
                  src="/gcc.png"
                  width={60}
                  height={50}
                  title="GNU Compiler Colection"
                  alt="Logotpo GNU Compiler Colection"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="px-5 py-3 bg-black text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open("https://github.com/marshmll/rpg-game", "_blank")
                    .focus();
                }}
              >
                <Image
                  src="/github.png"
                  width={30}
                  height={30}
                  className="mr-4"
                  alt="Logotipo GitHub"
                ></Image>
                Ver no GitHub
              </button>
            </div>
          </div>
          <div className="border-2 w-6/12 h-[23rem] bg-[url('/biohazrd.png')] bg-top bg-no-repeat bg-cover hover:bg-[url('/biohazrd.gif')]"></div>
        </article>
      </section>
    </>
  );
}
