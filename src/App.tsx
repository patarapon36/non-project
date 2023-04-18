import { useState, useEffect } from 'react';

import './App.css';
import FrontPage from './components/FrontPage/FrontPage.js';
<<<<<<< HEAD
import CallToActionWithVideo from './components/With background image and gradient/CallToActionWithVideo'
=======
interface DataItem {
  userId: number;
  id: number;
  title: string;
  body: string;
  thumbnailUrl: any;
}
>>>>>>> e524fcaad6bc171f9e5dd23b66493a0bf020a597
function App() {
  const [data, setData] = useState<DataItem[] | null>(null);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const convertData: DataItem[] = await res.json();
    console.log(convertData);
    setData(convertData);

  };
  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
     <FrontPage/>
     <CallToActionWithVideo/>
=======
      <FrontPage />
      {data && data.map((val) => (
        <div key={val.id}>
          <h3>{val.title}</h3>
          <img src={val.thumbnailUrl} alt={val.title} />
        </div>
      ))}
>>>>>>> e524fcaad6bc171f9e5dd23b66493a0bf020a597
    </div>
  );
}

export default App;
