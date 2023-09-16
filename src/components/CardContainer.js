import Card from './Card'

export default function CardContainer({connections,setConnections,students,serchTerm}) {
    if (!serchTerm) {
        return null
    }
    return (
        <div>
            {
                students
                .filter( stu => stu.name.toLowerCase().includes(serchTerm.toLowerCase()) && (!connections.includes(stu.id)))
                .map(stu => <Card connections={connections} students={students} key={stu.id} stu={stu} setConnections={setConnections}/>)
            }
        </div>
    )

}