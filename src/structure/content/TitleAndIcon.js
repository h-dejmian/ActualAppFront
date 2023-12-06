function TitleAndIcon(props) {
    return (
        <div className="title-icon">
            <div className={props.className} aria-label="icon"></div>
            <div> {props.name} </div>
        </div>
    )
}

export default TitleAndIcon