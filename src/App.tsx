import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import ForWhom from "./components/ForWhom";
import Quality from "./components/Quality";
import Delivery from "./components/Delivery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Advantages />
        <Brands />
        <Categories />
        <ForWhom />
        <Quality />
        <Delivery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
