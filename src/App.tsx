import './App.css';
// import Header from './components/Header';

function App() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = months[date.getMonth()];
  const currentDay = date.getDate();

  return (
    <>
      {/* <Header /> */}
      <div>
        <p>
          {currentMonth} {currentDay}, {currentYear}
        </p>
        <hgroup>
          <h1 className="mt-6">Java</h1>
          <p className="text-lg font-bold mt-2">「値の出力」</p>
        </hgroup>
        <div className="mockup-code shadow-xl mt-6">
          <pre data-prefix="1">
            <code>System.out.println("Hello World");</code>
          </pre>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">// memo</h2>
            <p>printlnは、"print line"の略</p>
            <p>JavaScriptでいう"console.log"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
