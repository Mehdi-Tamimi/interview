import AddNode from "./components/AddNode";
import DisplayGraph from "./components/DisplayGraph";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import './styles/App.css'
import getData from "./utils/getData";
import Details from "./components/Details";


const URL = 'http://localhost:3000/students'
function App() {
  const [students,setStudents] = useState([])
  const [updated,setUpdated] = useState(true)
  const [target,setTarget] = useState(null)
  const student = students.find(stu => stu.id === target)
    async function hadleData() {
        const data = await getData(URL)
        setStudents(data)
        setUpdated(true)
    }
    useEffect(() => {
        hadleData()

    },[])
  return (
    <div>
      <Header student={student}/>
      <div className="body">
        <DisplayGraph setTarget={setTarget} students={students} setStudents={setStudents} />
        <AddNode  setUpdated={setUpdated} students={students} URL={URL} />
      </div>
      
    </div>
    
  );
}

export default App;
