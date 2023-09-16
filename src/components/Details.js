

export default function Details({student}) {
    if (!student) {
        return null
    }
    return (
        <div>
            <div>
                {student.name}
            </div>
            <div>
                {student.entranceYear}
            </div>
            <div>
                {student.branch}
            </div>
        </div>
    )

}