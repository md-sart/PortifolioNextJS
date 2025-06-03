import Link from "next/link";

export default function ProjetosDesenvolvidos() {
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
        <main className="flex flex-col gap-8 text-center sm:text-left w-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-left text-blue-600">
            Projetos Desenvolvidos
          </h1>

          <p className="mb-8 text-base sm:text-lg">
            Abaixo, apresento alguns projetos desenvolvidos por mim. Confira também meu GitHub:
            <br />
            <a
              href="https://github.com/md-sart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/seu-usuario
            </a>
          </p>

          <section className="flex flex-col gap-4">
            <a
              href="https://js-game-advinhar-numero.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-semibold"
            >
              Jogo de Advinhar Número
            </a>
            <a
              href="https://md-sart.github.io/nlw-setup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-semibold"
            >
              Habits
            </a>
            <a
              href="https://decodificador-de-texto-mocha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-semibold"
            >
              Decodificador de texto
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
