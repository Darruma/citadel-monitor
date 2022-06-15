
function Dropdown({ children, drop }) {
    return (<div
        style={{
            opacity: drop ? 1 : 0,
            transition: "opacity 500ms ease-in-out",
            display: 'flex',
            flexDirection: 'column',
            zoom: '0.8'
        }}
    >
        {drop && children}
    </div>)
}
export default Dropdown