import ChartBlock from './components/ChartBlock';
import InputBlock from './components/InputBlock';
import LoadingStatus from './components/LoadingStatus';
import OutputBlock from './components/OutputBlock';

function App() {
  return (
    <div>
      <InputBlock />
      <LoadingStatus />
      <ChartBlock />
      <div className="relative">
        <OutputBlock />
      </div>
    </div>
  );
}

export default App;
