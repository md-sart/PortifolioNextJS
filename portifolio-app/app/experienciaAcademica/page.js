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
                Bacharelado em Secretariado Executivo
              </h2>
              <p>
                Universidade Federal de Pernambuco (UFPE) <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Concluído em 2024</span>
              </p>
              <p className="mt-2">
                Formação focada em habilidades administrativas, comunicação e organização, com experiência prática em atividades secretariais e apoio institucional.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Graduação em Sistemas para Internet (em andamento)
              </h2>
              <p>
                Universidade Católica de Pernambuco (UNICAP) <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">Início em 2022 - previsão de conclusão em junho/2026</span>
              </p>
              <p className="mt-2">
                Curso voltado para desenvolvimento web, banco de dados, programação e metodologias ágeis, com forte ênfase em projetos práticos e interdisciplinaridade.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Cursos e Capacitações Complementares
              </h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Programação Web Java – Instituto PROA/SENAC (2022)</li>
                <li>Computação em Nuvem – Escola da Nuvem (2023)</li>
                <li>AWS Certified Cloud Practitioner (2023)</li>
                <li>Fast Aceleração – Engenharia de Plataforma (2024)</li>
                <li>DXP Training Camp Desenvolvedor Salesforce (2025)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Participação em Atividades Extracurriculares
              </h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Intercâmbio no Canadá pelo Programa Ganhe o Mundo (2019)</li>
                <li>Fuel Conference 2024 – desenvolvimento da ferramenta TeacherIo</li>
                <li>Hackathons: Hacka Energy, Hacka Health, Residência OnBoard Porto Digital, Early Stage SEBRAE</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
