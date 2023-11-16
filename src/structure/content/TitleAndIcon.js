function TitleAndIcon(props) {
    return (
        <div className="title-icon">
            <div className={props.className}></div>
            <div> {props.name} </div>
        </div>
    )
}

export default TitleAndIcon