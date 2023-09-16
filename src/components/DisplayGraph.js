
import {SigmaContainer} from "@react-sigma/core"
import LoadGraph from "./LoadGraph"
import GraphEvents from "./GraphEvents"

export default function DisplayGraph({students,setStudents,setTarget}) {


    return (
        <SigmaContainer style={{width: '80%', height: '700px'}}>
            <LoadGraph students={students} setStudents={setStudents} />
            <GraphEvents setTarget={setTarget}/>
        </SigmaContainer>
    )

}