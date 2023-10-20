function MenuElement(props) {

    function handleClick(e) {
        e.preventDefault();
        props.setSelectedContent(props.id)
    }

    return (
        <a className="menu-element" onClick={handleClick} href="">
            <div className={props.className}></div>
            <div> {props.name} </div>
        </a>
    )
}

export default MenuElement;