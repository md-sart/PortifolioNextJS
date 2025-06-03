import Link from "next/link";

export default function ProjetosDesenvolvidos() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
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
        <main className="flex flex-col gap-10 text-center sm:text-left w-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-400">
            Projetos Desenvolvidos
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section className="border border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition bg-zinc-800">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                🎯 Jogo de Advinhar Número
              </h2>
              <p>
                Um jogo simples onde o usuário deve adivinhar um número entre 1 e 10 com base em dicas fornecidas pelo sistema.
              </p>
              <a
                href="https://js-game-advinhar-numero.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline font-medium"
              >
                Acessar o projeto →
              </a>
            </section>

            <section className="border border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition bg-zinc-800">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                📋 Habits
              </h2>
              <p>
                Um controlador de hábitos diários. É possível marcar atividades realizadas como beber água, se exercitar, entre outros.
              </p>
              <a
                href="https://md-sart.github.io/nlw-setup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline font-medium"
              >
                Acessar o projeto →
              </a>
            </section>

            <section className="border border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition bg-zinc-800">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                🔐 Decodificador de Texto
              </h2>
              <p>
                Ferramenta que embaralha ou desembaralha um texto fornecido pelo usuário. Útil para esconder mensagens de maneira simples.
              </p>
              <a
                href="https://decodificador-de-texto-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:underline font-medium"
              >
                Acessar o projeto →
              </a>
            </section>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-lg">
              Você pode conferir outros projetos no meu GitHub:
              <br />
              <a
                href="https://github.com/md-sart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                github.com/md-sart
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
