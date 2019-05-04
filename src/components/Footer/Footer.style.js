const FooterStyle = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing.unit * 8,
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%'
     
    }
  });

  export default FooterStyle