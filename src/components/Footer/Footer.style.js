const FooterStyle = theme => ({
  paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      background:"#B2EBF2"
    },
    h6:{
      color:"#1A237E"
    }
    // footer: {
    //   backgroundColor: theme.palette.background.paper,
    //   marginTop: theme.spacing.unit * 8,
    //   position: 'fixed',
    //   left: '0',
    //   bottom: '0',
    //   width: '100%'
    // }
  });

  export default FooterStyle