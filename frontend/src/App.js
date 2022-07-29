import "./App.css";
import { MainRouter } from "./routes/MainRouter";
import VideoCall from './routes/VideoCall';

function App() {
  return (
    <div className="App">
      <MainRouter/>
      <VideoCall/>
    </div>
  );
}

export default App;

