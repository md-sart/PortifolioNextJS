'use client';

import { useEffect, useState } from 'react';

export default function Conselho() {
  const [conselho, setConselho] = useState('');

  const buscarConselho = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setConselho(data.slip.advice);
    } catch (error) {
      setConselho('Erro ao carregar conselho. Tente novamente.');
    }
  };

  useEffect(() => {
    buscarConselho();
  }, []);

  return (
    <div className="text-center text-sm text-gray-700 dark:text-gray-300">
      <p className="italic">💬 Conselho do dia:</p>
      <p className="mt-1 font-medium">{`"${conselho}"`}</p>
      <button
        onClick={buscarConselho}
        className="mt-2 text-blue-600 hover:underline"
      >
        Novo conselho
      </button>
    </div>
  );
}
