function Input(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            Todo &nbsp;
            <input type="text" required={true} value={props.input} onChange={props.handleChange}/>
            <input type="submit" value="Create" />
        </form>
    )
}

export default Input;