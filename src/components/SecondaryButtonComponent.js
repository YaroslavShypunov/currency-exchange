import React from 'react'
import { Fab, Box } from '@material-ui/core';
import '../sass/secondaryButtonComponent.sass';

const SecondaryButtonComponent = ({ icon, title, className = '', onClick }) => {

    return (
        <div className={`secondary-button ${className}`}>
            {onClick ?
                <Fab variant='extended' color='secondary' onClick={() => onClick()} >
                    {icon} {title}
                </Fab>
                :
                <Box boxShadow={3} className='not-button'>
                    {icon} {title}
                </Box>
    }
        </div>

    )
}


export default SecondaryButtonComponent;