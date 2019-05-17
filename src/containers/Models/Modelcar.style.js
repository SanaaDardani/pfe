const ModelCarStyle = theme => ({

  card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 30px rgba(0, 0, 0, 0.2)',
    width: '200px',
    height: '200px',
    margin: '25px',
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
  }
});
  export default ModelCarStyle