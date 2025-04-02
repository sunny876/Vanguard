import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VuiFlexContainer, VuiFlexItem, VuiTitle, VuiText } from "../../ui";
import { HeaderLogo } from "./HeaderLogo";
import "./appHeader.scss";

export const AppHeader: React.FC = () => {
  const location = useLocation();
  const isDocumentsPage = location.pathname === "/documents";

  return (
    <header className="threadneedleHeader">
      <div className="headerContent">
        <VuiFlexContainer direction="column" alignItems="center" spacing="m">
          <VuiFlexItem>
            <HeaderLogo />
          </VuiFlexItem>
          
          <VuiFlexItem>
            <VuiTitle size="l" className="headerTitle">
              <h1>Enterprise Intelligence</h1>
            </VuiTitle>
          </VuiFlexItem>
          
          <VuiFlexItem>
            <VuiText size="m" className="headerSubtitle">
              <p>Access insights across your investment portfolio and market research</p>
            </VuiText>
          </VuiFlexItem>

          <VuiFlexItem>
            <nav>
              <Link to="/" className={`navLink ${!isDocumentsPage ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/documents" className={`navLink ${isDocumentsPage ? 'active' : ''}`}>
                Documents
              </Link>
            </nav>
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    </header>
  );
};
