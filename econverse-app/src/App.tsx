import Categories from "./feature/Categories";
import Footer from "./feature/Footer";
import Header from "./feature/Header";
import Partners from "./feature/Partners";
import Poster from "./feature/Poster";
import ShowCase from "./feature/Showcase";

export default function App() {
  return (
    <>
      <Header />
      <Poster />
      <Categories />
      <ShowCase isVisibleLinks={true}/>
      <Partners />
      <ShowCase isVisibleLinks={false}/>
      <Partners />
      <Footer/>
    </>
  )
}

