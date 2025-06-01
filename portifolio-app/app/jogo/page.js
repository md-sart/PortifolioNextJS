"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function gerarSenha() {
  const digitos = [];
  while (digitos.length < 4) {
    const d = Math.floor(Math.random() * 10).toString();
    if (!digitos.includes(d)) digitos.push(d);
  }
  return digitos.join("");
}

function verificarTentativa(senha, tentativa) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senha[i]) {
      bulls++;
    } else if (senha.includes(tentativa[i])) {
      cows++;
    }
  }
  return `${bulls} Bulls, ${cows} Cows`;
}

export default function JogoDaSenha() {
  const [senha, setSenha] = useState(gerarSenha);
  const [tentativa, setTentativa] = useState("");
  const [tentativas, setTentativas] = useState([]);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState("");

  useEffect(() => {
    if (tentativas.length === 10 && !fimDeJogo) {
      setFimDeJogo(true);
      setMensagemFinal(`Fim de jogo! A senha era ${senha}`);
    }
  }, [tentativas, senha, fimDeJogo]);

  function lidarComTentativa() {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^\d{4}$/.test(tentativa)) {
      alert("Digite uma senha válida com 4 dígitos únicos.");
      return;
    }

    const resultado = verificarTentativa(senha, tentativa);
    const novaEntrada = { valor: tentativa, resultado };
    const novasTentativas = [novaEntrada, ...tentativas];
    setTentativas(novasTentativas);
    setTentativa("");

    if (tentativa === senha) {
      setFimDeJogo(true);
      setMensagemFinal("Parabéns! Você acertou a senha!");
    }
  }

  function novoJogo() {
    setSenha(gerarSenha());
    setTentativa("");
    setTentativas([]);
    setFimDeJogo(false);
    setMensagemFinal("");
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-sm sm:text-base">
          <div className="font-bold text-black text-xl tracking-wide">Maria Eduarda</div>
          <ul className="flex flex-wrap gap-4 sm:gap-6 text-black font-medium">
            {["Home", "Sobre", "Experiência Acadêmica", "Experiência Profissional", "Projetos Desenvolvidos", "Jogo"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.replace(/\s+/g, '').toLowerCase()}`}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="p-6 sm:p-20 font-sans max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 text-center">
          Jogo da Senha
        </h1>

        <button
          onClick={() => alert(`Senha atual: ${senha}`)}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Mostrar Senha (debug)
        </button>

        {!fimDeJogo && (
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={tentativa}
              onChange={(e) => setTentativa(e.target.value)}
              maxLength={4}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Digite 4 dígitos únicos"
            />
            <button
              onClick={lidarComTentativa}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Tentar
            </button>
          </div>
        )}

        {mensagemFinal && (
          <div className="mb-4 text-center font-medium text-lg text-green-600 dark:text-green-400">
            {mensagemFinal}
          </div>
        )}

        {fimDeJogo && (
          <div className="text-center mb-6">
            <button
              onClick={novoJogo}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Novo Jogo
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {tentativas.map((t, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-100 p-3 rounded shadow-sm"
            >
              <span className="font-mono text-lg">{t.valor}</span>
              <span className="text-gray-700">{t.resultado}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
