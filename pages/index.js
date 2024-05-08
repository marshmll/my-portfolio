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
            <h3 className="montserrat text-2xl mb-4">SOBRE MIM</h3>
            <p className="montserrat">
              Sou bacharelando em Ciência da Computação pela Pontifícia
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
            <h3 className="montserrat text-2xl mb-4">CONTATO</h3>
            <ul className="montserrat leading-8">
              <li>
                <strong>Email</strong>:{" "}
                <a href="mailto:renandasilvaoliveiraandrade@gmail.com">
                  renandasilvaoliveiraandrade@gmail.com
                </a>
              </li>
              <li>
                <strong>Linkedin</strong>:{" "}
                <Link href="https://www.linkedin.com/in/renan-andrade-8a06ba212/">
                  Renan Andrade
                </Link>
              </li>
              <li>
                <strong>WhatsApp</strong>:{" "}
                <Link href="https://wa.link/59ygot">+55 (41) 99878-1618</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="montserrat text-2xl mb-4">COMPETÊNCIAS</h3>
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
      <section className="bg-[#121414] text-[#F3F2EE] py-8 px-10">
        <h3 className="dm-serif-display text-[5rem]">Projetos</h3>
      </section>
    </>
  );
}
