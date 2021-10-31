import React from 'react'

const Navbar = () => {
    return (
        <div>
            Navbar
        </div>
    )
}

export default React.memo(Navbar) //*React.memo will prevent unnecessary renders when its parent Component will re-render