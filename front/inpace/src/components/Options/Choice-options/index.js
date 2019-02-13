import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  checked: {},
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class ChoiceOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedBox: true,
      age: '',
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="container__options">
          <div className="div-btn__options">
            <div className="div-btn__options__section">
              <div className="div-btn__options__section__header"> Cérémonie </div>
              <div className="div-btn__options__section__description">
                <FormControlLabel
                  control={<Checkbox checked={this.setState.checkedBox} onChange={this.handleChange('checkedBox')} value="checkedBox" classes={{ root: classes.root, checked: classes.checked }} />}
                  label="Oui"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.setState.checkedBox} onChange={this.handleChange('checkedBox')} value="checkedBox" classes={{ root: classes.root, checked: classes.checked }} />}
                  label="Je ne sais pas"
                />
              </div>
            </div>
            <div className="div-btn__options__section">
              <div className="div-btn__options__section__header"> Fleurs </div>
              <div className="div-btn__options__section__description">
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Expansion Panel 1</Typography>
                    <FormControl className={classes.margin}>
                      <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
                      Nbre
                      </InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChangeAge}
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                      >
                        <MenuItem value="">
                          <em>0</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Expansion Panel 2</Typography>
                    <FormControl className={classes.margin}>
                      <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Nbre
                      </InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChangeAge}
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                      >
                        <MenuItem value="">
                          <em>0</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                    <FormControl className={classes.margin}>
                      <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Nbre
                      </InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChangeAge}
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                      >
                        <MenuItem value="">
                          <em>0</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </ExpansionPanelSummary>
                </ExpansionPanel>
              </div>
            </div>
            <div className="div-btn__options__section">
              <div className=" div-btn__options__section__header"> Urne </div>
              <div className="div-btn__options__section__description">
                <FormControlLabel
                  control={<Checkbox checked={this.setState.checkedBox} onChange={this.handleChange('checkedBox')} value="checkedBox" classes={{ root: classes.root, checked: classes.checked }} />}
                  label="Oui"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.setState.checkedBox} onChange={this.handleChange('checkedBox')} value="checkedBox" classes={{ root: classes.root, checked: classes.checked }} />}
                  label="Je ne sais pas"
                />
              </div>
            </div>
          </div>
          <div className="div-btn__options">
            <NavLink to="/choix-de-cercueil" className="container__btn__options container__btn-precedent__options" type="div">Précédent</NavLink>
            <NavLink to="/choix-des-options" className="container__btn__options container__btn-suivant__options" type="div">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ChoiceOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChoiceOptions);
