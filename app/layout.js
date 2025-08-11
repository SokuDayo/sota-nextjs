import "../styles/globals.css";
import Nav from '../components/nav';
import Footer from '../components/footer'

export const metadata = {
  title: 'Sota Iwaku',
  description: "Sota's Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Nav/>
        <main className='main'>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  )
}
