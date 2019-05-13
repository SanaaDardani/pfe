const HomePageStyle = theme =>({

    card: {
      maxWidth: 170,
      maxHeight:100
    },
    spacing:
    {
      margin:'.25rem',
      marginTop:'1rem'
    },
    link: 
    {
      textDecoration:'none',
      color:'#878787'
    },
    root:
    {
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
      whiteSpace: 'nowrap'
    },
    price:
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default HomePageStyle;