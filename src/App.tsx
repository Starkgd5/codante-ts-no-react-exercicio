import QuoteCard from './components/QuoteCard';
import HeaderCard from './components/HeaderCard';
import { useContext } from 'react';
import context from './context/context';

function App() {
  const { quote, bgColor } = useContext(context);

  return (
    <main className="w-full min-h-screen " style={{ backgroundColor: bgColor }}>
      <section className="container px-10 py-20 mx-auto text-center">
        <HeaderCard />
        {quote && <QuoteCard />}
      </section>{' '}
    </main>
  );
}

export default App;
