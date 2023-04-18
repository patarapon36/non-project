import { useState, useEffect } from 'react';
import './App.css';

interface DataItem {
  userId: number;
  id: number;
  title: string;
  body: string;
  thumbnailUrl: any;
}
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
     
      {data && data.map((val) => (
        <div key={val.id}>
          <h3>{val.title}</h3>
          <img src={val.thumbnailUrl} alt={val.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
