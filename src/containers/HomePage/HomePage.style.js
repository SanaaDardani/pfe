const HomePageStyle = theme =>({

    card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: "122px",
    height: "70px",
    margin: '25px',
    borderRadius: '4px',
    display: 'flex',
    marginTop: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '300ms opacity, 300ms transform',
      '&:hover':{
        transform: 'scale(1.2)',
        opacity: 1
      }
    },
    link: 
    {
      textDecoration:'none',
      color:'#000',
    },
    root:
    {
      flexGrow: 1,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    stTitle :
    {
      textAlign:'center',
      whiteSpace: 'nowrap',
      fontSize:'15px'
    },
    price:
    {
      color: '#878787',
      fontSize: '12px',
      fontWeight: '700',
      paddingTop: '2px',
      transition: 'color .3s ease-in-out',
      marginTop: '4px',
    }
  });

export default HomePageStyle;