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

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                TeacherIo – Fuel Conference 2024
              </h2>
              <p>
                Projeto vencedor de hackathon internacional focado em educação personalizada. Utilizamos câmeras para analisar microexpressões faciais dos alunos e alocá-los em salas com base no canal de comunicação preferido.
              </p>
              <p className="mt-2">
                Tecnologias utilizadas: JavaScript, IA, OpenCV, Python, React.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Deteção de Fraudes – Hacka Energy 2024
              </h2>
              <p>
                Solução para identificar registros clandestinos de energia usando drones com sensores e machine learning. O projeto propõe um modelo preventivo e eficiente para concessionárias de energia.
              </p>
              <p className="mt-2">
                Tecnologias utilizadas: Python, Flask, Drones, ML.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Agendamento Ágil de Exames
              </h2>
              <p>
                Sistema em desenvolvimento que automatiza o agendamento de exames após consultas, com integração de calendários, envio de notificações e dashboards analíticos para clínicas e hospitais.
              </p>
              <p className="mt-2">
                Tecnologias utilizadas: React, Node.js, Power BI, Power Automate.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Portfólio Profissional
              </h2>
              <p>
                Este site foi desenvolvido com Next.js, Tailwind CSS e integração com Trailblazer, GitHub e LinkedIn. Ele reúne minhas experiências acadêmicas, profissionais e projetos desenvolvidos.
              </p>
              <p className="mt-2">
                Tecnologias utilizadas: Next.js, TypeScript, Tailwind CSS.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
