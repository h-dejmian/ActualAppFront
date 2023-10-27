import DeleteCategoryButton from "./DeleteCategoryButton";
import UpdateCategoryModal from "../modals/UpdateCategoryModal";

function Category(props) {
    return (
        <tr className="category">
            <td>{props.name}</td>
            <td>{props.priority}</td>
            <td>{props.activitiesNumber}</td>
            <td> {props.timeSpentInMinutes} </td>
            <td><DeleteCategoryButton id={props.id} removeCategory={props.removeCategory}/></td>
            <td> <UpdateCategoryModal id={props.id}
                                      name={props.name}
                                      priority={props.priority}
                                      updateCategory={props.updateCategory}/> </td>
        </tr>
    )
}

export default Category