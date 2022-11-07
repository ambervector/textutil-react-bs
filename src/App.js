import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Amber" />
      <div className="container my-3">
        <TextForm
          heading="Get Ready!"
          preExistingText="Enter your text here!"
        />
      </div>
    </>
  );
}

export default App;
