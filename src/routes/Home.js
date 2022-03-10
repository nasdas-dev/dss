import "./styles/Home.css";
import Nav from "../components/Nav.js";
import { changeColor, changePattern } from "../utils/backgroundHelpers";
import CardPrimary from "../components/CardPrimary";
import CardSecondary from "../components/CardSecondary";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="background bg-base-100 justify-center items-center flex-container flex flex-col"
      onMouseMove={(e) => {
        //        changePattern(e);
        changeColor(e);
      }}
      id="page_bg"
    >
      <Nav isLoggedIn={false} />

      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div className="hero-content">
          <CardPrimary />
        </div>
        <div className="flex-container flex-col hero-content">
          <CardSecondary
            span={"3412"}
            h1={"attacks are currently being executed."}
            p={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lorem arcu. Duis varius arcu nec bibendum iaculis. Mauris vitae convallis."
            }
            buttonText={"Learn more"}
          />
          <CardSecondary
            span={"529388"}
            spancolor={"text-secondary"}
            h1={"network nodes are unprotected."}
            p={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at lorem arcu. Duis varius arcu nec bibendum iaculis. Mauris
                vitae convallis nibh. Nam consequat ornare sapien sit amet
                sollicitudin. Nullam viverra sapien id mauris facilisis, at
                porta ligula varius. Etiam venenatis euismod nisl sed porttitor.
                Maecenas maximus.`}
            buttonText={"Learn more"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
