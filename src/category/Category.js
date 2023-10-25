import DeleteCategoryButton from "./DeleteCategoryButton";

function Category(props) {
    return (
        <tr className="category">
            <td>{props.name}</td>
            <td>{props.priority}</td>
            <td>{props.activitiesNumber}</td>
            <td> {props.timeSpentInMinutes} </td>
            <td><DeleteCategoryButton id={props.id} removeCategory={props.removeCategory}/></td>
            <td> - </td>
        </tr>
    )
}

export default Category