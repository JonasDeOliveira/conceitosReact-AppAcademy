function If(props) {
    if(props.test) {
        return props.children
    } 

    return false
}

export default If