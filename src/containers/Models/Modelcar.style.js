const ModelCarStyle = theme => ({

  card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: '166px',
    height: '130px',
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
  title: {
    fontSize: 14,
  },
  barChart:{
    margin:'0 auto'
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
    float: 'left',
    color: '#333',
    fontSize: '20px',
    fontWeight: '700',
    paddingTop: '2px',
    transition: 'color .3s ease-in-out',
    marginTop: '4px'
  }
});
  export default ModelCarStyle