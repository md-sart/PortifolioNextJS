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
            Sobre mim
          </h1>

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
          className="rounded-xl shadow-md"
          src="/sobre-img.png"
          alt="Maria Eduarda sorrindo, em um ambiente de tecnologia"
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

