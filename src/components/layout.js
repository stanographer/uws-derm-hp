import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Navbar from './Navbar';
import * as MENU from '../constants/menu';
import * as STRINGS from '../constants/strings';
import Headroom from 'react-headroom';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Headroom>
        <Navbar title={STRINGS.TITLE} menu={MENU.GROUPS} />
      </Headroom>
      <div
        style={{
          margin: `0`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Upper West Side Dermatology
        </footer>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
