import React from 'react';
import './nav.scss';

export default function Navigation(props) {
  return (
      <nav>
        <ul>
          <li><a>Lights and electricity</a></li>
          <li><a>Heating</a></li>
          <li><a>AC and ventilation</a></li>
          <li><a>Security</a></li>
          <li><a>Multimedia</a></li>
          <li><a>Statistics</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
    );
  }

