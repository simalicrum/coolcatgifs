import Header from '../components/Header';
import Footer from '../components/Footer';
import Catbox from '../components/Catbox';

export default function Index() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Catbox />
      <Footer />
    </div>
  );
}
