import { useEffect, useState} from "react"; 
import {useLoadGraph} from "@react-sigma/core"
import Graph from "graphology";
import "@react-sigma/core/lib/react-sigma.min.css";
import randomCordinates from "../utils/randomCordinates";

export default function LoadGraph({students,setStudents}) {
    const LoadGraph = useLoadGraph()
    const selectColor = (branch) => {
        switch (branch) {
            case 'Physics':
                return '#088395'
                break;
            case 'Mathmatics':
                return '#662549'
                break;
            case 'computer science':
                return '#F8FF95'
                break;
            
            default:
                break;
        }
    }
    useEffect(() => {
        const graph = new Graph()
        for (const iterator of students) {
            graph.addNode(iterator.id, {x: randomCordinates(), y: randomCordinates(), label: iterator.name, size: 10, color: selectColor(iterator.branch)})
        }
        for (const student of students) {
            for (const target of student.connections) {
             
                const targetPerson = students.find(stu => stu.id === target)
                graph.addEdge(student.id, targetPerson.id)
            }
        }
        LoadGraph(graph)
    },[LoadGraph,students])

    return null
}