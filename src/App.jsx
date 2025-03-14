// import { useState } from 'react';

// function App() {
//   const [predictions, setPredictions] = useState(
//     Array(12).fill({ first: '', second: '', third: '', fourth: '' })
//   );
//   const [darkMode, setDarkMode] = useState(false);

//   const getColorStyles = (value) => {
//     const styles = {
//       '1': 'bg-red-500 text-white',
//       '2': 'bg-white text-black',
//       '3': 'bg-blue-500 text-white',
//       '4': 'bg-yellow-500 text-black',
//       '5': 'bg-green-500 text-black',
//       '6': 'bg-black text-yellow-500',
//       '7': 'bg-orange-500 text-black',
//       '8': 'bg-pink-500 text-black',
//       '9': 'bg-teal-400 text-black',
//       '10': 'bg-purple-900 text-white',
//       '11': 'bg-gray-500 text-red-600',
//       '12': 'bg-lime-300 text-black',
//       '13': 'bg-orange-800 text-white',
//       '14': 'bg-red-900 text-yellow-500',
//       '15': 'bg-yellow-100 text-black',
//       '16': 'bg-blue-200 text-red-500',
//       '17': 'bg-blue-800 text-white',
//       '18': 'bg-green-900 text-yellow-500',
//       '19': 'bg-blue-900 text-red-500',
//       '20': 'bg-fuchsia-500 text-yellow-500'
//     };
//     return styles[value] || 'bg-gray-200 text-black';
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedPredictions = predictions.map((item, i) =>
//       i === index ? { ...item, [field]: value } : item
//     );
//     setPredictions(updatedPredictions);
//   };

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-8" : "bg-white text-black min-h-screen p-8"}>
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-center">Predict Picks</h1>
//         <button
//           className="px-4 py-2 border rounded bg-gray-700 text-white hover:bg-gray-600"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
      
//       <div className="flex gap-8">
//         <div className="w-1/2 space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-32">Track Name</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//               <option>Gulfstream Park</option>
//               <option>Sant Anita</option>
//               <option>Laurel Park</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-32">Talent Name</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//               <option>Clark Kent</option>
//               <option>Bruce Wayne</option>
//               <option>Peter Parker</option>
//               <option>Tony Starks</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pool Starts</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//               <option>Race 1</option>
//               <option>Race 2</option>
//               <option>Race 3</option>
//               <option>Race 4</option>
//               <option>Race 5</option>
//               <option>Race 6</option>
//               <option>Race 7</option>
//               <option>Race 8</option>
//               <option>Race 9</option>
//               <option>Race 10</option>
//               <option>Race 11</option>
//               <option>Race 12</option>
//             </select>
//           </div>
//           {/* <div className="flex items-center gap-4">
//             <label className="w-32">Pronosticos Del Dia</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div> */}
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pick Type</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//             <option>Pick an option</option>
//               <option>Pick 4</option>
//               <option>Pick 5</option>
//               <option>Pick 6</option>
//             </select>
//           </div>
//         </div>
//         <div className="w-1/2">
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Race</th>
//                 <th className="border p-2">1st</th>
//                 <th className="border p-2">2nd</th>
//                 <th className="border p-2">3rd</th>
//                 <th className="border p-2">4th</th>
//               </tr>
//             </thead>
//             <tbody>
//               {predictions.map((row, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">Race {index + 1}</td>
//                   {['first', 'second', 'third', 'fourth'].map((field) => (
//                     <td className="border p-2" key={field}>
//                       <input
//                         type="text"
//                         className={`w-full p-1 border rounded ${getColorStyles(row[field])}`}
//                         value={row[field]}
//                         onChange={(e) => handleInputChange(index, field, e.target.value)}
//                       />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="mt-4 text-center">
//             <button
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600"
//               onClick={() => console.log(predictions)}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






// import { useState } from 'react';

// function App() {
//   const [predictions, setPredictions] = useState(
//     Array(12).fill({ first: '', second: '', third: '', fourth: '' })
//   );
//   const [darkMode, setDarkMode] = useState(false);

//   const getColorStyles = (value) => {
//     const styles = {
//       '1': 'bg-red-500 text-white',
//       '2': 'bg-white text-black',
//       '3': 'bg-blue-500 text-white',
//       '4': 'bg-yellow-500 text-black',
//       '5': 'bg-green-500 text-black',
//       '6': 'bg-black text-yellow-500',
//       '7': 'bg-orange-500 text-black',
//       '8': 'bg-pink-500 text-black',
//       '9': 'bg-teal-400 text-black',
//       '10': 'bg-purple-900 text-white',
//       '11': 'bg-gray-500 text-red-600',
//       '12': 'bg-lime-300 text-black',
//       '13': 'bg-orange-800 text-white',
//       '14': 'bg-red-900 text-yellow-500',
//       '15': 'bg-yellow-100 text-black',
//       '16': 'bg-blue-200 text-red-500',
//       '17': 'bg-blue-800 text-white',
//       '18': 'bg-green-900 text-yellow-500',
//       '19': 'bg-blue-900 text-red-500',
//       '20': 'bg-fuchsia-500 text-yellow-500'
//     };
//     return styles[value] || 'bg-gray-200 text-black';
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedPredictions = predictions.map((item, i) =>
//       i === index ? { ...item, [field]: value } : item
//     );
//     setPredictions(updatedPredictions);
//   };

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-8" : "bg-white text-black min-h-screen p-8"}>
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-center">Predict Picks</h1>
//         <button
//           className="px-4 py-2 border rounded bg-gray-700 text-white hover:bg-gray-600"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
      
//       <div className="flex gap-8">
//         <div className="w-1/2 space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-32">Track Name</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-32">Talent Name:</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-32">Race Number:</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pick Type:</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
//         </div>
//         <div className="w-1/2">
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Race</th>
//                 <th className="border p-2">1st</th>
//                 <th className="border p-2">2nd</th>
//                 <th className="border p-2">3rd</th>
//                 <th className="border p-2">4th</th>
//               </tr>
//             </thead>
//             <tbody>
//               {predictions.map((row, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">Race {index + 1}</td>
//                   {['first', 'second', 'third', 'fourth'].map((field) => (
//                     <td className="border p-2" key={field}>
//                       <input
//                         type="text"
//                         className={`w-full p-1 border rounded ${getColorStyles(row[field])}`}
//                         value={row[field]}
//                         onChange={(e) => handleInputChange(index, field, e.target.value)}
//                       />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="mt-4 text-center">
//             <button
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600"
//               onClick={() => console.log(predictions)}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








// import { useState } from 'react';

// function App() {
//   const [predictions, setPredictions] = useState(
//     Array(12).fill({ first: '', second: '', third: '', fourth: '' })
//   );
//   const [darkMode, setDarkMode] = useState(false);

//   const handleInputChange = (index, field, value) => {
//     const updatedPredictions = predictions.map((item, i) =>
//       i === index ? { ...item, [field]: value } : item
//     );
//     setPredictions(updatedPredictions);
//   };

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-8" : "bg-white text-black min-h-screen p-8"}>
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-center">Predict Picks</h1>
//         <button
//           className="px-4 py-2 border rounded bg-gray-700 text-white hover:bg-gray-600"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
      
//       <div className="flex gap-8">
//         {/* Left Section - Dropdowns */}
//         <div className="w-1/2 space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-32">Track Name</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Talent Name</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Race Number</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pronosticos Del Dia</label>
//             <select className="w-full p-2 border rounded bg-gray-200 text-black">
//               <option>Pick an option</option>
//             </select>
//           </div>
//         </div>

//         {/* Right Section - Table */}
//         <div className="w-1/2">
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Race</th>
//                 <th className="border p-2">1st</th>
//                 <th className="border p-2">2nd</th>
//                 <th className="border p-2">3rd</th>
//                 <th className="border p-2">4rd</th>
//               </tr>
//             </thead>
//             <tbody>
//               {predictions.map((row, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">Carrera {index + 1}</td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded bg-gray-200 text-black"
//                       value={row.first}
//                       onChange={(e) => handleInputChange(index, 'first', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded bg-gray-200 text-black"
//                       value={row.second}
//                       onChange={(e) => handleInputChange(index, 'second', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded bg-gray-200 text-black"
//                       value={row.third}
//                       onChange={(e) => handleInputChange(index, 'third', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded bg-gray-200 text-black"
//                       value={row.fourth}
//                       onChange={(e) => handleInputChange(index, 'fourth', e.target.value)}
//                     />
//                     </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           <div className="mt-4 text-center">
//             <button
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600"
//               onClick={() => console.log(predictions)}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

// function App() {
//   const [predictions, setPredictions] = useState(
//     Array(12).fill({ first: '', second: '', third: '', fourth:'' })
//   );

//   const handleInputChange = (index, field, value) => {
//     const updatedPredictions = predictions.map((item, i) =>
//       i === index ? { ...item, [field]: value } : item
//     );
//     setPredictions(updatedPredictions);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Predict Picks</h1>
      
//       <div className="flex gap-8">
//         {/* Left Section - Dropdowns */}
//         <div className="w-1/2 space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-32">Track Name</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Talent Name</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Race Number</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pronosticos Del Dia</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
//         </div>

//         {/* Right Section - Table */}
//         <div className="w-1/2">
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Race</th>
//                 <th className="border p-2">1st</th>
//                 <th className="border p-2">2nd</th>
//                 <th className="border p-2">3rd</th>
//                 <th className="border p-2">4th</th>
//               </tr>
//             </thead>
//             <tbody>
//               {predictions.map((row, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">Carrera {index + 1}</td>
//                   <td className="border p-2 color bg-red-200">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded"
//                       value={row.first}
//                       onChange={(e) => handleInputChange(index, 'first', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2 caret-amber-50">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded"
//                       value={row.second}
//                       onChange={(e) => handleInputChange(index, 'second', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2 color bg-blue-200">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded"
//                       value={row.third}
//                       onChange={(e) => handleInputChange(index, 'third', e.target.value)}
//                     />
//                   </td>
//                   <td className="border p-2 color bg-yellow-200">
//                     <input
//                       type="text"
//                       className="w-full p-1 border rounded"
//                       value={row.fourth}
//                       onChange={(e) => handleInputChange(index, 'fourth', e.target.value)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           <div className="mt-4 text-center">
//             <button
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600"
//               onClick={() => console.log(predictions)}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

























// import { useState } from 'react'

// function App() {
//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Predict Picks</h1>
      
//       <div className="flex gap-8">
//         {/* Left Section - Dropdowns */}
//         <div className="w-1/2 space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-32">Track Name</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Talent Name</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Race Number</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <label className="w-32">Pronosticos Del Dia</label>
//             <select className="w-full p-2 border rounded">
//               <option>Pick an option</option>
//             </select>
//           </div>
//         </div>

//         {/* Right Section - Table */}
//         <div className="w-1/2">
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Race</th>
//                 <th className="border p-2">1st</th>
//                 <th className="border p-2">2nd</th>
//                 <th className="border p-2">3rd</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...Array(12)].map((_, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">Carrera {index + 1}</td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                   <td className="border p-2"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           <div className="mt-4 text-center">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

//

//----------------------------------------------------------------------

 import { useState } from 'react';

function App() {
  const [predictions, setPredictions] = useState(
    Array(12).fill({ first: '', second: '', third: '', fourth: '' })
  );
  const [darkMode, setDarkMode] = useState(false);
  const [focusedRace, setFocusedRace] = useState(null);

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

  const handleInputChange = (index, field, value) => {
    const updatedPredictions = predictions.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setPredictions(updatedPredictions);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-8" : "bg-white text-black min-h-screen p-8"}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center">Predict Picks of The Day</h1>
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
            <select className="w-full p-2 border rounded bg-gray-200 text-black">
              <option>Pick an option</option>
              <option>Gulfstream Park</option>
              <option>Santa Anita</option>
              <option>Laurel Park</option>
              <option>Pimlico</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32">Talent Name:</label>
            <select className="w-full p-2 border rounded bg-gray-200 text-black">
              <option>Pick an option</option>
              <option>Clark Kent</option>
              <option>Bruce Wayne</option>
              <option>Peter Parker</option>
              <option>Tony Stark</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32">Pool Starts:</label>
            <select
              className="w-full p-2 border rounded bg-gray-200 text-black"
              onChange={(e) => setFocusedRace(parseInt(e.target.value.replace('Race ', '')) - 1)}
            >
              <option>Pick an option</option>
              {[...Array(12).keys()].map(i => (
                <option key={i}>Race {i + 1}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <label className="w-32">Pick Type:</label>
            <select className="w-full p-2 border rounded bg-gray-200 text-black">
              <option>Pick an option</option>
              <option>Pick 3</option>
              <option>Pick 4</option>
              <option>Pick 5</option>
              <option>Pick 6</option>
              <option>Pick All</option>
            </select>
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
                <tr key={index} className={focusedRace === index ? 'bg-green-500' : ''}>
                  <td className="border p-2">Race {index + 1}</td>
                  {['first', 'second', 'third', 'fourth'].map((field) => (
                    <td className="border p-2" key={field}>
                      <input
                        type="text"
                        className={`w-full p-1 border rounded ${getColorStyles(row[field])}`}
                        value={row[field]}
                        onChange={(e) => handleInputChange(index, field, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-green-600"
              onClick={() => console.log(predictions)}
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





