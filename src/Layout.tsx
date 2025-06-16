import Footer from "./sections/Footer";
import Header from "./sections/Headers"

type props = {
    children : React.ReactNode
}
function Layout({children} : props) {
  return (
      <div className="w-full flex flex-col items-center ">
          <Header/>

          <main className="w-full  flex flex-col items-center max-w-[1536px]  bg-black ">
          {children}
          </main>
          <Footer/>
      </div>
  );
}

export default Layout;
