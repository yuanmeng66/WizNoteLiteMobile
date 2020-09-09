/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Cuti = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M694.021847 492.679245a208.460775 208.460775 0 0 1 112.873883 74.740815 197.275074 197.275074 0 0 1 37.624627 118.975173 234.899702 234.899702 0 0 1-34.065541 123.551142A203.376365 203.376365 0 0 1 711.817279 892.313803a440.309831 440.309831 0 0 1-168.802383 26.438928h-254.220457a50.844091 50.844091 0 0 1-50.844091-50.844091V168.802383a50.844091 50.844091 0 0 1 50.844091-50.844091h249.644489q145.922542 0 203.376365 63.555114a203.376365 203.376365 0 0 1 59.996028 140.838133 180.496524 180.496524 0 0 1-27.45581 97.112215 206.935452 206.935452 0 0 1-80.333664 73.215491z m-323.368421-39.14995h147.956306A563.860973 563.860973 0 0 0 610.129096 447.428004a122.53426 122.53426 0 0 0 64.063555-31.523337 101.688183 101.688183 0 0 0 27.964251-79.825223A111.34856 111.34856 0 0 0 672.667329 254.220457a121.008937 121.008937 0 0 0-67.114201-33.04866 681.310824 681.310824 0 0 0-101.688183-6.101291H370.653426a25.422046 25.422046 0 0 0-25.422046 25.422046v187.614697a25.422046 25.422046 0 0 0 25.422046 25.422046z m0 370.144985h173.886792a227.781529 227.781529 0 0 0 148.464747-36.607746 127.618669 127.618669 0 0 0 41.692155-101.688182 124.059583 124.059583 0 0 0-44.234359-101.688183 259.304866 259.304866 0 0 0-159.650447-36.099305H370.653426a25.422046 25.422046 0 0 0-25.422046 25.422046v225.239324a25.422046 25.422046 0 0 0 25.422046 25.422046z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

Cuti.defaultProps = {
  size: 18,
};

export default Cuti;
