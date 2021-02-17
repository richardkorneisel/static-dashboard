import './App.css';
import Sidebar from './Sidebar'
import Reviews from './Reviews'
import Average_Rating from './Average_Rating'
import Sentiment_Analysis from './Sentiment_Analysis'
import Website_Visitors from './Website_Visitors'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Reviews/>
      <Average_Rating/>
      <Sentiment_Analysis/>
      <Website_Visitors/>    
    </div>
  );
}

export default App;
