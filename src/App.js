import MainContainer from "./components/MainContainer";
import { AppProvider } from "./context/app-context";

function App() {
  return (
    <AppProvider>
      <MainContainer />
    </AppProvider>
  );
}

export default App;
