import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "12px"
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '20px'
    },
    cardGrid: {
        marginTop:"20px",
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection:"column"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContainer: {
        flexGrow: 1
    }
}));

export default useStyles;
