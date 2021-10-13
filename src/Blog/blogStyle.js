import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({

    brandTitle: {
        flexGrow: "1",
    },
    tagTitleTolbr: {
        justifyContent: "center"
    },
    tagTitle: {
        fontSize: "20px",
        textTransform: "uppercase",
    },
    blogContainer: {
        backgroundColor: "#1b1b1b",
        color: "white"
    },
    cardFeauture: {
        padding: "25px 20px",
        backgroundImage: `url(https://source.unsplash.com/random)`,
        backgroudPosition: "center",
    },
    cardFeautureBtn: {

    },
    cardGrid:{
        backgroundColor: "grey",
        color:"white",
    },
    footer: {
        backgroundColor: "grey",
        padding: "20px 0px"
    }
}));

export default useStyles;