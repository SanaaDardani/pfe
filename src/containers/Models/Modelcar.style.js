const ModelCarStyle = theme => ({

  card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: "82px",
    height: "40px",
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginTop: '14px',
    transition: '300ms opacity, 300ms transform',
      '&:hover':{
        transform: 'scale(1.2)',
        opacity: 1
      }
    },
    content:
    {
      padding:'0 !important',
    },
  spacing:
  {
    margin:'.25rem',
    marginTop:'1rem'
  },
  link: 
  {
    textDecoration:'none',
    color:'#000',
  },
  root:
  {
    flexGrow: 1,
    paddingTop:'30px'
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
  export default ModelCarStyle