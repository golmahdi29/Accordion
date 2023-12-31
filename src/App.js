import React, { useState } from 'react';
import data from './data';
import Question from './Components/Question';

function App() {

  const [infos, setInfos] = useState(data)
  
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {/* data mapping */}
          {infos.map(info => <Question key={info.id} {...info} />)}
        </section>
      </div>
    </main>
  );
}

export default App;
