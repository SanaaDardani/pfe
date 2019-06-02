import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

// Marques
const marques = [
  { label: 'Renault' },
  { label: 'Dacia' },
  { label: 'Peugot' },
  { label: 'Clio' },
].map(marques => ({
  value: marques.label,
  label: marques.label,
}));


// Models
    const models = [
        { label: 'Logan' },
        { label: 'volswagen' },
        { label: 'Panda' },
        { label: 'Fiat500' },
    ].map(models => ({
        value: models.label,
        label: models.label,
    }));
  
    const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
        theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    marquesValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    });

    function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
            >
            {props.children}
        </Typography>
    );
    }

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
	    style={{width:"70%",paddingTop:15}}
        InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function MarquesValue(props) {
  return (
    <Typography className={props.selectProps.classes.marquesValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ModelsValue(props) {
    return (
      <Typography className={props.selectProps.classes.modelsValue} {...props.innerProps}>
        {props.children}
      </Typography>
    );
  }

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}


const components = {
  Control,
  NoOptionsMessage,
  Option,
  Placeholder,
  MarquesValue,
  ModelsValue,
  ValueContainer,
};

class CoteForm extends React.Component {
  state = {
    marques: null,
    models: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={6}>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    options={marques}
                    components={components}
                    value={this.state.marques}
                    onChange={this.handleChange('marques')}
                    placeholder="Marques"
                    isClearable
                />
            </Grid>
            <div className={classes.divider} />
            <Grid item xs={6}>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    options={models}
                    components={components}
                    value={this.state.models}
                    onChange={this.handleChange('models')}
                    placeholder="Models"
                    isClearable
                />
            </Grid>
        </Grid>
    );
  }
}

CoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(CoteForm);
