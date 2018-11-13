import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import SiteWrapper from '../components/SiteWrapper/SiteWrapper';
import MainLayout from '../components/layout';
import Drawer from '../components/Drawer/Drawer';
import Navigation from '../components/Navigation/Navigation';
import MainNav from '../components/MainNav/MainNav';
import BlogLogo from '../components/BlogLogo/BlogLogo';
import MenuButton from '../components/MenuButton/MenuButton';
import MainContent from '../components/MainContent/MainContent';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from '../components/Footer/Footer';
import PostFormatting from '../components/PostFormatting/PostFormatting';

import './pages.css';

class AboutPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { location } = this.props;

    return (
      <MainLayout location={location}>
        <Drawer isOpen={this.state.menuOpen}>
          <Navigation config={config} onClose={this.handleOnClose} />
          <Helmet title={`About | ${config.siteTitle}`} />

          <div className="about">
            <SiteWrapper>
              <MainHeader className="post-head" cover="">
                <MainNav>
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
              </MainHeader>
              <MainContent>
                <PostFormatting>
                  <About />
                </PostFormatting>
              </MainContent>
              <Footer
                copyright={config.copyright}
                promoteGatsby={config.promoteGatsby}
              />
            </SiteWrapper>
          </div>
        </Drawer>
      </MainLayout>
    );
  }
}

export default AboutPage;
