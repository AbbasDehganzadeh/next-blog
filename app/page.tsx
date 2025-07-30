import Hero from './components/main/hero';
import Quotes from './components/main/quotes';
import Features from './components/main/features';
import ContactForm from './components/main/contact-form';

export default async function Home() {
  return (
    <div className="max-h-screen">
      <Hero />
      <div className="relative w-full max-w-3xl mx-auto my-6 overflow-hiddne rounded-2xl shadow-xl">
        <Quotes />
      </div>
      <div className="ny-6">
        <Features />
      </div>
      <div className="my-12">
        <ContactForm />
      </div>
    </div>
  );
}
