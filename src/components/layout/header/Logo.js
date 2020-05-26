import React from 'react';
import logoPath from "../../../assets/img/logo_brown.png";
import Link from '../../Link';
import { injectIntl } from 'gatsby-plugin-intl';
import { isAtRootLanguage } from '../../../utils/i18n';

const Logo = ({ intl }) => (
  <Link to={`/${isAtRootLanguage(intl.locale) ? "" : intl.locale}`}>
    <img src={logoPath} alt="" className="w-10 h-auto" />
  </Link>
);

export default injectIntl(Logo);