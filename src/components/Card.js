import { useEffect } from "react"



export default function Card({stu,connections,setConnections,students}) {
    

    const handleOnClick = (e) => {
        e.preventDefault()
        const newConnection = Number(e.target.id)
        if (!connections.includes(newConnection)) {
            setConnections([...connections,newConnection])
        }
    }
    return (
        <div>
            <div>
                <div>
                    {stu.name}
                </div>
                <div>
                    {stu.branch}
                </div>
            </div>
            <div>
                <button id={stu.id}  onClick={handleOnClick}>
                    add
                </button>
            </div>
        </div>
    )
}