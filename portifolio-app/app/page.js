import Image from "next/image";
import Link from "next/link";
import Conselho from "./components/Conselho"; 


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="mt-8 sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Maria Eduarda</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            <li><Link href="/" className="hover:underline hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="/experienciaAcademica" className="hover:underline hover:text-white transition-colors">Experiência Acadêmica</Link></li>
            <li><Link href="/experienciaProfissional" className="hover:underline hover:text-white transition-colors">Experiência Profissional</Link></li>
            <li><Link href="/projetosDesenvolvidos" className="hover:underline hover:text-white transition-colors">Projetos Desenvolvidos</Link></li>
            <li><Link href="/jogo" className="hover:underline hover:text-white transition-colors">Jogo</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex-1 grid place-items-center px-6 sm:px-12 py-16 sm:py-24">
        <main className="max-w-5xl w-full flex flex-col-reverse sm:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text dark:from-blue-400 dark:to-blue-300">
              Analise, compreenda e <br />
              <span className="text-primary">EVOLUA!</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Olá, bem-vindo(a) ao meu portfólio! Sou Maria Eduarda, estudante de Sistemas para Internet pela UNICAP e atualmente focada na área de CRM com Salesforce. Tenho habilidades em Python, JavaScript, HTML, CSS, React, SQL, Power BI e Power Automate, além de estar me especializando em Salesforce para desenvolver soluções inovadoras e eficientes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                { name: "GitHub", url: "https://github.com/md-sart" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/maria-eduarda-correia-santos/" },
                { name: "Trailblazer", url: "https://www.salesforce.com/trailblazer/mariaeduardacs" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-primary text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors font-semibold text-sm sm:text-base shadow-md"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              className="rounded-full shadow-lg border-4 border-primary"
              src="/perfil.jpeg"
              alt="Foto de Maria Eduarda"
              width={250}
              height={250}
              priority
            />
          </div>
        </main>
      </div>

      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Conselho />
        </div>
      </footer>
    </div>
  );
}
