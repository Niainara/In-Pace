import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { connect } from 'react-redux';
import bouquet from './bouquet.jpg';
import gerbe from './gerbe.jpg';
import couronne from './couronne.jpg';

const mapStateToProps = state => ({
	ceremonie: state.ceremonieReducer,
	fleurs: state.fleursReducer,
	urne: state.urneReducer
});

const mapDispatchToProps = dispatch => ({
	onCeremonieY: () => dispatch({ type: "CEREMONIEY" }),
	onCeremonieN: () => dispatch({ type: "CEREMONIEN" }),
	onCeremonieIDK: () => dispatch({ type: "CEREMONIEIDK" }),
	onUrneY: () => dispatch({ type: "URNEY" }),
	onUrneN: () => dispatch({ type: "URNEN" }),
	onUrneIDK: () => dispatch({ type: "URNEIDK" }),
	sobre: (payload) => dispatch({ type: "SOBRE", payload: payload }),
	standard: (payload) => dispatch({ type: "STANDARD", payload: payload }),
	luxe: (payload) => dispatch({ type: "LUXE", payload: payload })
});

const suggestions = [
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '10' },
  { label: '11' },
  { label: '12' },
  { label: '13' },
  { label: '14' },
  { label: '15' },
  { label: '16' },
  { label: '17' },
  { label: '18' },
  { label: '20' },
  { label: '21' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
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
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
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
      fullWidth
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
      divRef={props.innerRef}
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

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class ChoiceOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedBox: true,
      age: '',
      sobre: null,
      standard: null,
      luxe: null,
      ceremonieOui: false,
      ceremonieNon: false,
      ceremonieJeNeSaisPas: true,
      urneOui: false,
      urneNon: false,
      urneJeNeSaisPas: true,
    };
		this.handleCeremonieY = this.handleCeremonieY.bind(this);
		this.handleCeremonieN = this.handleCeremonieN.bind(this);
		this.handleCeremonieIDK = this.handleCeremonieIDK.bind(this);
		this.handleUrneY = this.handleUrneY.bind(this);
		this.handleUrneN = this.handleUrneN.bind(this);
		this.handleUrneIDK = this.handleUrneIDK.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

	handleCeremonieY() {
		const { ceremonieOui } = this.state;
		const { ceremonieNon } = this.state;
		const { ceremonieJeNeSaisPas } = this.state;
		this.setState({ ceremonieOui: !ceremonieOui, ceremonieNon: false, ceremonieJeNeSaisPas: false });
		this.props.onCeremonieY();
	}

	handleCeremonieN() {
		const { ceremonieOui } = this.state;
		const { ceremonieNon } = this.state;
		const { ceremonieJeNeSaisPas } = this.state;
		this.setState({ ceremonieNon: !ceremonieNon, ceremonieOui: false, ceremonieJeNeSaisPas: false });
		this.props.onCeremonieN();
	}

	handleCeremonieIDK() {
		const { ceremonieOui } = this.state;
		const { ceremonieNon } = this.state;
		const { ceremonieJeNeSaisPas } = this.state;
		this.setState({ ceremonieJeNeSaisPas: !ceremonieJeNeSaisPas, ceremonieNon: false, ceremonieOui: false });
		this.props.onCeremonieIDK();
	}

	handleUrneY() {
		const { urneOui } = this.state;
		const { urneNon } = this.state;
		const { urneJeNeSaisPas } = this.state;
		this.setState({ urneOui: !urneOui, urneNon: false, urneJeNeSaisPas: false });
		this.props.onUrneY();
	}

	handleUrneN() {
		const { urneOui } = this.state;
		const { urneNon } = this.state;
		const { urneJeNeSaisPas } = this.state;
		this.setState({ urneNon: !urneNon, urneOui: false, urneJeNeSaisPas: false });
		this.props.onUrneN();
	}

	handleUrneIDK() {
		const { urneOui } = this.state;
		const { urneNon } = this.state;
		const { urneJeNeSaisPas } = this.state;
		this.setState({ urneJeNeSaisPas: !urneJeNeSaisPas, urneNon: false, urneOui: false });
		this.props.onUrneIDK();
	}

  handleChange = name => value => {
		console.log("name", name);
		console.log("value", value);
		console.log("sobre");
    this.setState({
      [name]: value,
    });
		if (name === "sobre") {
			this.props.sobre(value.value);
		} else if (name === "luxe") {
			this.props.luxe(value.value);
		} else {	
			this.props.standard(value.value);
		}
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
    const { ceremonieOui } = this.state;
    const { ceremonieNon } = this.state;
    const { ceremonieJeNeSaisPas } = this.state;
    const { urneOui } = this.state;
    const { urneNon } = this.state;
    const { urneJeNeSaisPas } = this.state;

    return (
      <React.Fragment>
        <div className="container__options">
          <div className="div-btn__options div-btn__options--background">
            <div className="div-btn__options__section">
              <div className="div-btn__options__section__description">
                <div className="div-btn__options__section__header"> Cérémonie </div>
                <div className={ceremonieOui ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleCeremonieY} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Oui</div>
                <div className={ceremonieNon ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleCeremonieN} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Non</div>
                <div className={ceremonieJeNeSaisPas ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleCeremonieIDK} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Je ne sais pas</div>
              </div>
            </div>
            <div className="div-btn__options__section">
              <div className="div-btn__options__section__description">
                <div className="div-btn__options__section__header"> Fleurs </div>
                <div className="div-btn__options__section__description__item">
                  <img className="div-btn__options__section__description__item__photo" src={bouquet} alt="pic" />
                  <div className="div-btn__options__section__description__item__selection">
                    <p className="div-btn__options__section__description__item__text">Sobre</p>
                    <div className={classes.root}>
                      <NoSsr>
                        <Select
                          classes={classes}
                          styles={selectStyles}
                          options={suggestions}
                          components={components}
                          value={this.state.sobre}
                          onChange={this.handleChange('sobre')}
                          placeholder="0"
                          isClearable
                        />
                      </NoSsr>
                    </div>
                  </div>
                </div>
                <div className="div-btn__options__section__description__item">
                  <img className="div-btn__options__section__description__item__photo" src={gerbe} alt="pic" />
                  <div className="div-btn__options__section__description__item__selection">
                    <p className="div-btn__options__section__description__item__text">Standard</p>
                    <div className={classes.root}>
                      <NoSsr>
                        <Select
                          classes={classes}
                          styles={selectStyles}
                          options={suggestions}
                          components={components}
                          value={this.state.standard}
                          onChange={this.handleChange('standard')}
                          placeholder="0"
                          isClearable
                          className="selector"
                        />
                      </NoSsr>
                    </div>
                  </div>
                </div>
                <div className="div-btn__options__section__description__item">
                  <img className="div-btn__options__section__description__item__photo" src={couronne} alt="pic" />
                  <div className="div-btn__options__section__description__item__selection">
                    <p className="div-btn__options__section__description__item__text">Luxe</p>
                    <div className={classes.root}>
                      <NoSsr>
                        <Select
                          classes={classes}
                          styles={selectStyles}
                          options={suggestions}
                          components={components}
                          value={this.state.luxe}
                          onChange={this.handleChange('luxe')}
                          placeholder="0"
                          isClearable
                        />
                      </NoSsr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-btn__options__section">
              <div className="div-btn__options__section__description">
                <div className=" div-btn__options__section__header"> Urne </div>
                <div className={urneOui ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleUrneY} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Oui</div>
                <div className={urneNon ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleUrneN} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Non</div>
                <div className={urneJeNeSaisPas ? 'div-btn__options__section__description__item--change  height__change' : 'div-btn__options__section__description__item  height__change'} onClick={this.handleUrneIDK} onKeyDown={this.handleKeyDown} role="button" tabIndex={0}>Je ne sais pas</div>
              </div>
            </div>
          </div>
          <div className="div-btn__options">
            <NavLink to="/choix-de-cercueil" className="container__btn__options container__btn-precedent__options">Précédent</NavLink>
            <NavLink to="/detail" className="container__btn__options container__btn-suivant__options">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ChoiceOptions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const styleComponent = withStyles(styles, { withTheme: true})(ChoiceOptions);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(styleComponent);
