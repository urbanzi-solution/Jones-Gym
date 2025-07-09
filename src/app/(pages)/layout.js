import Header from '../../components/Header.jsx'
import Nav from '../../components/Nav.jsx'
import '../../styles/globals.css';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jones Gym</title>
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Nav />
      </body>
    </html>
  );
}