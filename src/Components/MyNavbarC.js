import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import '../styles/MyNavbar.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        expand="md"
        light
        fixed="top"
        className={`my-navbar fade-navbar ${isScrolled ? 'shrink-navbar' : ''}`}
      >
        <Container className="d-flex align-items-center justify-content-between">

          {/* Left: Logo */}
          <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </NavbarBrand>

          {/* Toggler */}
          <NavbarToggler onClick={toggle} />

          {/* Nav + Search inside Collapse */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar-nav d-flex align-items-center" navbar>
              <NavItem>
                <NavLink tag={Link} to="/home" onClick={() => setIsOpen(false)}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/forecastAI" onClick={() => setIsOpen(false)}>Forecast AI</NavLink>
              </NavItem>

              <Dropdown nav inNavbar isOpen={capabilitiesOpen} toggle={() => setCapabilitiesOpen(!capabilitiesOpen)} className="hover-dropdown">
                <DropdownToggle nav caret>Capabilities</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/generativeAI" onClick={() => setIsOpen(false)}>Generative AI</DropdownItem>
                  <DropdownItem tag={Link} to="/visionAnalytics" onClick={() => setIsOpen(false)}>Vision Analytics</DropdownItem>
                  <DropdownItem tag={Link} to="/predictiveAnalytics" onClick={() => setIsOpen(false)}>Predictive Analytics</DropdownItem>
                  <DropdownItem tag={Link} to="/dataEngineering" onClick={() => setIsOpen(false)}>Data Engineering</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown nav inNavbar isOpen={resourcesOpen} toggle={() => setResourcesOpen(!resourcesOpen)} className="hover-dropdown">
                <DropdownToggle nav caret>Resources</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/blog" onClick={() => setIsOpen(false)}>Blog</DropdownItem>
                  <DropdownItem tag={Link} to="/caseStudies" onClick={() => setIsOpen(false)}>Case Studies</DropdownItem>
                  <DropdownItem tag={Link} to="/newsroom" onClick={() => setIsOpen(false)}>Newsroom</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink tag={Link} to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              </NavItem>
            </Nav>

            {/* Search inside Collapse */}
            <form
              className="search-form d-flex align-items-center ms-md-3 mt-2 mt-md-0"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchTerm.trim() !== '') {
                  navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
                  setIsOpen(false); // close menu on mobile
                }
              }}
            >
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary ms-2" type="submit">
                Search
              </button>
            </form>

          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
