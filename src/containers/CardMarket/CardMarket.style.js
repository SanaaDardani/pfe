const CardMarket = theme =>({

    card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: "82px",
    height: "40px",
    margin: '46px 0 -34px 17px',
    borderRadius: '4px',
    display: 'flex',
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
    content:
    {
      padding:'0 !important',
      
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
      fontSize:'9px',
      textTransform:'uppercase',
      padding: '0px',
      margin: '0px'
    },
    price:
    {
      color: '#878787',
      fontSize: '9px',
      fontWeight: '700',
      paddingTop: '2px',
      transition: 'color .3s ease-in-out',
      marginTop: '4px',
    }
  });

export default CardMarket;