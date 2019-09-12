import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <p>Visit us at <a href="https://www.indiegoods.com" target="_blank">IndieGoods.com</a></p>
    </header>
  );
}
