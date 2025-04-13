// import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function DocumentTitle ({ children }) {
  return (
    // <HelmetProvider>
    //   <Helmet>
        <title>{children}</title>
    // </Helmet>
    // </HelmetProvider>
  );
};
