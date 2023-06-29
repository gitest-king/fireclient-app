import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
        <div className="min-h-screen">
          {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout