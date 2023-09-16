import '../styles/header.css'
import Details from './Details'
export default function Header({student}) {


    return (
        <div className="header">
           <Details student={student}/> 
        </div>
    )

}