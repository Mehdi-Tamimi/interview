

import { useRef, useState } from 'react'
import '../styles/form.css'
import CardContainer from './CardContainer'
import axios from 'axios'
export default function AddNode({students,URL,setUpdated}) {
    const [serchTerm,setSearchTerm] = useState('')
    const [connections,setConnections] = useState([])
    const entranceRef = useRef(null)
    const nameRef = useRef(null)
    const branchRef = useRef(null)
    const handleOnClick = () => {
        const newStudent = {
            id: students.length +1,
            name: nameRef.current.value,
            entranceYear: entranceRef.current.value,
            branch: branchRef.current.value,
            connections: connections
        }
        axios.post(URL,newStudent)
        for (const iterator of connections) {
            const oldStudent = students.find(stu => stu.id == iterator)
            const updated = {...oldStudent, connections: [...oldStudent.connections,students.length+1]}
            axios.put(URL + `/${iterator}`,updated)
            setUpdated(false)
        }
    }
    const handleOnSubmit = (e) => {

        e.preventDefault()
        branchRef.current.value = 'Branch'
        nameRef.current.value =''
        entranceRef.current.value = 'Entrance year'
        setSearchTerm('')
        setConnections([])
        nameRef.current.focus()
        
    }
    
    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleOnSubmit}>
                <input ref={nameRef} placeholder='Name'/>
                <select ref={entranceRef}>
                    <option>Entrance year</option>
                    <option value={'2018'}>2018</option>
                    <option value={'2019'}>2019</option>
                    <option value={'2020'}>2020</option>
                    <option value={'2021'}>2021</option>
                    <option value={'2022'}>2022</option>

                </select>
                <select ref={branchRef}>
                    <option>Branch</option>
                    <option value={'Physics'}>Physics</option>
                    <option value={'Mathmatics'}>Mathmatics</option>
                    <option value={'Computer Science'}>Computer Science</option>
                </select>
                <div className='searchInputHolder'>
                    <input value={serchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Connections'/>
                    <CardContainer serchTerm={serchTerm} connections={connections} students={students} setConnections={setConnections}/>
                </div>
                <button onClick={handleOnClick}> Submit </button>
            </form>
        </div>
    )
}