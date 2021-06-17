import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <button style={{ backgroundColor: 'white' }}>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'blue',
    backgroundColor: 'white',
}

export default Header
