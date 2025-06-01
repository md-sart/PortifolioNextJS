// app/sobre/page.tsx

import Image from "next/image";

export default function Sobre() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center sm:text-left max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold">Sobre mim</h1>

        <p className="text-base sm:text-lg leading-relaxed">
          Sou Maria Eduarda, estudante de <strong>Sistemas para Internet</strong> na UNICAP, com graduação em Secretariado Executivo. Atualmente, trabalho com automação de processos e análise de dados, mas meu grande foco está em me especializar em <strong>Salesforce</strong> e atuar como consultora na área de <strong>CRM</strong>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Tenho participado de <strong>hackathons</strong>, eventos de tecnologia e programas de formação como forma de colocar meus conhecimentos em prática. Participei de soluções voltadas à <strong>automação na saúde</strong>, <strong>monitoramento com IA</strong>, e uso de <strong>drones com machine learning</strong> para problemas do setor energético.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Além do meu interesse técnico, gosto de aprender com a comunidade. Sou <strong>Embaixadora Cloud Girls</strong> e ativa na <strong>Trailblazer Community</strong>. Busco crescer profissionalmente contribuindo com inovação, empatia e responsabilidade em cada projeto.
        </p>
      </main>

      <Image
        className="row-start-2 rounded-xl shadow-md"
        src="/sobre-img.png"
        alt="Maria Eduarda sorrindo, em um ambiente de tecnologia"
        width={300}
        height={300}
        priority
      />

      <footer className="row-start-3 text-center text-sm">
        Voltar para{" "}
        <a
          href="/"
          className="underline hover:text-blue-600"
        >
          página inicial
        </a>
      </footer>
    </div>
  );
}
