const HeaderStyle = theme => ({

    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    styleAppBar:
    {
      backgroundImage: 'linear-gradient(45deg, #0288d1, #26c6da)',
      boxShadow: '0 6px 20px 0 rgba(38, 198, 218, .5)',
      maxHeight: '70px',
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
      color:'#333',
      textDecoration:'none',
      fontWeight:700,
      fontSize:'18px',
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