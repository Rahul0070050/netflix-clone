import { createUseStyles } from 'react-jss'

export const useStyle = createUseStyles({
    home: {
        height: '95vh',
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            position: 'absolute',
        }
    },
    info: {
        position: 'absolute',
        width: '25%',
        color: 'wheat',
        margin: '22rem 0 0 10rem',
        fontSize: '1.5rem',
        '& button': {
            padding: '0.5rem 1.5rem',
        },
        '& button:last-child': {
            margin: '0.5rem',
        }
    },
    genres: {
        margin: '1rem 0'
    }
})