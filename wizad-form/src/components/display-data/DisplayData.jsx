import "./style.css"

const DisplayUserData = (props)=>{
    return (
        <>
        <tr>
            <th>{props.data[0]}</th>
            <th>:</th>
            <td>{props.data[1]}</td>
        </tr>
        </>
    )
}
const DisplayData = (props)=>{
    const user = props.user;

   
return(
    <div className="form-data">
<table>
    <tbody>
   {Object.entries(user).map((item,idx) => <DisplayUserData key={idx} data={item}/> )}
   </tbody>
</table>
    </div>
)
}

export default DisplayData