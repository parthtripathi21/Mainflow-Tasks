import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'Del') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(input)); // ⚠️ Avoid `eval` in production
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Rearranged to fit 3-column layout (18 buttons)
  const buttons = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.', '=',
    '+', '-', '*',
    '/', 'C', 'Del'
  ];

  return (
    <div className="max-w-sm mx-auto mt-2 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="bg-gray-100 p-3 rounded text-right mb-4 min-h-[60px]">
        <div className="text-lg text-gray-700 break-all">{input || '0'}</div>
        <div className="text-xl font-semibold text-black">= {result}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`p-4 rounded text-lg font-medium transition-all
              ${btn === '=' ? 'bg-green-500 text-white hover:bg-green-600' :
                btn === 'C' || btn === 'Del' ? 'bg-red-100 hover:bg-red-200' :
                'bg-blue-100 hover:bg-blue-200'}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
