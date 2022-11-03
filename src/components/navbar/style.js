import { createUseStyles } from 'react-jss'


export const useStyle = createUseStyles({
    nav: {
        padding: '1rem 2rem',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a' : {
            fontSize: '2rem',
            color: 'red',
        }
    }
})