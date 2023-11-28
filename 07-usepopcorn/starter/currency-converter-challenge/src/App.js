import { useEffect, useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchExchange = async () => {
      try {
        setErrorMsg('');
        setLoading(true);

        if (amount === '') {
          setResult('');
          return;
        }

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error('Problem while fetching');

        const data = await res.json();

        setErrorMsg('');
        setResult(Object.values(data.rates).at(0));
      } catch (e) {
        if (e.name !== 'AbortError') setErrorMsg(e.message);
        setResult('');
      } finally {
        setLoading(false);
      }
    };

    if (fromCurrency === toCurrency) {
      return setResult(amount);
    }

    fetchExchange();

    return () => {
      controller.abort();
    };
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="JPY">JPY</option>
      </select>
      {loading && <p>Loading...</p>}
      {!errorMsg && !loading && result && (
        <p>
          {result} {toCurrency}
        </p>
      )}
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}
