import {createUseStyles} from 'react-jss';

export const useStyle = createUseStyles({
    section: {
        padding: '1rem 0'
    },
    h1: {
        color: 'white',
        margin: '2rem',
        fontSize: '3rem'
    },
    row: {
        marginLeft: '2rem',
        display: 'flex',
        width: '95vw',
        height: '21rem',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    card: {
        margin: '1rem 0.5rem',
        height: '4rem',
        position: 'relative',
        transition: 'all 1s ease-in-out',
        '&:hover div': {
            display: 'block',
            
        }
    },
    info: {
        display: 'none',
        position: 'absolute',
        width: '100%',
        maxHeight: '6rem',
        overflowY: 'auto',
        color: 'white',
        top: '12rem',
        padding: '0 0.3rem',
        paddingTop: '1rem',
        fontSize: '1.2rem',
        backgroundImage: 'linear-gradient(bottom to top,transpirant, black)',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    name: {
        fontWeight: '500'
    },
    rating: {
        position: 'absolute',
        top: '0rem',
        right: '0',
        padding: '0.4rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '0 0 0 10px'
    }
})