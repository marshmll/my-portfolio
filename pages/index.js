import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="block bg-[#F3F2EE] h-screen w-full">
        <h1 className="dm-serif-display bg-[url('/texture-background.jpg')] bg-center bg-no-repeat bg-cover text-[6.5rem] font-light inline-block text-transparent bg-clip-text absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max md:text-[4rem] sm:flex flex-col items-center xsm:text-[3rem] xsm:w-[80%] xsm:text-center">
          Renan Andrade
        </h1>
        <p className="montserrat text-[1rem] absolute left-0 bottom-0 p-10 mb-0 sm:left-[50%] sm:translate-x-[-50%] sm:text-center sm:w-full">
          CIÊNCIA DA COMPUTAÇÃO
        </p>
        <a
          className="montserrat text-[1rem] absolute right-0 bottom-0 p-10 mb-0 sm:hidden"
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
          no ano de 2023. Fui professor de música de um projeto voluntário em
          colégios estaduais e municipais por 1 ano.
        </p>
        <p className="montserrat text-[1rem]">
          Bem-vindo ao meu portfólio — espero que goste!
        </p>
        <p className="tangerine text-[3rem] block text-right mr-10 md:text-[2rem]">
          Renan Andrade.
        </p>
      </section>
      <section className="p-10 bg-[#F3F2EE]">
        <div className="w-full flex flex-center flex-row justify-between mb-10 md:flex-col">
          <div className="w-5/12 md:w-full md:mb-4">
            <h3 className="montserrat text-2xl font-bold mb-4">SOBRE MIM</h3>
            <p className="montserrat text-justify">
              Bacharelando em Ciência da Computação pela Pontifícia Universidade
              Católica do Paraná. Polímata em áreas da computação, engenharia,
              eletrônica, matemática e música. <br />
              Possui conhecimento em linguagens e frameworks web (HTML/CSS/JS,
              React, Next.js, PHP, CMS), desenvolvimentos de API's REST e
              implementação de CRUD, modelagem (conceitual. lógica, física) e
              desenvolvimento de bancos de dados relacionais (MySQL,
              PostgreSQL), utilização de ORM (Object-Relational Model) com
              Python e SQLAlchemy, desenvolvimento de aplicações, utilitários e
              jogos em linguagens de médio nível (C, C++). <br />
              Entusiasta de Assembly x86 e desenvolvimento de bootloaders,
              sistemas operacionais com foco em sistemas UNIX (GNU/Linux) e
              redes de computadores (Cisco Packet Tracer). <br />
              Encoraja fortemente os princípios de Software Livre (Free Software
              Foundation) e Open Source e boas práticas de programação. <br />
            </p>
          </div>
          <div className="w-5/12 inline-block md:w-full">
            <h3 className="montserrat text-2xl font-bold mb-4">CONTATO</h3>
            <ul className="montserrat leading-8 truncate text-ellipsis	">
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
          <div className="flex flex-center flex-row justify-between md:flex-col">
            <div className="montserrat w-5/12 md:w-full md:mb-4">
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
            <div className="montserrat w-5/12 md:w-full">
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
        <h3 className="dm-serif-display text-[5rem] py-8 px-10 md:text-[3.5rem]">
          Projetos
        </h3>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col-reverse md:flex-col-reverse">
          <div className="border-2 w-6/12 h-[20rem] bg-[url('/jornal-estudantil.png')] bg-top bg-no-repeat bg-cover hover:bg-[url('/jornal-estudantil.gif')] md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
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
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/next.svg"
                  width={100}
                  height={50}
                  title="Next.js"
                  alt="Logotipo Next.js"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/react.svg"
                  width={100}
                  height={50}
                  title="React.js"
                  alt="Logotipo React.js"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/datocms.svg"
                  width={100}
                  height={50}
                  title="DatoCMS"
                  alt="Logotipo DatoCMS"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/openweather.svg"
                  width={100}
                  height={50}
                  title="OpenWeather API"
                  alt="Logotipo OpenWeather API"
                />
              </div>
            </div>
            <div className="flex items-center sm:flex-col">
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
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col">
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
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
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/cpp.png"
                  width={50}
                  height={50}
                  title="C++"
                  alt="Logotipo C++"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/cmake.png"
                  width={50}
                  height={50}
                  title="CMake"
                  alt="Logotipo CMake"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/sfml.png"
                  width={80}
                  height={50}
                  title="SFML"
                  alt="Logotipo SFML"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/gcc.png"
                  width={50}
                  height={50}
                  title="GNU Compiler Colection"
                  alt="Logotipo GNU Compiler Colection"
                />
              </div>
            </div>
            <div className="flex items-center sm:flex-col">
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
          <div className="border-2 w-6/12 h-[23rem] bg-[url('/biohazrd.png')] bg-top bg-no-repeat bg-cover hover:bg-[url('/biohazrd.gif')] md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
        </article>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col-reverse">
          <div className="border-2 w-6/12 h-[20rem] bg-[url('/jogo-java.png')] bg-top bg-no-repeat bg-cover md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
            <h3 className="montserrat mb-8 text-4xl font-bold">Java Game</h3>
            <p className="text-justify">
              Usando recursos <i>bult-in</i>, criei um protótipo de jogo em
              Java. Utilizei Swing e recursos como Threads, por exemplo. Além
              disso, desenvolvi um pequeno criador de mapas em Python, gerando
              um arquivo de mapa a partir de uma imagem com cores pré-definidas
              relacionadas a cada tipo de <i>tile</i>
            </p>
            <p className="text-justify">
              Se trata de um projeto descontinuado, mas que me trouxe
              conhecimentos enormes em Java e Orientação a Objetos.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/java.svg"
                  width={80}
                  height={50}
                  title="Java"
                  alt="Logotipo Java"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/swing.png"
                  width={40}
                  height={50}
                  title="Java Swing"
                  alt="Mascote Java (Duke)"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/python.png"
                  width={50}
                  height={50}
                  title="Python"
                  alt="Logotipo Python"
                />
              </div>
            </div>
            <div className="flex items-center sm:flex-col">
              <button
                className="px-5 py-3 bg-black text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open("https://github.com/marshmll/my-game", "_blank")
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
        </article>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col">
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
            <h3 className="montserrat mb-8 text-4xl font-bold">BioQuiz</h3>
            <p className="text-justify">
              O BioQuiz é um aplicativo multimídia aplicado em forma de objeto
              educacional. O projeto se trata de um quiz que atingiu alunos do
              ensino médio, abordando o conteúdo de Estruturas Celulares. Em
              grupo, entrevistamos professores da rede privada e pública de
              ensino, mapeando as dificuldades comuns dos alunos e implementando
              uma solução através de um jogo leve, dinâmico e interativo.
            </p>
            <p className="text-justify">
              Para o desenvolvimento do projeto, utilizados a IDE Processing,
              com linguagem Java associada a bibliotecas próprias.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/java.svg"
                  width={80}
                  height={50}
                  title="Java"
                  alt="Logotipo Java"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/processing.svg"
                  width={50}
                  height={50}
                  title="Processing 4"
                  alt="Logotipo Processing 4"
                />
              </div>
            </div>
            <div className="flex items-center sm:flex-col">
              <button
                className="px-5 py-3 bg-black text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open("https://github.com/marshmll/projeto_2", "_blank")
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
          <div className="border-2 w-6/12 h-[23rem] bg-[url('/bioquiz.png')] bg-top bg-no-repeat bg-cover md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
        </article>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col-reverse">
          <div className="border-2 w-6/12 h-[20rem] bg-[url('/pig-runaway-simulator.png')] bg-top bg-no-repeat bg-contain hover:bg-[url('/pig-runaway-simulator.gif')] md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
            <h3 className="montserrat mb-8 text-4xl font-bold">
              Pig Runaway Simulator
            </h3>
            <p className="text-justify">
              Pig Runaway Simulator é um jogo de plataforma <i>side-scroller</i>{" "}
              criado na engine de jogos web Construct 3. No jogo, o personagem
              principal (Porcorredor) deve conseguir fugir de seu inimigo, O
              Fazendeiro, e se libertar de um ciclo de lavagem cerebral feita
              pelo Fazendeiro, se vingando por sua família.
            </p>
            <p className="text-justify">
              Projeto e história idealizado por: Renan Andrade, Ricardo Kucek,
              Hassan Gazouini, Hussein Gazouini, Murilo Zimerman e Samuel
              Bottesini.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/construct.webp"
                  width={80}
                  height={50}
                  title="Construct 3"
                  alt="Logotipo Construct 3"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="bg-[#F3F2EE] text-black flex items-center justify-between py-8 px-10 md:flex-col">
          <div className="p-6 bg-white w-[48%] rounded-lg border-[1px] border-[#CECECE] border-box md:w-full md:mb-4">
            <h3 className="montserrat mb-8 text-4xl font-bold">
              Sistema web para a ONG Crazy Cat Gang
            </h3>
            <p className="text-justify">
              O sistema de cadastros e gerenciamento de castrações de gatos para
              a ONG Crazy Cat Gang é um protótipo construído com tecnologias web
              que propõe uma forma dinâmica e eficiente do gerenciamento de
              gatos que precisam de castração.
            </p>
            <p className="text-justify">
              Para desenvolver este projeto, utilizamos HTML5, CSS3 e JavaScript
              moderno, além do uso do Next.js para construir uma API de
              integração para o sistema, que se conectou com a API DatoCMS.
            </p>
            <div className="my-6">
              <h4 className="font-bold text-center w-full mb-2 sm:mb-4">
                Tecnologias Utilizadas
              </h4>
              <div className="w-full flex items-center justify-around sm:flex-col">
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/html.png"
                  width={60}
                  height={60}
                  title="HTML5"
                  alt="Logotipo HTML"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/css.png"
                  width={60}
                  height={60}
                  title="CSS3"
                  alt="Logotipo CSS"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/javascript.png"
                  width={40}
                  height={40}
                  title="JavaScript"
                  alt="Logotipo JavaScript"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/next.svg"
                  width={70}
                  height={60}
                  title="Next.js"
                  alt="Logotipo Next.js"
                />
                <Image
                  className="hover:scale-105 sm:mb-2"
                  src="/datocms.svg"
                  width={70}
                  height={60}
                  title="DatoCMS"
                  alt="Logotipo DatoCMS"
                />
              </div>
            </div>
            <div className="flex items-center sm:flex-col">
              <button
                className="px-5 py-3 bg-black text-white mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open("https://github.com/marshmll/projeto_2", "_blank")
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
                className="px-5 py-3 bg-[#ffcb04] text-black mr-4 mt-4 flex items-center rounded-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window
                    .open("https://cadastrosccg.vercel.app", "_blank")
                    .focus();
                }}
              >
                <Image
                  src="/ccglogo.png"
                  width={30}
                  height={30}
                  className="mr-4"
                ></Image>
                Site do projeto
              </button>
            </div>
          </div>
          <div className="border-2 w-6/12 h-[20rem] bg-[url('/crazy-cat-gang.png')] bg-top bg-no-repeat bg-contain hover:bg-[url('/crazy-cat-gang.gif')] md:w-full sm:h-[15rem] xsm:h-[10rem]"></div>
        </article>
      </section>
    </>
  );
}
