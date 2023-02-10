import PropTypes from 'prop-types'; 
import classnames from 'classnames'; 

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) => {
    const classes = classnames('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-green-500 bg-green-500 text-white': success,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        'text-yellow-500': outline && warning,
        'text-gray-900': outline && secondary,

    })
    return <button className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger }) => {
     const count = Number(!!primary) + 
     Number(!!secondary) 
     + Number(!!success) 
     + Number(!!warning)
     + Number(!!danger)
     if(count > 1 ) {
        return new Error(" There's something wrong")
    }

    }

 
}

export default Button; 