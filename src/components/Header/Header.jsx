import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HeaderStyle from './Header.style';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logoCar.png'


  class PrimarySearchAppBar extends React.Component {
    state = {
      mobileMoreAnchorEl: null,
    };
  
    handleMobileMenuOpen = event => {
      this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };
  
    handleMobileMenuClose = () => {
      this.setState({ mobileMoreAnchorEl: null });
    };
  
    render() {
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
 
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  
      return (
        <div className={classes.root}>
            <AppBar position="absolute" color="default" className={classes.styleAppBar}>
                <Toolbar>
                    <Avatar alt="Logo" src={logo} className={classes.avatar} />  
                        <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <NavLink to="/" exact className={classes.link} activeStyle={{color:'#fff'}} >
                                    HomePage
                                </NavLink>
                                <NavLink to="/auth" exact className={classes.link} activeStyle={{color:'#ff'}} >
                                    Auth
                                </NavLink>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                    <MoreIcon />
                                </IconButton>
                            </div>
                </Toolbar>
            </AppBar>
                {renderMobileMenu}
        </div>
      );
    }
  }
  PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(HeaderStyle)(PrimarySearchAppBar);  