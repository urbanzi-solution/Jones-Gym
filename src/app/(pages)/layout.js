import Header from '../../components/Header.jsx'
import Nav from '../../components/Nav.jsx'
import '../../styles/globals.css';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Nav />
      </body>
    </html>
  );
}