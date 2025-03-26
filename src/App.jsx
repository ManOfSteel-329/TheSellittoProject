import { useState } from 'react';

function App() {
  const [predictions, setPredictions] = useState(
    Array(12).fill({ first: '', second: '', third: '', fourth: '' })
  );
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [selectedTalent, setSelectedTalent] = useState('');
  const [selectedPoolStart, setSelectedPoolStart] = useState(null);
  const [selectedPickType, setSelectedPickType] = useState(0);

  const getColorStyles = (value) => {
    const styles = {
      '1': 'bg-red-500 text-white',
      '2': 'bg-white text-black',
      '3': 'bg-blue-500 text-white',
      '4': 'bg-yellow-500 text-black',
      '5': 'bg-green-500 text-black',
      '6': 'bg-black text-yellow-500',
      '7': 'bg-orange-500 text-black',
      '8': 'bg-pink-500 text-black',
      '9': 'bg-teal-400 text-black',
      '10': 'bg-purple-900 text-white',
      '11': 'bg-gray-500 text-red-600',
      '12': 'bg-lime-300 text-black',
      '13': 'bg-orange-800 text-white',
      '14': 'bg-red-900 text-yellow-500',
      '15': 'bg-yellow-100 text-black',
      '16': 'bg-blue-200 text-red-500',
      '17': 'bg-blue-800 text-white',
      '18': 'bg-green-900 text-yellow-500',
      '19': 'bg-blue-900 text-red-500',
      '20': 'bg-fuchsia-500 text-yellow-500'
    };
    return styles[value] || 'bg-gray-200 text-black';
  };

  const handlePoolStartChange = (e) => {
    if (e.target.value === 'Pick an option') {
      setSelectedPoolStart(null)
    } else {
      const raceNumber = parseInt(e.target.value.replace('Race ', '')) - 1;
      setSelectedPoolStart(raceNumber);
    }
  };

  const handlePickTypeChange = (e) => {
    const pickTypeMap = {
      'Pick an option': 0,
      'Pick 3': 3,
      'Pick 4': 4,
      'Pick 5': 5,
      'Pick 6': 6,
      'Pick All': 12,
    };
    setSelectedPickType(pickTypeMap[e.target.value] || 0);
  };

  const handleInputChange = (index, field, value) => {
    const updatedPredictions = predictions.map((item, i) =>
      i === index ? { ...item, [field]: value} : item
    );
    setPredictions(updatedPredictions);
  }

  const getFileName = () => {
    return `${selectedTrack}_${selectedTalent}.json`
  }

  const handleSelectionChange = async () => {
    if (!selectedTrack || !selectedTalent) {
      return;
    }
  }

  const handleDisplay = async () => {
    if (!selectedTrack || !selectedTalent) {
      alert('Please select track and talent before displaying')
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/predictions/${getFileName()}`
      );
      if (response.ok) {
        const data = await response.json()
        setPredictions(data.predictions);
      } else if (response.status === 404) {
        alert('No existing data found for this track and talent combination');
        console.log('No existing data found')
      } else {
        throw new Error('Failed to load data')
      }
    } catch (error) {
      console.error('Error loading data: ', error);
      alert('Failed to load predictions. Please try again.')
    }
  }

  const handleSubmit = async () => {
    if (!selectedTrack || !selectedTalent) {
      alert('Please select track and talent before submitting');
      return;
    }

    const newData = {
      track: selectedTrack,
      talent: selectedTalent,
      poolStart: selectedPoolStart,
      pickType: selectedPickType,
      predictions: predictions,
      updatedAt: new Date().toISOString(),
    };

    const fileName = getFileName();
    console.log('Submitting to file:', fileName);
    console.log('Request data:', newData);

    try {
      const url = `http://localhost:3001/api/predictions/${fileName}`;
      console.log('Sending request to:', url);
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`Failed to save data: ${errorText}`);
      }

      const result = await response.json();
      console.log('Success response:', result);
      alert(result.message);
    } catch (error) {
      console.error('Error saving data:', error);
      alert(`Failed to save predictions: ${error.message}`);
    }

  }

  return (
    <div className={
      darkMode 
        ? "bg-gray-900 text-white min-h-screen p-8" 
        : "bg-white text-black min-h-screen p-8"}
      >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center">Predicted Picks of The Day</h1>
        <button
          className="px-4 py-2 border rounded bg-gray-700 text-white hover:bg-gray-600"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      
      <div className="flex gap-8">
        <div className="w-1/2 space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-32">Track Name:</label>
            <select 
              className="w-full p-2 border rounded bg-gray-200 text-black"
              value={selectedTrack}
              onChange={(e) => {
                setSelectedTrack(e.target.value);
                handleSelectionChange();
              }}
            >
              <option value=''>Pick an option</option>
              <option value='Gulfstream'>Gulfstream</option>
              <option value='Laurel'>Laurel</option>
              <option value='Santa Anita'>Santa Anita</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32">Talent Name:</label>
            <select 
              className="w-full p-2 border rounded bg-gray-200 text-black" 
              onChange={(e) => {
                setSelectedTalent(e.target.value);
                handleSelectionChange();
              }}
              value={selectedTalent}
            >
              <option value={''}>Pick an option</option>
              <option value={'clarkkent'}>Clark Kent</option>
              <option value={'brucewayne'}>Bruce Wayne</option>
              <option value={'peterparker'}>Peter Parker</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32">Pool Starts:</label>
            <select 
              className="w-full p-2 border rounded bg-gray-200 text-black" 
              onChange={handlePoolStartChange}
              value={
                selectedPoolStart === null
                  ? 'Pick an option'
                  : `Race ${selectedPoolStart + 1}`
              }
            >
              <option>Pick an option</option>
              {[...Array(12).keys()].map(i => (
                <option key={i}>Race {i + 1}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32">Pick Type:</label>
            <select 
              className="w-full p-2 border rounded bg-gray-200 text-black" 
              onChange={handlePickTypeChange}
              value={
                selectedPickType === 0
                  ? 'Pick an option'
                  : `Pick ${selectedPickType}`
              }
            >
              <option>Pick an option</option>
              <option>Pick 3</option>
              <option>Pick 4</option>
              <option>Pick 5</option>
              <option>Pick 6</option>
              <option>Pick All</option>
            </select>
          </div>
          <div className="flex justify-center mt-6">
            <button 
              className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600'
              onClick={handleDisplay}
            >
              Display
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Race</th>
                <th className="border p-2">1st</th>
                <th className="border p-2">2nd</th>
                <th className="border p-2">3rd</th>
                <th className="border p-2">4th</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((row, index) => (
                <tr 
                  key={index} 
                  className={
                    selectedPoolStart !== null && 
                    index >= selectedPoolStart && 
                    index < selectedPoolStart + selectedPickType
                      ? 'bg-green-500' 
                      : ''
                  }
                >
                  <td className="border p-2">Race {index + 1}</td>
                  {['first', 'second', 'third', 'fourth'].map((field) => (
                    <td className="border p-2" key={field}>
                      <input
                        type="text"
                        className={`w-full p-1 border rounded ${getColorStyles(row[field])}`}
                        value={row[field]}
                        onChange={(e) => 
                            handleInputChange(index, field, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className='mt-4 text-center'>
            <button
              className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
const handleRaceNumberChange = (e) => {
  const newTotalRaces = parseInt(e.target.value);
  setTotalRaces(newTotalRaces);
  setPredictions(Array(newTotalRaces).fill({ first: '', second: '', third: '', fourth: '' }));
};

<div className="flex items-center gap-4">
            <label className="w-32">Total Races:</label>
            <select 
              className="w-full p-2 border rounded bg-gray-200 text-black"
              value={totalRaces}
              onChange={handleRaceNumberChange}
            >
              {[...Array(20).keys()].map(i => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>


*/