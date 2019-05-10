import React from 'react'

import './App.css'
import ChangeImages from './ChangeImages'
import ShowImage from './ShowImage'

const images = ["https://i.annihil.us/u/prod/marvel/i/mg/9/b0/536d69b8ae3b4/detail.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/e/c0/51b5f6dacc2d1/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/9/a0/59933ea5b5c2e/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/f/03/4f674b7218168/detail.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/2/80/5a83133fa0008/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/e/30/4f63909280397/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/5991fa03329b7/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/3/50/5994604e20b1e/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/d/40/5196582d03800/detail.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/b/90/5a06251af2eae/clean.jpg", "https://i.annihil.us/u/prod/marvel/i/mg/f/30/5bb7bfc2e703f/detail.jpg"]

function App() {
  // console.log(images)
  return (
    <div className="App">
      <ChangeImages images={images}/>
    </div>
  );
}

export default App;
