import Alert from "../components/alert";
import Footer from "../components/Footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
