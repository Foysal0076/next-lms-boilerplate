import React from 'react'

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}

export default React.memo(Footer) //*React.memo will prevent unnecessary renders when its parent Component will re-render