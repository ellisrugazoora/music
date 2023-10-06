function Testcomponent(props){
    return (
        <div /*hidden={props.visible}*/>
            <p>
                {props.test} <br></br>
                {props.location}
            </p>
        </div>
    )
}

export default Testcomponent;