import Categories from "./feature/Categories";
import Footer from "./feature/Footer";
import Header from "./feature/Header";
import Marks from "./feature/Mark";
import Partners from "./feature/Partners";
import Poster from "./feature/Poster";
import ShowCase from "./feature/Showcase";
import Spacer from "./ui/Spacer";

export default function App() {
  return (
    <>
      <Header />
      <Poster />
      <Categories />
      <Spacer />
      <ShowCase isVisibleLinks={true}/>
      <Spacer />
      <Partners />
      <Spacer />
      <ShowCase isVisibleLinks={false}/>
      <Spacer />
      <Partners />
      <Spacer />
      <Marks/>
      <Spacer />
      <ShowCase isVisibleLinks={false}/>
      <Spacer />
      <Footer/>
    </>
  )
}

