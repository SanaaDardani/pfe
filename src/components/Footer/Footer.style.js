const FooterStyle = theme => ({
  paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      backgroundImage: 'linear-gradient(to right top, #845ec2, #0085e4, #00a2e5, #00b9cc, #00c9a7)',
    },
    title:
    {
      color:"#fff"
    },
    parag:
    {
      color:"#fff"
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