import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, doc, updateDoc, setDoc } from './firebase';

const App = () => {
  const [names, setNames] = useState([]);
  const [zeroNames, setZeroNames] = useState([]);
  const [topNames, setTopNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const querySnapshot = await getDocs(collection(db, "names"));
      const namesData = [];
      querySnapshot.forEach((doc) => {
        namesData.push({ id: doc.id, ...doc.data() });
      });
      setNames(namesData);
    };

    fetchNames();
  }, []);

  useEffect(() => {
    const sortedNames = [...names].sort((a, b) => b.count - a.count);
    setZeroNames(sortedNames.filter(name => name.count === 0));
    setTopNames(sortedNames.slice(0, 3));
  }, [names]);

  const incrementCount = async (id) => {
    const nameRef = doc(db, "names", id);
    const newNameData = names.map(name => {
      if (name.id === id) {
        return { ...name, count: name.count + 1 };
      }
      return name;
    });
    setNames(newNameData);

    const nameToUpdate = newNameData.find(name => name.id === id);
    await updateDoc(nameRef, { count: nameToUpdate.count });
  };

  return (
    <div>
      <h1>Name Counter</h1>
      {names.map(name => (
        <button key={name.id} onClick={() => incrementCount(name.id)}>
          {name.name} ({name.count})
        </button>
      ))}
      <h2>Names with 0 Count</h2>
      <ul>
        {zeroNames.map(name => (
          <li key={name.id}>{name.name} ({name.count})</li>
        ))}
      </ul>
      <h2>Top 3 Names</h2>
      <ul>
        {topNames.map(name => (
          <li key={name.id}>{name.name} ({name.count})</li>
        ))}
      </ul>
      
    </div>
  );
};

export default App;


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
