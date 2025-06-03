import Link from "next/link";

export default function ExperienciaProfissional() {
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
            Experiência Profissional
          </h1>

          <div className="space-y-10 text-base sm:text-lg leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Estagiária de Salesforce
              </h2>
              <p>
                Amarante | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">setembro 2024 – atualmente</span>
              </p>
              <p className="mt-2">
                Suporte aos usuários do Service Cloud; criação e manutenção de relatórios e painéis no Salesforce; auxílio na configuração de segmentações e jornadas no Marketing Cloud; participação nas cerimônias de scrum; apoio na melhoria contínua e controle de qualidade do sistema.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Auxiliar Administrativo I
              </h2>
              <p>
                Rueda e Rueda Advogados | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">março 2024 – setembro 2024</span>
              </p>
              <p className="mt-2">
                Criação e manutenção de dashboards no Power BI e fluxos de automação no Power Automate; suporte aos usuários do financeiro; controle de faturamento; emissão e cancelamento de notas fiscais; gerenciamento de dados com SQL e Python.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Jovem Aprendiz – Assistente Administrativo
              </h2>
              <p>
                Rueda e Rueda Advogados | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">fevereiro 2023 – fevereiro 2024</span>
              </p>
              <p className="mt-2">
                Apoio às rotinas do departamento financeiro, controle de faturamento e prestação de contas; manipulação de planilhas; arquivamento e digitalização de documentos.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Estagiária de Secretariado
              </h2>
              <p>
                Tribunal Regional Eleitoral de Pernambuco | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">maio 2022 – fevereiro 2024</span>
              </p>
              <p className="mt-2">
                Organização de documentos e triagem de processos no sistema SEI; elaboração de ofícios e atas; assessoramento administrativo; suporte telefônico às Zonas Eleitorais.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Bolsista de Secretariado
              </h2>
              <p>
                Secretaria de Pós-Graduação – Centro de Informática (UFPE) | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">outubro 2021 – julho 2022</span>
              </p>
              <p className="mt-2">
                Atendimento a estudantes e professores; emissão de documentos; gestão de matrículas; uso dos sistemas SIGAA e SIPAC para apoio acadêmico.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Bolsista de Secretariado
              </h2>
              <p>
                Rádio Universitária Paulo Freire | Recife, PE <br />
                <span className="text-sm text-gray-600 dark:text-gray-400">fevereiro 2021 – outubro 2021</span>
              </p>
              <p className="mt-2">
                Apoio à coordenação geral, operação da chamada pública, processos dos estudantes e divulgação de programas na rádio e redes sociais.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
