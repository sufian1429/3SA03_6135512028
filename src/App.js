import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
const word = "Hello";
function App() {
 return (
 <div>
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
 );
}
export default App;