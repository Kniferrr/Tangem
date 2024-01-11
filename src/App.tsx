import "./App.scss";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import TopBanner from "./components/TopBanner/TopBanner";

function App() {
  return (
    <>
      <div className="App">
        <TopBanner />
        <BottomBanner />
      </div>
    </>
  );
}

export default App;
