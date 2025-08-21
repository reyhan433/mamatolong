import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <section id="kontak">
        <h2>Hubungi Saya</h2>
        <button
          onClick={() =>
            document.getElementById("infoKontak").innerText =
              "Email: reyhan@bakekok.com | IG: @reyhnmhrdk_"
          }
        >
          Kontak Saya
        </button>
        <p id="infoKontak"></p>
      </section>
      <Footer />
    </>
  );
}

export default Home;
