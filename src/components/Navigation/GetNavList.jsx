// import FontIcon from "react-md/lib/FontIcons";
import { Link } from 'gatsby';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'Home',
      // LeftIcon: <p>home</p>,
      component: Link,
      to: '/'
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: 'a',
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: 'About',
    component: Link,
    to: '/about/'
  });

  NavList.push({
    primaryText: 'Contact',
    component: Link,
    to: '/contact/'
  });
  return NavList;
}
export default GetNavList;
