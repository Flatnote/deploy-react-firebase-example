import React, { Component } from 'react';
import logo from './shapes.svg';
import './App.css';
import './layout.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper row0">
    <div id="topbar" className="hoc clear">
        
        <div className="fl_left">
            <ul className="nospace">
                <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
                <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
            </ul>
        </div>
        <div className="fl_right">
            <ul className="nospace">
                <li><a href="#"><i className="fa fa-lg fa-home"></i></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </div>
        
    </div>

    <div className="wrapper row1">
    <header id="header" className="hoc clear">

        <div id="logo" className="fl_left">
            <h1><a href="index.html">Corklow</a></h1>
            <p>Aliquam posuere nulla</p>
        </div>

        <nav id="mainav" className="fl_right">
            <ul className="clear">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a className="drop" href="#">Pages</a>
                    <ul>
                        <li><a href="pages/gallery.html">Gallery</a></li>
                        <li><a href="pages/full-width.html">Full Width</a></li>
                        <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
                        <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
                        <li><a href="pages/basic-grid.html">Basic Grid</a></li>
                    </ul>
                </li>
                <li><a className="drop" href="#">Dropdown</a>
                    <ul>
                        <li><a href="#">Level 2</a></li>
                        <li><a className="drop" href="#">Level 2 + Drop</a>
                            <ul>
                                <li><a href="#">Level 3</a></li>
                                <li><a href="#">Level 3</a></li>
                                <li><a href="#">Level 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                    </ul>
                </li>
                <li><a href="#">Link Text</a></li>
                <li><a href="#">Link Text</a></li>
            </ul>
        </nav>

    </header>
</div>

<div className="wrapper bgded overlay background01">
    <div id="pageintro" className="hoc clear">

        <article>
            <p className="heading">Quisque viverra euismod</p>
            <h2 className="heading"><span className="block">Scelerisque</span> interdum</h2>
            <footer><a href="#">Malesuada fames &raquo;</a></footer>
        </article>

    </div>
</div>
</div>
    );
  }
}

export default App;
