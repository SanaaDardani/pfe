const styles = theme => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
    iframCar:{
        overflow:'hidden',
        border:'none',
    },
    select:{
        color:"#fff",
        '&:before':{
            borderBottom:"1px solid #fff"
        }
    },
    overlay:{ 
        position: 'absolute',
        width : '100%',
        height : '47%',
        background:'linear-gradient( rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.4),rgba(1, 11, 1, 0.9))',
        zIndex : 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
    
    } ,
    primary:{
        margin:theme.spacing.unit,
        background:"#559ee2",
        color:"#fff",
        padding:"10px 30px",
        textTransform:"none",
        borderRadius:"2px",
        fontSize:"16px",
    },
  });
export default styles;