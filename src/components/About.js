import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p><Link to='https://github.com/Kensaigm/React-Task-Tracker/'>GitHub Link</Link></p>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    )
}

export default About
