function Header(props) {
    console.log(props);
    return (
        <h1>Hello, {props.firstName} </h1>
    );
}

export default Header;