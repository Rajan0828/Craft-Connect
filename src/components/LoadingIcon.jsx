import React from 'react';
import { ClipLoader } from 'react-spinners';
import { CSSProperties } from 'react';

const override = {
  display: 'block',
  margin: '100px auto',
};

const LoadingIcon = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={300}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingIcon;
