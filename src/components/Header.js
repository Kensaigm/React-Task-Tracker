import PropTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {
    const onClick = () => {

    }
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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
