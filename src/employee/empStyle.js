import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(theme => ({
    rootBg: {
        backgroundColor: "#F9F6FA",
        height: "100%"
    },
    serachGrid: {
        flexGrow: "1",
    },
    empToolbar: {
        backgroundColor: "#fbfbfb"
    },
    sercahInput: {
        padding: "0px 8px",
        opacity: "0.6",
        fontSize: "0.8rem",
        '&:hover': {
            backgroundColor: "#f2f2f2",
            borderRadius: "5%"
        },
        '& .MuiSvgIcon-root ': {
            marginRight: "8px"
        }
    },
    pageHeader: {
        display: "flex",
        padding: "20px",

    },
    pageIcon: {
        padding: "20px"
    },
    pageContent: {
        paddingLeft: "20px",
        '& .MuiTypography-h6': {
            opacity: "0.6"
        },
        '& .MuiTypography-subtitle2': {
            opacity: "0.4"
        }
    },
    formRoot: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin: '8px',
            opacity: "0.6"
        },

    },
    employeePaper: {
        margin: "20px",
        padding: "12px"
    }
}))

export default useStyles;