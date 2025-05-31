// app/page.tsx ou app/page.jsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Analise, compreenda e
          <strong className="text-blue-600"> EVOLUA!</strong>
        </h1>

        <p className="text-base sm:text-lg max-w-xl leading-relaxed">
          Olá, bem-vindo(a) ao meu portfólio! Sou Maria Eduarda, estudante de
          Sistemas para Internet pela UNICAP e atualmente focada na área de CRM
          com Salesforce. Tenho habilidades e experiência com Python,
          JavaScript, HTML, CSS, React, SQL, Power BI e Power Automate, além de
          estar aprofundando meus conhecimentos em Salesforce para desenvolver
          soluções inovadoras e eficientes. Estou sempre em busca de novos
          desafios na área de tecnologia. Vamos conversar?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-black text-white hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-black font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
            href="https://github.com/md-sart"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
            href="https://www.linkedin.com/in/maria-eduarda-correia-santos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
            href="https://www.salesforce.com/trailblazer/mariaeduardacs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailblazer
          </a>
        </div>
      </main>

      <Image
        className="row-start-2 rounded-full shadow-md"
        src="/img.png"
        alt="Foto de Maria Eduarda, de óculos, camisa branca e cabelo cacheado na altura dos ombros"
        width={250}
        height={250}
        priority
      />

      <footer className="row-start-3 text-center text-sm">
        Baixe meu currículo{" "}
        <a
          href="/curriculo/CV.pdf"
          target="_blank"
          className="underline hover:text-blue-600"
        >
          aqui
        </a>
      </footer>
    </div>
  );
}
