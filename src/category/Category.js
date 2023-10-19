import DeleteCategoryButton from "./DeleteCategoryButton";

function Category(props) {
    return (
        <tr className="category">
            <td>{props.name}</td>
            <td>{props.priority}</td>
            <td>{props.activitiesNumber}</td>
            <td><DeleteCategoryButton id={props.id} removeCategory={props.removeCategory}/></td>
        </tr>
    )
}

export default Category