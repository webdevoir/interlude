import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout();
  }

  activateLink(){
    $('.active-page').removeClass('active-page');
    const activeLink = "." + this.props.router.location.pathname.slice(1) + "-link";
    $(activeLink).addClass('active-page');
  }

  componentWillReceiveProps(newProps){
    if (!newProps.session.currentUser){
      this.props.router.push("/");
    }
    this.activateLink();
  }

  componentDidMount(){
    this.activateLink();
  }

  render(){

    return(
      <header className="nav-bar-wrapper">
        <div className="nav-bar-logo" />
        <nav className="nav-bar-links">
          <ul>

            <li className="search-link">
              <Link to={ "/search" }><div className="icon-search">Search</div></Link>
            </li>

            <li className="browse-link">
              <Link to={ "/browse" }><div className="icon-browse">Browse</div></Link>
            </li>

            <li className="your-music-link">
              <Link to={ "/your-music" }><div className="icon-your-music">Your Music</div></Link>
            </li>

            <li className="radio-link">
              <Link to={ "/radio" }><div className="icon-radio">Radio</div></Link>
            </li>

            <li className="social-link">
              <Link to={ "/social" }><div className="icon-social">Follow</div></Link>
            </li>

          </ul>
        </nav>
        <div className="nav-bar-session">
          <span className="nav-bar-username">{ this.props.session.currentUser.username }</span>
          <button onClick={ this.handleClick }>Logout</button>
        </div>
      </header>
    );
  }

}

export default withRouter(NavBar);