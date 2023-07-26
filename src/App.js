import "./App.css";
import ClassStatsTable from "./components/ClassStatsTable";
import { alcoholStats, gamma } from "./util";

function App() {
  console.log(alcoholStats, gamma);
  return (
    <div className="App">
      <text className="App-header">Flavanoids Value</text>
      <ClassStatsTable classWiseStats={alcoholStats} />
      <text className="App-header">Gamma Value</text>

      <ClassStatsTable classWiseStats={gamma} />
    </div>
  );
}

export default App;
