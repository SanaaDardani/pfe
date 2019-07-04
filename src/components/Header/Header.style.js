const HeaderStyle = theme => ({

    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    styleAppBar:
    {
      background: '#559ee2',
      boxShadow: '0 6px 20px 0 rgba(85, 158, 226, 0.2)',
      maxHeight: '40px',
      minHeight: '55px',
      position: "relative"
    },
      avatar: {
      margin: 6,
      width: 60,
      height: 50,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    link: {
      margin: theme.spacing.unit,
      color:'rgba(255, 255, 255, 0.5)',
      textDecoration:'none',
      fontWeight:500,
      fontSize:'16px',
      '&:hover': {
        color: "#fff",
     },
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

  export default HeaderStyle