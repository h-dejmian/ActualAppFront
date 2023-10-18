function MenuElement(props) {

    function handleClick(e) {
        e.preventDefault();
        props.setSelectedContent(props.id)
    }

    return (
        <a className="menu-element" onClick={handleClick} href=""> {props.name} </a>
    )
}

export default MenuElement;