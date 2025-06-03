import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen">
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

      <div className="flex flex-col items-center sm:items-start p-8 sm:p-20 gap-16 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-left text-blue-600">
            Sobre esta página
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">
            Este portfólio foi desenvolvido utilizando o <strong>Next.js</strong>, um framework React que oferece renderização otimizada, roteamento automático e organização moderna para aplicações web.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Para estilização e layout responsivo, utilizei o <strong>Tailwind CSS</strong>, que permite construir interfaces de forma rápida e consistente com classes utilitárias.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Em um dos projetos, integrei uma <strong>API pública dos Conselhos de Classe</strong>, possibilitando buscas dinâmicas por profissionais registrados, demonstrando o uso de chamadas assíncronas e manipulação de dados em tempo real.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Além disso, aproveitei recursos do Next.js como carregamento otimizado de imagens com o componente <code>next/image</code>, melhorando a performance e experiência do usuário.
          </p>
        </main>

        <Image
          className="rounded-xl shadow-md"
          src="/sobre-img.png"
          alt="Imagem relacionada à tecnologia e desenvolvimento web"
          width={300}
          height={300}
          priority
        />

        <footer className="text-center text-sm">
          Voltar para{" "}
          <Link href="/" className="underline hover:text-blue-600">
            página inicial
          </Link>
        </footer>
      </div>
    </div>
  );
}
