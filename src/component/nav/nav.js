import React from 'react';
import './nav.css';
import Button from '@material-ui/core/Button';

const Nav = props => (
  <div>
    <ul className="nav">
      {
        props.list.map((ele, idx) => (
          <li key={idx}><a href={ele.url}>{ele.text}</a></li>
        ))
      }
    </ul>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default Nav;
