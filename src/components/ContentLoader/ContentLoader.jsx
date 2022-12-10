import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="221" y="59" rx="2" ry="2" width="190" height="26" />
    <rect x="220" y="29" rx="2" ry="2" width="189" height="14" />
    <rect x="8" y="-23" rx="2" ry="2" width="204" height="260" />
  </ContentLoader>
);
