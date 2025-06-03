import Link from "next/link";

export default function ExperienciaAcademica() {
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
            Experiência Acadêmica
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Graduação - Sistemas para Internet
              </h2>
              <p>
                Universidade Católica de Pernambuco (UNICAP) <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">2022 - em andamento</span>
              </p>
              <p className="mt-2">
                O curso tem me proporcionado conhecimentos sólidos em desenvolvimento web, banco de dados, arquitetura de software, programação e segurança da informação. Ao longo da graduação, tenho trabalhado com projetos práticos e interdisciplinares que fortalecem minha capacidade técnica e colaborativa.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Formação Técnica Complementar
              </h2>
              <p>
                Trilhas de capacitação através de plataformas como Salesforce Trailhead, Alura e cursos livres. <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">2022 - atual</span>
              </p>
              <p className="mt-2">
                Tenho realizado trilhas focadas em CRM (Salesforce), lógica de programação, automação de processos com Power Platform, além de aprofundamentos em linguagens como Python, JavaScript, HTML e CSS.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Participações Acadêmicas
              </h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Participação em hackathons, como Fuel Conference 2024 e Hacka Energy – Sebrae & Porto Digital.</li>
                <li>Projetos interdisciplinares na universidade envolvendo front-end e análise de dados.</li>
                <li>Monitorias e eventos acadêmicos voltados à inovação e tecnologia.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
