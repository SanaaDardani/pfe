// import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     formControl: {
//       margin: theme.spacing.unit,
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing.unit * 2,
//     },
//   });

// class AccountForm extends Component {
//     state = {
//         name: '',
//       };

//     handleChange = name => event => {
//         this.setState({ [name]: event.target.value });
//     };

// 	render() {
//         const { classes } = this.props;
// 		return (
// 			<React.Fragment>
// 				<Typography variant="h6" gutterBottom>
// 				</Typography>
//                     <Grid container spacing={24}>
//                         <FormControl variant="outlined" className={classes.formControl}>
//                             <Grid item xs={12}>
//                                 <Grid item xs={4}>
//                                     <InputLabel
//                                         ref={ref => { this.InputLabelRef = ref }}
//                                         htmlFor="outlined-modele-native-simple">
//                                         Modele
//                                     </InputLabel>
//                                     <Select
//                                     native value={this.state.age}
//                                     onChange={this.handleChange('modele')}
//                                     input={
//                                     <OutlinedInput
//                                         name="modele"
//                                         id="outlined-modele-native-simple" />
//                                     }
//                                 >
//                                     <option value="" />
//                                     <option value={10}>Renault</option>
//                                     <option value={20}>Fiat</option>
//                                     <option value={30}>Maseraty</option>
//                                 </Select>
//                                 </Grid>
//                                 {/* <Grid item xs={4}>
//                                     <InputLabel
//                                         ref={ref => { this.InputLabelRef = ref }}
//                                         htmlFor="outlined-marque-native-simple">
//                                         Marque
//                                     </InputLabel>
//                                     <Select
//                                     native value={this.state.age}
//                                     onChange={this.handleChange('marque')}
//                                     input={
//                                     <OutlinedInput
//                                         name="marque"
//                                         id="outlined-marque-native-simple" />
//                                     }
//                                 >
//                                     <option value="" />
//                                     <option value={10}>clio</option>
//                                     <option value={20}>dacia</option>
//                                     <option value={30}>fiat500</option>
//                                 </Select>
//                                 </Grid> */}
//                                 <Grid item xs={4}>
//                                     <Button variant="contained" color="primary">
//                                 Coter
//                             </Button>
//                                 </Grid>
//                             </Grid>
//                         </FormControl>
//                     </Grid>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default withStyles(styles)(AccountForm);
