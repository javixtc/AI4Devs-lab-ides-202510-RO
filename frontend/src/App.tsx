import React, { useState } from 'react';
import AddCandidateForm from './components/AddCandidateForm';
import CandidateList from './components/CandidateList';
import './App.css';

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ATS System</h1>
        <AddCandidateForm />
        <div className="mt-4">
          <button
            onClick={() => setShowList(!showList)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            {showList ? 'Hide Candidates List' : 'Show Candidates List'}
          </button>
        </div>
        {showList && <CandidateList />}
      </header>
    </div>
  );
}

export default App;
