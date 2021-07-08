import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onShowAdd, valueShowAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={valueShowAdd ? 'red' : 'green'} text={valueShowAdd ? 'Close' : 'Add'} onClick={onShowAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Reminder',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;