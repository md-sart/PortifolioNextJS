import Link from "next/link";


export default function ExperienciaProfissional() {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mt-8 sticky top-0 z-50 w-full bg-white dark:bg-black shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-4 sm:justify-between text-sm sm:text-base">
          <div className="font-semibold text-blue-600 text-lg">Maria Eduarda</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-gray-800 dark:text-white">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
            <li><Link href="/experienciaAcademica" className="hover:underline">Experiência Acadêmica</Link></li>
            <li><Link href="/experienciaProfissional" className="hover:underline">Experiência Profissional</Link></li>
            <li><Link href="/projetosDesenvolvidos" className="hover:underline">Projetos Desenvolvidos</Link></li>
            <li><Link href="/jogo" className="hover:underline">Jogo</Link></li>
          </ul>
        </nav>
      </header>
      
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-blue-600">
        Experiência Profissional
      </h1>

      <div className="space-y-10 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Auxiliar Administrativo – Setor de Contabilidade
          </h2>
          <p>
            Instituição Pública | Recife/PE <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">2022 - atual</span>
          </p>
          <p className="mt-2">
            Responsável pela automação de processos manuais e análises de dados para otimizar rotinas da equipe. Utilizo ferramentas como Python, Power BI e Power Automate para desenvolver scripts, dashboards e fluxos automatizados, contribuindo para a eficiência operacional e redução de retrabalho.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Projetos de Tecnologia e Inovação (Hackathons)
          </h2>
          <p>
            Participante ativa em eventos de inovação e tecnologia, contribuindo com habilidades em front-end, lógica de programação e análise de dados. <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">2023 - atual</span>
          </p>
          <p className="mt-2">
            Destaques incluem o desenvolvimento da solução <strong>TeacherIo</strong> na Fuel Conference 2024 e projeto de detecção de fraudes no consumo de energia no <strong>Hacka Energy</strong>. Nessas experiências, atuei na prototipação, integração de APIs e apresentação das soluções.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Atuação em CRM – Salesforce
          </h2>
          <p>
            Em formação para atuar com consultoria Salesforce. <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">2024 - atual</span>
          </p>
          <p className="mt-2">
            Tenho me dedicado ao aprendizado contínuo na plataforma Salesforce, com foco em Service Cloud, Sales Cloud e Marketing Cloud. Meu objetivo é aplicar essas tecnologias na criação de soluções que melhorem a experiência do cliente e a eficiência dos processos de atendimento.
          </p>
        </section>
      </div>
    </div>
  );
}
