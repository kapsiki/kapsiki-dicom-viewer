import { Code } from 'lucide-react';
import React from 'react';

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  // Usage example: <Icons.ArrowLeft />
  Code: Code,
  Add: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Add"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <g
          id="Group"
          transform="translate(6, 6)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line
            x1="6"
            y1="0"
            x2="6"
            y2="12"
            id="Path"
          ></line>
          <line
            x1="12"
            y1="6"
            x2="0"
            y2="6"
            id="Path"
          ></line>
        </g>
      </g>
    </svg>
  ),
  ChevronClosed: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-chevron-closed</title>
      <g
        id="icon-chevron-closed"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          opacity="0.2"
          transform="translate(12, 12) rotate(90) translate(-12, -12)"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <polyline
          id="Path-2"
          stroke="currentColor"
          transform="translate(12.0902, 12.0451) rotate(90) translate(-12.0902, -12.0451)"
          points="8 10 12.090229 14.090229 16.1804581 10"
        ></polyline>
      </g>
    </svg>
  ),
  ChevronOpen: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-chevron-open</title>
      <g
        id="icon-chevron-open"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          opacity="0.199999988"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <polyline
          id="Path-2"
          stroke="currentColor"
          points="8 10 12.090229 14.090229 16.1804581 10"
        ></polyline>
      </g>
    </svg>
  ),
  ColorChange: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="ColorChange"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <g
          id="Group-4"
          transform="translate(4, 5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M11.9830989,1.93861826 C10.5789104,0.665654409 8.7439168,-0.0269214719 6.84881419,0.000801239617 C3.06621664,0.000801239617 0,2.55531723 0,5.70792489 C0.13353775,8.17267636 1.81407658,10.2821527 4.18664171,10.963157 C5.1582084,11.3047338 5.96098033,11.0256244 6.52318651,9.75767005 C6.72995019,9.15827585 7.22615951,8.70434675 7.84154981,8.55163978 C8.45694011,8.39893281 9.10779864,8.568221 9.57079585,9.00141636 L9.70370511,9.13432562"
            id="Path"
          ></path>
          <line
            x1="13.2723188"
            y1="6.75657895"
            x2="9.69838874"
            y2="13.9017808"
            id="Path"
          ></line>
          <path
            d="M12.5054323,4.46389421 C12.1415749,5.29815229 12.4941364,6.27127189 13.3079188,6.67887077 C14.1217013,7.08646964 15.1121527,6.7860243 15.5623453,5.99500889 C16.4969889,4.55848545 16.3097611,2.6657723 15.1117829,1.44020853 C15.0640204,1.39470251 14.9942555,1.38091172 14.9327711,1.40482233 C14.8712867,1.42873293 14.8291685,1.48603381 14.8246989,1.55185231 C14.8366608,3.08695427 13.4517463,2.56727906 12.5054323,4.46389421 Z"
            id="Path"
          ></path>
          <path
            d="M3.52608268,6.59044238 C3.70959208,6.59044238 3.85835583,6.73920613 3.85835583,6.92271553"
            id="Path"
          ></path>
          <path
            d="M3.19380953,6.92404462 C3.19345611,6.83569024 3.22830728,6.75083342 3.29065893,6.68823236 C3.35301058,6.62563131 3.4377276,6.59044167 3.52608268,6.59044238"
            id="Path"
          ></path>
          <path
            d="M3.52608268,7.25498868 C3.34257329,7.25498868 3.19380953,7.10622492 3.19380953,6.92271553"
            id="Path"
          ></path>
          <path
            d="M3.85835583,6.92404462 C3.85762387,7.10703476 3.70907428,7.25499014 3.52608268,7.25498868"
            id="Path"
          ></path>
          <path
            d="M4.52290214,3.26771086 C4.70641153,3.26771086 4.85517529,3.41647462 4.85517529,3.59998401"
            id="Path"
          ></path>
          <path
            d="M4.19062898,3.60131311 C4.19062898,3.41780371 4.33939274,3.26903996 4.52290214,3.26903996"
            id="Path"
          ></path>
          <path
            d="M4.52290214,3.93225717 C4.33939274,3.93225717 4.19062898,3.78349341 4.19062898,3.59998401"
            id="Path"
          ></path>
          <path
            d="M4.85517529,3.60131311 C4.85444332,3.78430325 4.70589374,3.93225863 4.52290214,3.93225717"
            id="Path"
          ></path>
          <path
            d="M7.84563365,2.60316456 C8.02914304,2.60316456 8.1779068,2.75192832 8.1779068,2.93543771"
            id="Path"
          ></path>
          <path
            d="M7.5133605,2.9367668 C7.51300708,2.84841243 7.54785824,2.76355561 7.61020989,2.70095455 C7.67256154,2.63835349 7.75727857,2.60316385 7.84563365,2.60316456"
            id="Path"
          ></path>
          <path
            d="M7.84563365,3.26771086 C7.66212425,3.26771086 7.5133605,3.11894711 7.5133605,2.93543771"
            id="Path"
          ></path>
          <path
            d="M8.1779068,2.9367668 C8.1779068,3.1202762 8.02914304,3.26903996 7.84563365,3.26903996"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  ),
  Controls: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="Controls"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          id="Oval"
          stroke="currentColor"
          cx="9"
          cy="3.34782609"
          r="1.73913043"
        ></circle>
        <line
          x1="10.7373913"
          y1="3.34782609"
          x2="16.4095652"
          y2="3.34782609"
          id="Path"
          stroke="currentColor"
        ></line>
        <line
          x1="1.62695652"
          y1="3.34782609"
          x2="7.2573913"
          y2="3.34782609"
          id="Path"
          stroke="currentColor"
        ></line>
        <g
          id="Group-26"
          transform="translate(9.0183, 9) scale(-1, 1) translate(-9.0183, -9)translate(1.627, 7.2609)"
          stroke="currentColor"
        >
          <circle
            id="Oval"
            transform="translate(3.8948, 1.7391) scale(-1, 1) translate(-3.8948, -1.7391)"
            cx="3.89478261"
            cy="1.73913043"
            r="1.73913043"
          ></circle>
          <line
            x1="5.63043478"
            y1="1.73913043"
            x2="14.7826087"
            y2="1.73913043"
            id="Path"
            transform="translate(10.2065, 1.7391) scale(-1, 1) translate(-10.2065, -1.7391)"
          ></line>
          <line
            x1="0"
            y1="1.73913043"
            x2="2.15217391"
            y2="1.73913043"
            id="Path"
            transform="translate(1.0761, 1.7391) scale(-1, 1) translate(-1.0761, -1.7391)"
          ></line>
        </g>
        <circle
          id="Oval"
          stroke="currentColor"
          cx="7.26086957"
          cy="14.6521739"
          r="1.73913043"
        ></circle>
        <line
          x1="8.99652174"
          y1="14.6521739"
          x2="16.4095652"
          y2="14.6521739"
          id="Path"
          stroke="currentColor"
        ></line>
        <line
          x1="1.62695652"
          y1="14.6521739"
          x2="5.52173913"
          y2="14.6521739"
          id="Path"
          stroke="currentColor"
        ></line>
      </g>
    </svg>
  ),
  Delete: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Delete"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="12"
          cy="12"
          r="7"
        ></circle>
        <line
          x1="8.95652174"
          y1="8.95652174"
          x2="15.0434783"
          y2="15.0434783"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="15.0434783"
          y1="8.95652174"
          x2="8.95652174"
          y2="15.0434783"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),
  Download: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-download</title>
      <g
        id="icon-download"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="12"
          cy="12"
          r="9"
        ></circle>
        <line
          x1="12"
          y1="7.5"
          x2="12"
          y2="16.5"
          id="Path"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="12"
          y1="16.5"
          x2="8.625"
          y2="13.125"
          id="Path"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <line
          x1="12"
          y1="16.5"
          x2="15.375"
          y2="13.125"
          id="Path"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),
  Export: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Export"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <line
          x1="12"
          y1="13.125"
          x2="12"
          y2="5"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
        <polyline
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="9.1875 7.8125 12 5 14.8125 7.8125"
        ></polyline>
        <path
          d="M13.875,10.000625 L16.375,10.000625 C16.720178,10.000625 17,10.280447 17,10.625625 L17,18.750625 C17,19.095803 16.720178,19.375625 16.375,19.375625 L7.625,19.375625 C7.27982203,19.375625 7,19.095803 7,18.750625 L7,10.625625 C7,10.280447 7.27982203,10.000625 7.625,10.000625 L10.125,10.000625"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  Hide: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="hide"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="12.4986195"
          cy="11.8041442"
          r="2.58684689"
        ></circle>
        <path
          d="M20.906611,11.5617197 C20.0470387,10.5861089 16.6094888,7 12.4986195,7 C8.38775024,7 4.95020027,10.5861089 4.090628,11.5617197 C3.96979067,11.7007491 3.96979067,11.9075393 4.090628,12.0465687 C4.95020027,13.0221796 8.38775024,16.6082885 12.4986195,16.6082885 C16.6094888,16.6082885 20.0470387,13.0221796 20.906611,12.0465687 C21.0274483,11.9075393 21.0274483,11.7007491 20.906611,11.5617197 Z"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  Info: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="icon-download"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <circle
          id="Oval"
          fillRule="nonzero"
          cx="12.192"
          cy="12.192"
          r="8.192"
        ></circle>
        <path
          d="M12.192,4.00160754 C7.66678807,4.00160754 4,7.6683956 4,12.1928038 C4,16.7172119 7.66759184,20.3848038 12.192,20.3848038 C16.7172119,20.3848038 20.384,16.7172119 20.384,12.1928038 C20.384,7.6683956 16.7172119,4.00080377 12.192,4.00080377 L12.192,4.00160754 Z M12.192,4.8053752 C16.2727284,4.8053752 19.5802323,8.11287912 19.5802323,12.1936075 C19.5802323,16.2735322 16.2727284,19.5818399 12.192,19.5818399 C8.11127159,19.5818399 4.80376766,16.2735322 4.80376766,12.1936075 C4.80376766,8.11287912 8.11127159,4.80457143 12.192,4.80457143 L12.192,4.8053752 Z"
          id="Shape"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
        <path
          d="M11.5425557,10.4920314 C12.0867064,10.4920314 12.534405,10.905168 12.5882575,11.4356546 L12.5938838,11.5425557 L12.5938838,16.0870581 C12.5938838,16.308898 12.4138399,16.4889419 12.192,16.4889419 C11.9950769,16.4889419 11.8303046,16.346675 11.7965463,16.1593972 L11.7901162,16.0870581 L11.7901162,11.5425557 C11.7901162,11.4260094 11.7089356,11.3279498 11.5996232,11.3014254 L11.5433595,11.2957991 L10.2436672,11.2957991 C10.0218273,11.2957991 9.84178336,11.1157551 9.84178336,10.8939152 C9.84178336,10.6961884 9.98405024,10.5322198 10.1713281,10.4984615 L10.2436672,10.4920314 L11.541752,10.4920314 L11.5425557,10.4920314 Z M11.2178336,7.24561381 L11.3094631,7.25124019 C11.6679435,7.29625118 11.9444396,7.60168289 11.9444396,7.97221978 C11.9444396,8.37410361 11.6197174,8.69882575 11.2178336,8.69882575 C10.8167535,8.69882575 10.4920314,8.37329984 10.4920314,7.97221978 C10.4920314,7.60248666 10.7685275,7.29625118 11.1270078,7.25124019 L11.2178336,7.24561381 Z"
          id="Shape"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
        <path
          d="M14.139529,15.6867818 C14.3613689,15.6867818 14.5414129,15.8668257 14.5414129,16.0886656 C14.5414129,16.2855887 14.399146,16.4503611 14.2118681,16.4841193 L14.139529,16.4905495 L10.244471,16.4905495 C10.0226311,16.4905495 9.84258713,16.3105055 9.84258713,16.0886656 C9.84258713,15.8909388 9.984854,15.7269702 10.1721319,15.6932119 L10.244471,15.6867818 L14.139529,15.6867818 L14.139529,15.6867818 Z"
          id="Path"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  ),
  Lock: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Lock"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M16,10.6666667 L16,8 C16,5.79133333 14.2086667,4 12,4 C9.79133333,4 8,5.79133333 8,8 L8,10.6666667 L7.5,10.6666667 C6.67157288,10.6666667 6,11.3382395 6,12.1666667 L6,18.5 C6,19.3284271 6.67157288,20 7.5,20 L16.5,20 C17.3284271,20 18,19.3284271 18,18.5 L18,12.1666667 C18,11.3382395 17.3284271,10.6666667 16.5,10.6666667 L16,10.6666667 L16,10.6666667 Z M9.33333333,10.6666667 L9.33333333,8 C9.33333333,6.52933333 10.5293333,5.33333333 12,5.33333333 C13.4706667,5.33333333 14.6666667,6.52933333 14.6666667,8 L14.6666667,10.6666667 L9.33333333,10.6666667 Z"
          id="Shape"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  ),
  ListView: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="icon-list-view"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <line
          x1="10.5"
          y1="8"
          x2="18.5"
          y2="8"
          id="Line-2"
          stroke="currentColor"
          strokeLinecap="round"
        ></line>
        <line
          x1="10.5"
          y1="12"
          x2="18.5"
          y2="12"
          id="Line-2"
          stroke="currentColor"
          strokeLinecap="round"
        ></line>
        <line
          x1="10.5"
          y1="16"
          x2="18.5"
          y2="16"
          id="Line-2"
          stroke="currentColor"
          strokeLinecap="round"
        ></line>
        <circle
          id="Oval"
          fill="currentColor"
          cx="7"
          cy="8"
          r="1"
        ></circle>
        <circle
          id="Oval"
          fill="currentColor"
          cx="7"
          cy="12"
          r="1"
        ></circle>
        <circle
          id="Oval"
          fill="currentColor"
          cx="7"
          cy="16"
          r="1"
        ></circle>
      </g>
    </svg>
  ),
  More: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-more</title>
      <g
        id="icon-more"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <circle
          id="Oval"
          fill="currentColor"
          cx="6"
          cy="12"
          r="2"
        ></circle>
        <circle
          id="Oval"
          fill="currentColor"
          cx="12"
          cy="12"
          r="2"
        ></circle>
        <circle
          id="Oval"
          fill="currentColor"
          cx="18"
          cy="12"
          r="2"
        ></circle>
      </g>
    </svg>
  ),
  DisplayFillAndOutline: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-outline-fill"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            stroke="currentColor"
            x="1.5"
            y="1.5"
            width="15"
            height="15"
            rx="1"
          ></rect>
          <rect
            id="Rectangle"
            fill="currentColor"
            x="3.5"
            y="3.5"
            width="11"
            height="11"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  DisplayOutlineOnly: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-outline"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            stroke="currentColor"
            x="1.5"
            y="1.5"
            width="15"
            height="15"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  DisplayFillOnly: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-fill"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            fill="currentColor"
            x="2"
            y="2"
            width="14"
            height="14"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  Actions: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="more-dropdown"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <g
          id="Group-2"
          transform="translate(5, 4)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            id="Oval"
            cx="6.74621802"
            cy="7.5938001"
            r="1.68710308"
          ></circle>
          <path
            d="M8.17972732,1.06493425 L8.67634848,2.69920529 C8.84616867,3.26259112 9.42371506,3.59782471 9.99714943,3.46585687 L11.6537273,3.08194406 C12.2982043,2.9366791 12.9621245,3.22831522 13.2911435,3.80120174 C13.6201625,4.37408825 13.5374848,5.09450899 13.0872366,5.57796434 L11.9284539,6.82714853 C11.528377,7.25995707 11.528377,7.92764314 11.9284539,8.36045168 L13.0872366,9.60963586 C13.5374848,10.0930912 13.6201625,10.813512 13.2911435,11.3863985 C12.9621245,11.959285 12.2982043,12.2509211 11.6537273,12.1056561 L9.99714943,11.7217433 C9.42371506,11.5897755 8.84616867,11.9250091 8.67634848,12.4883949 L8.17972732,14.122666 C7.98874475,14.7549849 7.40616232,15.1876002 6.745631,15.1876002 C6.08509968,15.1876002 5.50251725,14.7549849 5.31153468,14.122666 L4.81491352,12.4883949 C4.64509333,11.9250091 4.06754694,11.5897755 3.49411257,11.7217433 L1.83753467,12.1056561 C1.19305769,12.2509211 0.529137506,11.959285 0.200118485,11.3863985 C-0.128900535,10.813512 -0.0462227777,10.0930912 0.404025372,9.60963586 L1.56280807,8.36045168 C1.96288499,7.92764314 1.96288499,7.25995707 1.56280807,6.82714853 L0.404025372,5.57796434 C-0.0462227777,5.09450899 -0.128900535,4.37408825 0.200118485,3.80120174 C0.529137506,3.22831522 1.19305769,2.9366791 1.83753467,3.08194406 L3.49411257,3.46585687 C4.06754694,3.59782471 4.64509333,3.26259112 4.81491352,2.69920529 L5.31153468,1.06493425 C5.50251725,0.43261528 6.08509968,0 6.745631,0 C7.40616232,0 7.98874475,0.43261528 8.17972732,1.06493425 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  ),
  PinFill: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-pin-fill</title>
      <g
        id="icon-pin-fill"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <path
          d="M6.60822653,11.9185094 L12.4722476,17.7825305 C13.3039432,16.88156 13.5654769,15.59278 13.1507792,14.4388774 L17.647936,9.94247454 L17.7813806,10.0751652 C18.1510591,10.4324165 18.7388453,10.4274758 19.1024662,10.0640606 C19.4660871,9.70064533 19.4713604,9.11286206 19.1143182,8.74298142 L15.6462677,5.27493091 C15.2775626,4.90747491 14.6807861,4.90848754 14.3133301,5.27719268 C13.9458741,5.64589783 13.9468867,6.24267435 14.3155918,6.61013036 L14.4490364,6.74357491 L9.95187958,11.2407317 C8.7980766,10.8263652 7.50959437,11.087548 6.60822653,11.9185094 Z"
          id="Path"
          stroke="currentColor"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <line
          x1="9.54023706"
          y1="14.8505199"
          x2="4.5"
          y2="19.890757"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),
  Pin: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-pin</title>
      <g
        id="icon-pin"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="4"
        ></rect>
        <path
          d="M6.60822653,11.9185094 L12.4722476,17.7825305 C13.3039432,16.88156 13.5654769,15.59278 13.1507792,14.4388774 L17.647936,9.94247454 L17.7813806,10.0751652 C18.1510591,10.4324165 18.7388453,10.4274758 19.1024662,10.0640606 C19.4660871,9.70064533 19.4713604,9.11286206 19.1143182,8.74298142 L15.6462677,5.27493091 C15.2775626,4.90747491 14.6807861,4.90848754 14.3133301,5.27719268 C13.9458741,5.64589783 13.9468867,6.24267435 14.3155918,6.61013036 L14.4490364,6.74357491 L9.95187958,11.2407317 C8.7980766,10.8263652 7.50959437,11.087548 6.60822653,11.9185094 Z"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <line
          x1="9.54023706"
          y1="14.8505199"
          x2="4.5"
          y2="19.890757"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),
  Rename: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Rename"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <g
          id="rename"
          transform="translate(4.5, 5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon
            id="Rectangle"
            transform="translate(7.6682, 7.2953) rotate(45) translate(-7.6682, -7.2953)"
            points="5.71337096 0.360798742 9.62306412 0.360798742 9.62306412 14.2297836 5.71337096 14.2297836"
          ></polygon>
          <polygon
            id="Path"
            points="1.38207653 10.8162548 0 14.963136 4.14688121 13.5810595"
          ></polygon>
          <path
            d="M13.9536949,3.77359418 L11.1895418,1.00944111 L11.650234,0.548748934 C12.4172745,-0.192083594 13.6365239,-0.181488647 14.3905743,0.57256175 C15.1446246,1.32661215 15.1552196,2.54586147 14.4143871,3.312902 L13.9536949,3.77359418 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  ),
  ThumbnailView: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-thumbnail-view</title>
      <g
        id="icon-thumbnail-view"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <rect
          id="Rectangle"
          fill="currentColor"
          x="6"
          y="6"
          width="5"
          height="5"
          rx="1.5"
        ></rect>
        <rect
          id="Rectangle"
          fill="currentColor"
          x="13"
          y="6"
          width="5"
          height="5"
          rx="1.5"
        ></rect>
        <rect
          id="Rectangle"
          fill="currentColor"
          x="6"
          y="13"
          width="5"
          height="5"
          rx="1.5"
        ></rect>
        <rect
          id="Rectangle"
          fill="currentColor"
          x="13"
          y="13"
          width="5"
          height="5"
          rx="1.5"
        ></rect>
      </g>
    </svg>
  ),
  IconMPR: (props: IconProps) => (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>info-mpr</title>
      <g
        id="info-mpr"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="12"
          height="12"
        ></rect>
        <g
          id="mpr"
          transform="translate(1.5, 1.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon
            id="Path"
            points="4.5 0 0 1.90909091 4.5 3.81818182 9 1.90909091"
          ></polygon>
          <polyline
            id="Path"
            points="0 1.90909091 0 7.09090909 4.5 9 9 7.09090909 9 1.90909091"
          ></polyline>
          <line
            x1="4.5"
            y1="3.81818182"
            x2="4.5"
            y2="9"
            id="Path"
          ></line>
        </g>
      </g>
    </svg>
  ),
  InfoSeries: (props: IconProps) => (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>info-series</title>
      <g
        id="info-series"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="12"
          height="12"
        ></rect>
        <g
          id="series"
          transform="translate(1.5, 1.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M2.22352941,6.3 L0.370588235,6.3 C0.165918004,6.3 0,6.134082 0,5.92941176 L0,0.370588235 C0,0.165918004 0.165918004,0 0.370588235,0 L5.92941176,0 C6.134082,0 6.3,0.165918004 6.3,0.370588235 L6.3,2.22352941"
            id="Path"
          ></path>
          <rect
            id="Rectangle"
            x="2.7"
            y="2.7"
            width="6.3"
            height="6.3"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  StatusError: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
    >
      <g
        id="StatusAlert"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="12"
          cy="12"
          r="8"
        ></circle>
        <g
          id="Group"
          transform="translate(11.5, 8)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line
            x1="0.502969489"
            y1="5"
            x2="0.502969489"
            y2="5.55111512e-16"
            id="Path"
          ></line>
          <path
            d="M0.494019489,7.75 C0.427967985,7.75102315 0.365128544,7.77867594 0.319754003,7.82668634 C0.274379462,7.87469675 0.250315262,7.93899595 0.253019489,8.005 C0.257853669,8.14136674 0.369567839,8.24954844 0.506019489,8.25 L0.506019489,8.25 C0.57198073,8.2487037 0.634656968,8.22096694 0.679972815,8.17301863 C0.725288662,8.12507033 0.749445908,8.06092934 0.747019489,7.995 C0.742888429,7.86182395 0.636177529,7.75467571 0.503019489,7.75 L0.498019489,7.75"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  ),
  StatusSuccess: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="StatusSuccess"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <polyline
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="16.173913 8.52173913 11.3043478 15.1304348 7.82608696 12.3478261"
        ></polyline>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="12"
          cy="12"
          r="8"
        ></circle>
      </g>
    </svg>
  ),
  StatusTracking: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>status-tracking</title>
      <g
        id="status-tracking"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g>
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <rect
            id="Rectangle"
            stroke="#5ACCE6"
            fill="#5ACCE6"
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="7.5"
          ></rect>
          <path
            d="M15.388889,9 L11.7739644,14.5948033 C11.6112717,14.8456871 11.3630166,15.0025668 11.0931982,15.0249993 C10.8233798,15.0474318 10.5584004,14.9332222 10.3665704,14.7118131 L8.5,12.5449644"
            id="Path"
            stroke="#090C29"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  ),
  StatusWarning: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>status-warning</title>
      <g
        id="status-warning"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g>
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <g
            id="Group-5"
            transform="translate(4, 4)"
            stroke="#FFD22A"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M8.0001715,11.3365862 C8.1842651,11.3365862 8.33350959,11.4858235 8.33350959,11.6699171 C8.33350959,11.8540107 8.1842651,12.0032552 8.0001715,12.0032552 C7.8160779,12.0032552 7.66684054,11.8540107 7.66684054,11.6699171 C7.66684054,11.4858235 7.8160779,11.3365862 8.0001715,11.3365862"
              id="Path"
            ></path>
            <line
              x1="8.0001715"
              y1="8.67127184"
              x2="8.0001715"
              y2="4.67130038"
              id="Path"
            ></line>
            <path
              d="M9.11749686,0.669995592 C8.89725509,0.25756493 8.46772416,0 8.0001715,0 C7.53261884,0 7.10308791,0.25756493 6.88284614,0.669995592 L0.141560901,13.5152373 C-0.0609866009,13.9006851 -0.0452769444,14.3643734 0.18289394,14.7352286 C0.413865574,15.107289 0.820963502,15.3332864 1.25888626,15.3325594 L14.7414567,15.3325594 C15.1793795,15.3332864 15.5864774,15.107289 15.8174491,14.7352286 C16.0456199,14.3643734 16.0613296,13.9006851 15.8587821,13.5152373 L9.11749686,0.669995592 Z"
              id="Path"
              fillOpacity="0.2"
              fill="#FFD22A"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  SortingAscending: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="16"
      viewBox="0 0 9 16"
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
      >
        <path
          fill="transparent"
          d="M8.69 11.516L7.51 10.274 4.5 13.442 1.49 10.274 0.31 11.516 4.5 15.926z"
        />
        <path
          d="M8.69 1.516L7.51 0.274 4.499 3.442 1.49 0.274 0.31 1.516 4.5 5.926z"
          transform="matrix(1 0 0 -1 0 6.2)"
        />
      </g>
    </svg>
  ),
  SortingDescending: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="16"
      viewBox="0 0 9 16"
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
      >
        <path d="M8.69 11.516L7.51 10.274 4.5 13.442 1.49 10.274 0.31 11.516 4.5 15.926z" />
        <path
          fill="transparent"
          d="M8.69 1.516L7.51 0.274 4.499 3.442 1.49 0.274 0.31 1.516 4.5 5.926z"
          transform="matrix(1 0 0 -1 0 6.2)"
        />
      </g>
    </svg>
  ),
  Trash: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-labelledby="title"
      fill="currentColor"
      {...props}
    >
      <title id="title">Trash</title>
      <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
    </svg>
  ),
  Cancel: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
      >
        <circle
          cx="9.5"
          cy="9.5"
          r="9.5"
          fill="currentColor"
        />
        <g
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path
            d="M.188.187L8.813 8.812M8.813.187L.188 8.812"
            transform="translate(5 5)"
          />
        </g>
      </g>
    </svg>
  ),
  InfoLink: (props: IconProps) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
      >
        <path d="M7 .102A6.899 6.899 0 1 0 7 13.9 6.899 6.899 0 0 0 7 .102zm0 .875a6.024 6.024 0 1 1 0 12.048A6.024 6.024 0 0 1 7 .977z" />
        <path d="M6.462 5.486c.503 0 .917.38.97.87l.006.106v3.769a.438.438 0 0 1-.868.078l-.007-.078V6.46a.101.101 0 0 0-.07-.095l-.031-.005H5.385a.437.437 0 0 1-.079-.868l.079-.007h1.077zM6.192 2.793l.089.006a.707.707 0 1 1-.177 0l.088-.006z" />
        <path d="M8.615 9.794c.242 0 .438.224.438.5 0 .246-.155.45-.359.492l-.079.008h-3.23c-.242 0-.438-.224-.438-.5 0-.245.155-.45.359-.492l.079-.008h3.23z" />
      </g>
    </svg>
  ),
  LoadingSpinner: (props: IconProps) => (
    <svg
      role="status"
      aria-label="Loading"
      className={`h-5 w-5 animate-spin ${props.className}`}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="LoadingSpinner"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <g
          id="Group"
          transform="translate(1, 1)"
          fillRule="nonzero"
        >
          <path
            d="M11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 Z M11,2 C6.02943725,2 2,6.02943725 2,11 C2,15.9705627 6.02943725,20 11,20 C15.9705627,20 20,15.9705627 20,11 C20,6.02943725 15.9705627,2 11,2 Z"
            id="Oval"
            fill="#348CFD"
            opacity="0.25"
          ></path>
          <path
            d="M19.0287175,4.94590384 C19.5005019,4.65878387 20.1157155,4.80848402 20.4028355,5.28026847 C21.4419642,6.98772474 22,8.94986784 22,10.9915479 C22,17.0666801 17.0751322,21.9915479 11,21.9915479 C10.4477153,21.9915479 10,21.5438326 10,20.9915479 C10,20.4392631 10.4477153,19.9915479 11,19.9915479 C15.9705627,19.9915479 20,15.9621106 20,10.9915479 C20,9.31924154 19.5441371,7.7163545 18.6943528,6.32002184 C18.4072329,5.84823739 18.556933,5.2330238 19.0287175,4.94590384 Z"
            id="Oval"
            fill="#5ACCE6"
          ></path>
        </g>
      </g>
    </svg>
  ),
  NavigationPanelReveal: (props: IconProps) => (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.856 5.078H1M5.078 1 1 5.078l4.078 4.078M15.582 9.156V1" />
      </g>
    </svg>
  ),
  MissingIcon: (props: IconProps) => <div>Missing icon</div>,
  Series: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="Series"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M8.17391304,15.826087 L4.69565217,15.826087 C4.31145409,15.826087 4,15.5146329 4,15.1304348 L4,4.69565217 C4,4.31145409 4.31145409,4 4.69565217,4 L15.1304348,4 C15.5146329,4 15.826087,4.31145409 15.826087,4.69565217 L15.826087,8.17391304"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <rect
          id="Rectangle"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="8.17391304"
          y="8.17391304"
          width="11.826087"
          height="11.826087"
          rx="1"
        ></rect>
      </g>
    </svg>
  ),
  Settings: (props: IconProps) => (
    <svg
      width="15.7826087px"
      height="15.7826087px"
      viewBox="0 0 15.7826087 15.7826087"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-display-settings</title>
      <g
        id="Artboards"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Segmentation---assets"
          transform="translate(-42.127, -62.1087)"
          stroke="currentColor"
        >
          <g
            id="icon-display-settings"
            transform="translate(40, 60)"
          >
            <circle
              id="Oval"
              cx="10"
              cy="4.34782609"
              r="1.73913043"
            ></circle>
            <line
              x1="11.7373913"
              y1="4.34782609"
              x2="17.4095652"
              y2="4.34782609"
              id="Path"
            ></line>
            <line
              x1="2.62695652"
              y1="4.34782609"
              x2="8.2573913"
              y2="4.34782609"
              id="Path"
            ></line>
            <g
              id="Group-26"
              transform="translate(10.0183, 10) scale(-1, 1) translate(-10.0183, -10)translate(2.627, 8.2609)"
            >
              <circle
                id="Oval"
                transform="translate(3.8948, 1.7391) scale(-1, 1) translate(-3.8948, -1.7391)"
                cx="3.89478261"
                cy="1.73913043"
                r="1.73913043"
              ></circle>
              <line
                x1="5.63043478"
                y1="1.73913043"
                x2="14.7826087"
                y2="1.73913043"
                id="Path"
                transform="translate(10.2065, 1.7391) scale(-1, 1) translate(-10.2065, -1.7391)"
              ></line>
              <line
                x1="0"
                y1="1.73913043"
                x2="2.15217391"
                y2="1.73913043"
                id="Path"
                transform="translate(1.0761, 1.7391) scale(-1, 1) translate(-1.0761, -1.7391)"
              ></line>
            </g>
            <circle
              id="Oval"
              cx="8.26086957"
              cy="15.6521739"
              r="1.73913043"
            ></circle>
            <line
              x1="9.99652174"
              y1="15.6521739"
              x2="17.4095652"
              y2="15.6521739"
              id="Path"
            ></line>
            <line
              x1="2.62695652"
              y1="15.6521739"
              x2="6.52173913"
              y2="15.6521739"
              id="Path"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  ),
  Show: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="show"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M18.0567826,8.96286957 C19.1471229,9.75269568 20.1356859,10.674229 21,11.7065217 C21,11.7065217 17.1949565,16.5108696 12.5,16.5108696 C11.7479876,16.5066962 11.0007435,16.3911225 10.2826087,16.167913"
          id="Path"
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.93286957,14.4413043 C5.84666081,13.6535964 4.86162018,12.7350857 4,11.7065217 C4,11.7065217 7.80504348,6.90217391 12.5,6.90217391 C13.1235541,6.90480509 13.7443251,6.98550531 14.3478261,7.1423913"
          id="Path"
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.54347826,11.7065217 C9.54347826,10.0736799 10.8671581,8.75 12.5,8.75"
          id="Path"
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.4565217,11.7065217 C15.4565217,13.3393636 14.1328419,14.6630435 12.5,14.6630435"
          id="Path"
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <line
          x1="19.7065217"
          y1="4.5"
          x2="5.29347826"
          y2="18.9130435"
          id="Path"
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),
  SidePanelCloseLeft: (props: IconProps) => (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-panel-close-left</title>
      <g
        id="Artboards-Updated"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Segmentation---assets"
          transform="translate(-370, -60)"
        >
          <g
            id="icon-panel-close-left"
            transform="translate(380, 70) scale(-1, 1) translate(-380, -70)translate(370, 60)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="20"
              height="20"
            ></rect>
            <line
              x1="12.8336364"
              y1="10.4061473"
              x2="3"
              y2="10.4061473"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(7.9168, 10.4061) scale(-1, 1) translate(-7.9168, -10.4061)"
            ></line>
            <polyline
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(10.7991, 10.4061) scale(-1, 1) translate(-10.7991, -10.4061)"
              points="12.8336364 6.33705636 8.76454545 10.4061473 12.8336364 14.4752382"
            ></polyline>
            <line
              x1="16.2418182"
              y1="14.4752382"
              x2="16.2418182"
              y2="6.33705636"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(16.2418, 10.4061) scale(-1, 1) translate(-16.2418, -10.4061)"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  ),
  SidePanelCloseRight: (props: IconProps) => (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>icon-panel-close-right</title>
      <g
        id="Artboards-Updated"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Segmentation---assets"
          transform="translate(-418, -60)"
        >
          <g
            id="icon-panel-close-right"
            transform="translate(418, 60)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="20"
              height="20"
            ></rect>
            <line
              x1="12.8336364"
              y1="10.4061473"
              x2="3"
              y2="10.4061473"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(7.9168, 10.4061) scale(-1, 1) translate(-7.9168, -10.4061)"
            ></line>
            <polyline
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(10.7991, 10.4061) scale(-1, 1) translate(-10.7991, -10.4061)"
              points="12.8336364 6.33705636 8.76454545 10.4061473 12.8336364 14.4752382"
            ></polyline>
            <line
              x1="16.2418182"
              y1="14.4752382"
              x2="16.2418182"
              y2="6.33705636"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(16.2418, 10.4061) scale(-1, 1) translate(-16.2418, -10.4061)"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  ),
  TabSegmentation: (props: IconProps) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <circle
          stroke="currentColor"
          cx="11.037"
          cy="10.912"
          r="8"
        />
        <g stroke="currentColor">
          <path
            strokeLinecap="square"
            d="m11.354 3.575-7.779 7.779M17.364 6.757 6.757 17.364"
          />
          <path d="m18.955 9.763-9.192 9.192" />
          <path
            strokeLinecap="square"
            d="M15.066 4.46 4.459 15.065"
          />
        </g>
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  ),
  TabLinear: (props: IconProps) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <rect
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="1.5"
          y="16.37"
          width="4.13"
          height="4.13"
          rx="1"
        />
        <rect
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="16.37"
          y="1.5"
          width="4.13"
          height="4.13"
          rx="1"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.388 16.612 16.612 5.388"
        />
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  ),
  TabStudies: (props: IconProps) => (
    <svg
      width="22px"
      height="23px"
      viewBox="0 0 22 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>tab-studies</title>
      <g
        id="Artboards-Updated"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Segmentation---assets"
          transform="translate(-61, -242)"
        >
          <g
            id="tab-studies"
            transform="translate(61, 242.5)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="22"
              height="22"
            ></rect>
            <path
              d="M6.93478261,15.0652174 L3.23913043,15.0652174 C2.83091997,15.0652174 2.5,14.7342974 2.5,14.326087 L2.5,3.23913043 C2.5,2.83091997 2.83091997,2.5 3.23913043,2.5 L14.326087,2.5 C14.7342974,2.5 15.0652174,2.83091997 15.0652174,3.23913043 L15.0652174,6.93478261"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <rect
              id="Rectangle"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              x="6.93478261"
              y="6.93478261"
              width="12.5652174"
              height="12.5652174"
              rx="1"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  ),
  Refresh: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <polyline
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="12 8 12 12 15 14"
        ></polyline>
      </g>
    </svg>
  ),
  Tab4D: (props: IconProps) => (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>tab-4d</title>
      <g
        id="tab-4d"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Group"
          transform="translate(1, 1)"
          stroke="currentColor"
        >
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="20"
            height="20"
            rx="2"
          ></rect>
          <g
            id="Group-3"
            transform="translate(4, 5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M6.9072464,0.398231009 C9.3565092,0.398231009 11.342029,2.38375081 11.342029,4.83301362 C11.342029,7.28227642 9.3565092,9.26779623 6.9072464,9.26779623 L6.9072464,0.398231009 Z"
              id="Path"
            ></path>
            <polyline
              id="Path-2"
              points="3.27497101 4.83301362 0 4.83301362 3.62401581 0 3.62401581 4.87475204 3.62401581 9.26779623"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  ),
  TabPatientInfo: (props: IconProps) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M3.638 13.16a17.265 17.265 0 0 1 3.652-1.586c.565-.21.626-1.504.221-1.95-.584-.642-1.08-1.396-1.08-3.215a2.572 2.572 0 0 1 2.632-2.811 2.572 2.572 0 0 1 2.631 2.811c0 1.822-.495 2.573-1.08 3.215-.404.446-.343 1.74.222 1.95 1.275.386 2.5.919 3.652 1.587"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.15 11.064V2.369a.87.87 0 0 0-.87-.869H2.37a.87.87 0 0 0-.87.87v13.91c0 .48.39.87.87.87h8.694M15.846 20.628l-3.043.87.87-3.044 5.2-5.2a1.537 1.537 0 0 1 2.174 2.173l-5.201 5.2zM18.221 13.905l2.174 2.174M13.672 18.454l2.174 2.174"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  ),
  TabRoiThreshold: (props: IconProps) => (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="m13.34 11.74-2.971.425.425-2.971 7.64-7.64A1.8 1.8 0 1 1 20.98 4.1l-7.64 7.64zM8.644 19.034h7.383c.865 0 1.566-.701 1.566-1.566V10.03M12.504 4.94H5.066C4.2 4.94 3.5 5.643 3.5 6.508v1.972"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="currentColor"
          d="m11.5 8.5 2.333 2.333"
        />
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m1 14 2.5-2.5L6 14M1 17.5 3.5 20 6 17.5" />
        </g>
        <path d="M0 0h22v22H0z" />
      </g>
    </svg>
  ),
  Plus: (props: IconProps) => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path d="M0 0h21v21H0z" />
        <g
          stroke="#348CFD"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
        >
          <path d="M10.5 5.5v10M15.5 10.5h-10" />
        </g>
      </g>
    </svg>
  ),
  Minus: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Remove"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <line
          x1="18"
          y1="12"
          x2="6"
          y2="12"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></line>
      </g>
    </svg>
  ),

  FillAndOutline: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-outline-fill"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            stroke="#348CFD"
            x="1.5"
            y="1.5"
            width="15"
            height="15"
            rx="1"
          ></rect>
          <rect
            id="Rectangle"
            fill="#348CFD"
            x="3.5"
            y="3.5"
            width="11"
            height="11"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  OutlineOnly: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-outline"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            stroke="#348CFD"
            x="1.5"
            y="1.5"
            width="15"
            height="15"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  FillOnly: (props: IconProps) => (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        id="view-fill"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-13">
          <rect
            id="Rectangle"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            fill="#348CFD"
            x="2"
            y="2"
            width="14"
            height="14"
            rx="1"
          ></rect>
        </g>
      </g>
    </svg>
  ),
  EyeVisible: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 13"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0 1)"
      >
        <circle
          cx="10"
          cy="5.833"
          r="2.917"
        />
        <path d="M19.48 5.56C18.51 4.46 14.635.417 10 .417 5.365.417 1.49 4.46.52 5.56c-.136.157-.136.39 0 .547.97 1.1 4.845 5.143 9.48 5.143 4.635 0 8.51-4.043 9.48-5.143.136-.157.136-.39 0-.547z" />
      </g>
    </svg>
  ),
  EyeHidden: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 20"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g opacity=".5">
          <path
            d="M17.433 2.556c1.352.98 2.578 2.122 3.65 3.402 0 0-4.719 5.959-10.541 5.959-.933-.006-1.86-.149-2.75-.426M3.637 9.35C2.29 8.373 1.07 7.234 0 5.958 0 5.958 4.719 0 10.542 0c.773.003 1.543.103 2.291.298M6.875 5.958c0-2.025 1.642-3.666 3.667-3.666M14.208 5.958c0 2.025-1.641 3.667-3.666 3.667"
            transform="translate(1 1) translate(.458 3.208)"
          />
        </g>
        <path
          d="M19.938 0.229L2.063 18.104"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  ),
  ViewportViews: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="icon-views"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="24"
          height="24"
        ></rect>
        <path
          d="M12.1675111,14.754511 C12.0607016,14.815163 11.9392984,14.815163 11.8324889,14.754511 L3.25173267,9.89965265 C3.09886891,9.81313583 3,9.61689546 3,9.4 C3,9.18310454 3.09886891,8.98686417 3.25173267,8.90034735 L11.8324889,4.04548902 C11.9392984,3.98483699 12.0607016,3.98483699 12.1675111,4.04548902 L20.7482673,8.90034735 C20.9011311,8.98686417 21,9.18310454 21,9.4 C21,9.61689546 20.9011311,9.81313583 20.7482673,9.89965265 L12.1675111,14.754511 Z"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.7792809,12.1 L20.7482673,14.3367372 C20.9011311,14.4227204 21,14.6177503 21,14.833308 C21,15.0488656 20.9011311,15.2438955 20.7482673,15.3298787 L12.1675111,20.1547916 C12.0607016,20.2150695 11.9392984,20.2150695 11.8324889,20.1547916 L3.25173267,15.3298787 C3.09886891,15.2438955 3,15.0488656 3,14.833308 C3,14.6177503 3.09886891,14.4227204 3.25173267,14.3367372 L7.2018101,12.1"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  StatusChecked: (props: IconProps) => (
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        id="status-checked"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="14"
          height="14"
        ></rect>
        <circle
          id="Oval"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="7"
          cy="7"
          r="6"
        ></circle>
        <path
          d="M9.674,5.256 L6.769,9.129 C6.63825806,9.30267425 6.43875708,9.41127411 6.22192754,9.42680302 C6.00509799,9.44233192 5.79215707,9.36327034 5.638,9.21 L4.138,7.71"
          id="Path"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),

  DicomTagBrowser: (props: IconProps) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>tool-dicom-tag-browser</title>
      <g
        id="tool-dicom-tag-browser"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          x="0"
          y="0"
          width="28"
          height="28"
        ></rect>
        <g
          id="Group"
          transform="translate(4, 5.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <circle
            id="Oval"
            cx="1.73913043"
            cy="1.73913043"
            r="1.73913043"
          ></circle>
          <line
            x1="6.95652174"
            y1="1.73913043"
            x2="20"
            y2="1.73913043"
            id="Path"
          ></line>
          <circle
            id="Oval"
            cx="1.73913043"
            cy="8.69565217"
            r="1.73913043"
          ></circle>
          <line
            x1="6.95652174"
            y1="8.69565217"
            x2="20"
            y2="8.69565217"
            id="Path"
          ></line>
          <circle
            id="Oval"
            cx="1.73913043"
            cy="15.6521739"
            r="1.73913043"
          ></circle>
          <line
            x1="6.95652174"
            y1="15.6521739"
            x2="20"
            y2="15.6521739"
            id="Path"
          ></line>
        </g>
      </g>
    </svg>
  ),
  PowerOff: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      aria-labelledby="title"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <title id="title">Power Off</title>
      <path d="M24 14c0 6.609-5.391 12-12 12s-12-5.391-12-12c0-3.797 1.75-7.297 4.797-9.578 0.891-0.672 2.141-0.5 2.797 0.391 0.672 0.875 0.484 2.141-0.391 2.797-2.031 1.531-3.203 3.859-3.203 6.391 0 4.406 3.594 8 8 8s8-3.594 8-8c0-2.531-1.172-4.859-3.203-6.391-0.875-0.656-1.062-1.922-0.391-2.797 0.656-0.891 1.922-1.062 2.797-0.391 3.047 2.281 4.797 5.781 4.797 9.578zM14 2v10c0 1.094-0.906 2-2 2s-2-0.906-2-2v-10c0-1.094 0.906-2 2-2s2 0.906 2 2z" />
    </svg>
  ),
  MultiplePatients: (props: IconProps) => (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>icon-multiple-patients</title>
      <g
        id="4D-assets---final"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-171, -280)"
        >
          <g
            id="icon-multiple-patients"
            transform="translate(171, 280)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="28"
              height="28"
            ></rect>
            <g
              id="Group-3"
              transform="translate(2, 1.5)"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g
                id="patient-icon"
                transform="translate(9, 10)"
              >
                <circle
                  id="Oval"
                  cx="7.5"
                  cy="7.5"
                  r="7.5"
                ></circle>
                <path
                  d="M2.331,12.935 C3.39163827,12.4490078 4.47638164,12.0174468 5.581,11.642 C6.189,11.416 6.09,9.827 5.82,9.531 C4.95198021,8.59033128 4.52668888,7.3239163 4.651,6.05 C4.5727272,5.23902161 4.83519788,4.43201369 5.37555564,3.82223826 C5.9159134,3.21246283 6.68549454,2.85483523 7.5,2.835 C8.31450546,2.85483523 9.0840866,3.21246283 9.62444436,3.82223826 C10.1648021,4.43201369 10.4272728,5.23902161 10.349,6.05 C10.4733111,7.3239163 10.0480198,8.59033128 9.18,9.531 C8.91,9.831 8.811,11.416 9.419,11.642 C10.5236184,12.0174468 11.6083617,12.4490078 12.669,12.935"
                  id="Path"
                ></path>
              </g>
              <g id="patient-icon">
                <path
                  d="M7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,8.48189915 14.8113103,9.41972745 14.4682129,10.2792028 C12.213795,10.9117859 10.3898771,12.5712406 9.53178711,14.7207972 C8.88630634,14.9028658 8.20449663,15 7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 Z"
                  id="Combined-Shape"
                ></path>
                <path
                  d="M2.331,12.935 C3.39163827,12.4490078 4.47638164,12.0174468 5.581,11.642 C6.189,11.416 6.09,9.827 5.82,9.531 C4.95198021,8.59033128 4.52668888,7.3239163 4.651,6.05 C4.5727272,5.23902161 4.83519788,4.43201369 5.37555564,3.82223826 C5.9159134,3.21246283 6.68549454,2.85483523 7.5,2.835 C8.31450546,2.85483523 9.0840866,3.21246283 9.62444436,3.82223826 C10.1648021,4.43201369 10.4272728,5.23902161 10.349,6.05 C10.4733111,7.3239163 10.0480198,8.59033128 9.18,9.531 C8.91,9.831 8.811,11.416 9.419,11.642 C10.5236184,12.0174468 10.5236184,12.0174468 10.9701462,12.2764988"
                  id="Path"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  Patient: (props: IconProps) => (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>icon-patient</title>
      <g
        id="Production"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-104, -235)"
        >
          <g
            id="icon-patient"
            transform="translate(104, 235)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="28"
              height="28"
            ></rect>
            <circle
              id="Oval"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              cx="14"
              cy="14"
              r="9"
            ></circle>
            <path
              d="M7.7972,20.522 C9.06996592,19.9388093 10.371658,19.4209361 11.6972,18.9704 C12.4268,18.6992 12.308,16.7924 11.984,16.4372 C10.9423763,15.3083975 10.4320267,13.7886996 10.5812,12.26 C10.4872726,11.2868259 10.8022375,10.3184164 11.4506668,9.58668591 C12.0990961,8.8549554 13.0225934,8.42580227 14,8.402 C14.9774066,8.42580227 15.9009039,8.8549554 16.5493332,9.58668591 C17.1977625,10.3184164 17.5127274,11.2868259 17.4188,12.26 C17.5679733,13.7886996 17.0576237,15.3083975 16.016,16.4372 C15.692,16.7972 15.5732,18.6992 16.3028,18.9704 C17.628342,19.4209361 18.9300341,19.9388093 20.2028,20.522"
              id="Path"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  ChevronPatient: (props: IconProps) => (
    <svg
      width="28px"
      height="29px"
      viewBox="0 0 28 29"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Production"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-154, -234)"
        >
          <g
            id="icon-chevron-patient"
            transform="translate(168, 248.5) scale(-1, -1) translate(-168, -248.5)translate(154, 234.5)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="28"
              height="28"
            ></rect>
            <polyline
              id="Path"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(14.5, 14) scale(-1, 1) translate(-14.5, -14)"
              points="16.5 10 12.5 14 16.5 18"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  ),
  KapsikiDICOM: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="173"
      height="21"
      fill="none"
      viewBox="0 0 173 21"
    >
      <g clipPath="url(#clip0_173_14)">
        <path
          fill="url(#pattern0_173_14)"
          d="M24 0H0v21h24z"
        ></path>
      </g>
      <path
        fill="#000"
        d="M33.057 15V6.273h1.057v4.33h.102l3.92-4.33h1.381l-3.665 3.937L39.517 15H38.24l-3.034-4.057-1.091 1.227V15zM41.243 15h-1.108l3.205-8.727h1.09L47.635 15h-1.108l-2.608-7.347h-.068zm.409-3.41h4.466v.938h-4.466zM48.994 15V6.273h2.95q1.026 0 1.678.37.656.367.972.993.315.627.315 1.398t-.315 1.402q-.312.63-.963 1.006-.653.37-1.67.37h-2.114v-.937h2.08q.702 0 1.128-.243.427-.243.618-.656a2.2 2.2 0 0 0 .196-.942q0-.525-.196-.937a1.4 1.4 0 0 0-.622-.648q-.43-.24-1.142-.239h-1.858V15zM61.384 8.454a1.34 1.34 0 0 0-.622-1.005q-.546-.358-1.338-.358-.579 0-1.014.187a1.6 1.6 0 0 0-.673.516q-.24.328-.24.746 0 .35.167.6.171.248.435.414.264.162.554.268.29.103.532.167l.887.238q.34.09.758.247.422.158.806.43.387.27.639.691.251.422.251 1.036 0 .707-.37 1.278-.368.57-1.074.908-.704.336-1.71.336-.936 0-1.623-.302a2.6 2.6 0 0 1-1.074-.844 2.4 2.4 0 0 1-.438-1.257h1.09q.044.494.333.818a1.8 1.8 0 0 0 .741.477q.452.154.972.154.605 0 1.087-.196.48-.2.762-.554.282-.358.282-.835 0-.435-.243-.708a1.8 1.8 0 0 0-.64-.443 7 7 0 0 0-.856-.298l-1.074-.307q-1.023-.294-1.62-.84-.596-.546-.596-1.427 0-.733.396-1.279.4-.549 1.074-.852a3.6 3.6 0 0 1 1.513-.307q.845 0 1.5.303.657.298 1.04.818.388.52.409 1.18zM65.32 6.273V15h-1.056V6.273zM67.44 15V6.273h1.056v4.33h.103l3.92-4.33h1.38l-3.664 3.937L73.9 15H72.62l-3.034-4.057-1.09 1.227V15zM76.325 6.273V15h-1.057V6.273zM84.614 15H81.52V6.273h3.12q1.316 0 2.267.524.95.52 1.461 1.496.516.976.516 2.335 0 1.363-.516 2.344a3.54 3.54 0 0 1-1.47 1.504q-.954.524-2.284.524m-1.249-1.581h1.172q.819 0 1.377-.29.563-.294.843-.907.285-.619.286-1.594 0-.968-.286-1.581a1.85 1.85 0 0 0-.839-.904q-.558-.29-1.376-.29h-1.177zM92.096 6.273V15H90.25V6.273zM101.314 9.328h-1.866a1.8 1.8 0 0 0-.209-.643 1.6 1.6 0 0 0-.405-.486 1.8 1.8 0 0 0-.57-.307 2.2 2.2 0 0 0-.695-.107q-.678 0-1.18.337-.504.333-.78.972-.278.634-.278 1.542 0 .933.277 1.569.283.634.784.958a2.1 2.1 0 0 0 1.164.324 2.3 2.3 0 0 0 .686-.098q.32-.098.567-.285.246-.192.409-.465.165-.274.23-.622l1.866.008q-.072.601-.362 1.16-.285.554-.771.992-.482.435-1.15.69a4.2 4.2 0 0 1-1.505.252q-1.167 0-2.088-.528-.916-.528-1.449-1.53-.528-1.002-.528-2.425 0-1.427.537-2.429t1.457-1.525q.921-.53 2.07-.529.76 0 1.407.213.652.213 1.155.623.503.404.818.992.32.588.409 1.347M110.657 10.636q0 1.428-.541 2.43-.537 1-1.466 1.53-.924.523-2.079.523-1.164 0-2.088-.528t-1.462-1.53q-.537-1.002-.537-2.425 0-1.427.537-2.429t1.462-1.525q.924-.53 2.088-.529 1.155 0 2.079.529.93.525 1.466 1.525.541 1.002.541 2.43m-1.87 0q0-.924-.277-1.56-.273-.635-.772-.962a2.07 2.07 0 0 0-1.167-.329q-.67 0-1.168.329-.498.328-.776.963-.272.635-.272 1.56 0 .924.272 1.559.278.635.776.963t1.168.328 1.167-.328q.5-.328.772-.963.276-.634.277-1.56M112.024 6.273h2.276l2.403 5.863h.102l2.404-5.863h2.275V15h-1.789V9.32h-.073l-2.258 5.637h-1.219l-2.259-5.659h-.072V15h-1.79zM127.359 6.273l2.109 6.63h.081l2.114-6.63h2.045L130.7 15h-2.378l-3.013-8.727zM136.604 6.273V15h-1.845V6.273zM138.122 15V6.273h5.88v1.521h-4.035v2.08h3.733v1.52h-3.733v2.085h4.053v1.52zM147.434 15l-2.497-8.727h2.015l1.445 6.064h.072l1.594-6.064h1.726l1.59 6.076h.076l1.445-6.076h2.015L154.418 15h-1.798l-1.662-5.706h-.068L149.232 15zM157.903 15V6.273h5.881v1.521h-4.036v2.08h3.733v1.52h-3.733v2.085h4.053v1.52zM165.251 15V6.273h3.443q.988 0 1.687.353.704.35 1.07.993.37.64.371 1.504 0 .87-.375 1.496a2.43 2.43 0 0 1-1.087.955q-.707.332-1.713.332h-2.305v-1.483h2.007q.528 0 .878-.145.35-.144.519-.434.175-.291.175-.72 0-.435-.175-.733a1.07 1.07 0 0 0-.524-.452q-.35-.158-.882-.158h-1.244V15zm4.713-3.972L172.133 15h-2.037l-2.122-3.972z"
      ></path>
      <defs>
        <clipPath id="clip0_173_14">
          <path
            fill="#fff"
            d="M0 0h24v21H0z"
          ></path>
        </clipPath>
        <pattern
          id="pattern0_173_14"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#image0_173_14"
            transform="scale(.00407 .00478)"
          ></use>
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_173_14"
          width="246"
          height="209"
          preserveAspectRatio="none"
        ></image>
      </defs>
    </svg>
  ),
  OHIFLogo: (props: IconProps) => (
    <svg
      width="138px"
      height="28px"
      viewBox="0 0 138 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Production"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-74, -297)"
        >
          <g
            id="toolbar-branding-open-health-imaging-foundation"
            transform="translate(74, 297)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="138"
              height="28"
            ></rect>
            <path
              d="M37.7225261,11.2237762 C39.7660251,11.2237762 41.2479518,9.64468611 41.2479518,7.11188811 C41.2479518,4.57909011 39.7660251,3 37.7225261,3 C35.6790271,3 34.1971004,4.57909011 34.1971004,7.11188811 C34.1971004,9.64468611 35.6790271,11.2237762 37.7225261,11.2237762 Z M37.8064648,10.3846154 C36.3486619,10.3846154 35.2043649,9.26464267 35.2043649,7.1958042 C35.2043649,5.12696572 36.3486619,4.00699301 37.8064648,4.00699301 C39.2642678,4.00699301 40.4085648,5.12696572 40.4085648,7.1958042 C40.4085648,9.26464267 39.2642678,10.3846154 37.8064648,10.3846154 Z M43.6645943,13.2377622 L43.6645943,10.1056298 L43.7413524,10.1056298 C43.9409235,10.4296435 44.324714,11.1393878 45.4607341,11.1393878 C46.9344898,11.1393878 47.9630485,9.95133759 47.9630485,8.0689723 C47.9630485,6.20203624 46.9344898,5.01398601 45.4453824,5.01398601 C44.2940108,5.01398601 43.9409235,5.7237303 43.7413524,6.03231478 L43.633891,6.03231478 L43.633891,5.09113213 L42.7588486,5.09113213 L42.7588486,13.2377622 L43.6645943,13.2377622 Z M45.4297631,10.3846154 C44.3559526,10.3846154 43.7661131,9.45029198 43.7661131,8.09552303 C43.7661131,6.75632615 44.3408286,5.85314685 45.4297631,5.85314685 C46.56407,5.85314685 47.1236614,6.83418643 47.1236614,8.09552303 C47.1236614,9.37243169 46.5489459,10.3846154 45.4297631,10.3846154 Z M51.8942607,11.2237762 C53.0952299,11.2237762 53.9728613,10.6137465 54.250008,9.7065227 L53.3723767,9.45625407 C53.141421,10.0819256 52.6063739,10.3947614 51.8942607,10.3947614 C50.8280156,10.3947614 50.0928069,9.69479135 50.0504651,8.40825421 L54.3423903,8.40825421 L54.3423903,8.01720949 C54.3423903,5.78043367 53.0336418,5.01398601 51.8018785,5.01398601 C50.2005862,5.01398601 49.1381904,6.29661271 49.1381904,8.1423438 C49.1381904,9.9880749 50.1851892,11.2237762 51.8942607,11.2237762 Z M53.5030032,7.53146853 L50.1454549,7.53146853 C50.20685,6.64403738 50.8553365,5.85314685 51.89138,5.85314685 C52.8737027,5.85314685 53.5030032,6.56606226 53.5030032,7.53146853 Z M56.7655682,11.0559441 L56.7655682,7.46804609 C56.7655682,6.42740036 57.4072575,5.83718338 58.2808828,5.83718338 C59.1274488,5.83718338 59.6415734,6.39245331 59.6415734,7.32825786 L59.6415734,11.0559441 L60.5538546,11.0559441 L60.5538546,7.26612976 C60.5538546,5.74399123 59.7459446,5.01398601 58.5437435,5.01398601 C57.6469246,5.01398601 57.0902785,5.41781869 56.8119554,6.02356769 L56.7346434,6.02356769 L56.7346434,5.09164614 L55.853287,5.09164614 L55.853287,11.0559441 L56.7655682,11.0559441 Z M66.2244746,11.0559441 L66.2244746,7.52786276 L70.4958343,7.52786276 L70.4958343,11.0559441 L71.4658866,11.0559441 L71.4658866,3.16783217 L70.4958343,3.16783217 L70.4958343,6.68050699 L66.2244746,6.68050699 L66.2244746,3.16783217 L65.2544223,3.16783217 L65.2544223,11.0559441 L66.2244746,11.0559441 Z M75.7328537,11.2237762 C76.9338229,11.2237762 77.8114543,10.6137465 78.088601,9.7065227 L77.2109697,9.45625407 C76.980014,10.0819256 76.4449669,10.3947614 75.7328537,10.3947614 C74.6666086,10.3947614 73.9313999,9.69479135 73.889058,8.40825421 L78.1809832,8.40825421 L78.1809832,8.01720949 C78.1809832,5.78043367 76.8722347,5.01398601 75.6404715,5.01398601 C74.0391792,5.01398601 72.9767834,6.29661271 72.9767834,8.1423438 C72.9767834,9.9880749 74.0237822,11.2237762 75.7328537,11.2237762 Z M77.3415962,7.53146853 L73.9840479,7.53146853 C74.045443,6.64403738 74.6939295,5.85314685 75.729973,5.85314685 C76.7122957,5.85314685 77.3415962,6.56606226 77.3415962,7.53146853 Z M81.3619048,11.2237762 C82.3877616,11.2237762 82.9236569,10.6620867 83.1073925,10.2720245 L83.1533264,10.2720245 L83.1533264,11.0833538 L84.0566928,11.0833538 L84.0566928,7.13592438 C84.0566928,5.23242085 82.6327423,5.01398601 81.8824889,5.01398601 C80.9944337,5.01398601 79.9838882,5.32603577 79.5245494,6.41820993 L80.3819819,6.73025969 C80.5810288,6.29339003 81.0518511,5.82531539 81.9131114,5.82531539 C82.7437492,5.82531539 83.1533264,6.27388692 83.1533264,7.04230945 L83.1533264,7.07351443 C83.1533264,7.51818533 82.7092988,7.47917911 81.6375081,7.6196015 C80.5465783,7.76392452 79.3561251,8.0096637 79.3561251,9.38268264 C79.3561251,10.5528692 80.2441803,11.2237762 81.3619048,11.2237762 Z M81.5864965,10.3846154 C80.8767925,10.3846154 80.3633896,10.0534566 80.3633896,9.40690853 C80.3633896,8.69728258 80.9824931,8.47651007 81.677097,8.38189327 C82.0545992,8.33458488 83.0663049,8.22419862 83.2173057,8.03496503 L83.2173057,8.88651617 C83.2173057,9.64345051 82.6435025,10.3846154 81.5864965,10.3846154 Z M86.7427314,11.0559441 L86.7427314,3.16783217 L85.9033443,3.16783217 L85.9033443,11.0559441 L86.7427314,11.0559441 Z M90.4262553,11.2237762 C90.7668998,11.2237762 90.9836735,11.1623657 91.1075442,11.1163078 L90.9217382,10.3026184 C90.844319,10.317971 90.7204482,10.3486763 90.5191583,10.3486763 C90.1165785,10.3486763 89.7294825,10.2258552 89.7294825,9.45822369 L89.7294825,6.0192344 L90.9991573,6.0192344 L90.9991573,5.25160287 L89.7294825,5.25160287 L89.7294825,3.83916084 L88.815936,3.83916084 L88.815936,5.25160287 L87.9178733,5.25160287 L87.9178733,6.0192344 L88.815936,6.0192344 L88.815936,9.70386578 C88.815936,10.732492 89.6520633,11.2237762 90.4262553,11.2237762 Z M93.350997,11.0559441 L93.350997,7.49704983 C93.350997,6.46481643 94.0034296,5.87937063 94.8924169,5.87937063 C95.7394347,5.87937063 96.2506978,6.41859703 96.2506978,7.35839161 L96.2506978,11.0559441 L97.1511312,11.0559441 L97.1511312,7.29676573 C97.1511312,5.77537697 96.3498981,5.0628278 95.1518638,5.0628278 C94.228538,5.0628278 93.7020134,5.45184113 93.4273049,6.06424825 L93.350997,6.06424825 L93.350997,3.16783217 L92.4505635,3.16783217 L92.4505635,11.0559441 L93.350997,11.0559441 Z M35.5401197,24.6503497 L35.5401197,16.7622378 L34.5328552,16.7622378 L34.5328552,24.6503497 L35.5401197,24.6503497 Z M38.3104302,24.6503497 L38.3104302,20.9226635 C38.3104302,20.048987 38.9522948,19.431589 39.6724356,19.431589 C40.3730074,19.431589 40.8622335,19.8859007 40.8622335,20.5654269 L40.8622335,24.6503497 L41.8015476,24.6503497 L41.8015476,20.7673432 C41.8015476,19.9985079 42.2868599,19.431589 43.1322426,19.431589 C43.7897625,19.431589 44.3533509,19.7771766 44.3533509,20.658619 L44.3533509,24.6503497 L45.2770098,24.6503497 L45.2770098,20.658619 C45.2770098,19.2568537 44.5177309,18.6083916 43.4453473,18.6083916 C42.5843094,18.6083916 41.9541862,19.0005753 41.6449953,19.6179733 L41.5823743,19.6179733 C41.2849249,18.9811602 40.7604745,18.6083916 39.9698851,18.6083916 C39.1871233,18.6083916 38.6078796,18.9811602 38.3573959,19.6179733 L38.2791197,19.6179733 L38.2791197,18.6860517 L37.3867713,18.6860517 L37.3867713,24.6503497 L38.3104302,24.6503497 Z M48.6258088,24.8181818 C49.6516656,24.8181818 50.1875609,24.2564923 50.3712965,23.8664301 L50.4172304,23.8664301 L50.4172304,24.6777594 L51.3205968,24.6777594 L51.3205968,20.73033 C51.3205968,18.8268264 49.8966463,18.6083916 49.1463929,18.6083916 C48.2583377,18.6083916 47.2477922,18.9204414 46.7884534,20.0126155 L47.6458859,20.3246653 C47.8449328,19.8877956 48.3157551,19.419721 49.1770154,19.419721 C50.0076532,19.419721 50.4172304,19.8682925 50.4172304,20.636715 L50.4172304,20.66792 C50.4172304,21.1125909 49.9732028,21.0735847 48.9014121,21.2140071 C47.8104823,21.3583301 46.6200291,21.6040693 46.6200291,22.9770882 C46.6200291,24.1472748 47.5080843,24.8181818 48.6258088,24.8181818 Z M48.6825231,23.979021 C47.9728191,23.979021 47.4594162,23.6478622 47.4594162,23.0013141 C47.4594162,22.2916882 48.0785197,22.0709157 48.7731236,21.9762989 C49.1506257,21.9289905 50.1623314,21.8186042 50.3133323,21.6293706 L50.3133323,22.4809218 C50.3133323,23.2378561 49.7395291,23.979021 48.6825231,23.979021 Z M55.3194467,27 C56.7317959,27 57.867816,26.3485258 57.867816,24.812908 L57.867816,18.6859481 L56.9927735,18.6859481 L56.9927735,19.6321368 L56.9006638,19.6321368 C56.7010927,19.321911 56.3326538,18.6083916 55.1812821,18.6083916 C53.6921748,18.6083916 52.6636161,19.802761 52.6636161,21.6330933 C52.6636161,23.4944483 53.7382296,24.549216 55.1659305,24.549216 C56.3173021,24.549216 56.6857411,23.8667192 56.8853122,23.5409821 L56.9620703,23.5409821 L56.9620703,24.7508628 C56.9620703,25.7435854 56.2712473,26.1934129 55.3194467,26.1934129 C54.2486711,26.1934129 53.8725563,25.6233729 53.6307683,25.293758 L52.9092421,25.8056306 C53.277681,26.4299601 54.0030451,27 55.3194467,27 Z M55.3647788,23.8111888 C54.2455961,23.8111888 53.6708806,22.9290096 53.6708806,21.6687536 C53.6708806,20.440004 54.230472,19.4475524 55.3647788,19.4475524 C56.4537134,19.4475524 57.0284289,20.361238 57.0284289,21.6687536 C57.0284289,23.0077756 56.4385893,23.8111888 55.3647788,23.8111888 Z M60.0502224,17.7692308 C60.4179539,17.7692308 60.721732,17.5048951 60.721732,17.1818182 C60.721732,16.8587413 60.4179539,16.5944056 60.0502224,16.5944056 C59.6824909,16.5944056 59.3787127,16.8587413 59.3787127,17.1818182 C59.3787127,17.5048951 59.6824909,17.7692308 60.0502224,17.7692308 Z M60.5538546,24.6503497 L60.5538546,18.7762238 L59.7144675,18.7762238 L59.7144675,24.6503497 L60.5538546,24.6503497 Z M63.14491,24.6503497 L63.14491,21.0624517 C63.14491,20.021806 63.7865993,19.431589 64.6602246,19.431589 C65.5067906,19.431589 66.0209152,19.9868589 66.0209152,20.9226635 L66.0209152,24.6503497 L66.9331964,24.6503497 L66.9331964,20.8605354 C66.9331964,19.3383968 66.1252863,18.6083916 64.9230852,18.6083916 C64.0262664,18.6083916 63.4696203,19.0122243 63.1912972,19.6179733 L63.1139852,19.6179733 L63.1139852,18.6860517 L62.2326288,18.6860517 L62.2326288,24.6503497 L63.14491,24.6503497 Z M70.9320463,27 C72.3443956,27 73.4804156,26.3485258 73.4804156,24.812908 L73.4804156,18.6859481 L72.6053731,18.6859481 L72.6053731,19.6321368 L72.5132634,19.6321368 C72.3136923,19.321911 71.9452534,18.6083916 70.7938817,18.6083916 C69.3047744,18.6083916 68.2762157,19.802761 68.2762157,21.6330933 C68.2762157,23.4944483 69.3508293,24.549216 70.7785301,24.549216 C71.9299018,24.549216 72.2983407,23.8667192 72.4979118,23.5409821 L72.5746699,23.5409821 L72.5746699,24.7508628 C72.5746699,25.7435854 71.8838469,26.1934129 70.9320463,26.1934129 C69.8612707,26.1934129 69.485156,25.6233729 69.2433679,25.293758 L68.5218417,25.8056306 C68.8902806,26.4299601 69.6156448,27 70.9320463,27 Z M70.9773785,23.8111888 C69.8581957,23.8111888 69.2834802,22.9290096 69.2834802,21.6687536 C69.2834802,20.440004 69.8430716,19.4475524 70.9773785,19.4475524 C72.0663131,19.4475524 72.6410285,20.361238 72.6410285,21.6687536 C72.6410285,23.0077756 72.051189,23.8111888 70.9773785,23.8111888 Z M79.4660384,24.6503497 L79.4660384,21.1222684 L82.8651459,21.1222684 L82.8651459,20.2749126 L79.4660384,20.2749126 L79.4660384,17.6095935 L83.2173057,17.6095935 L83.2173057,16.7622378 L78.5167381,16.7622378 L78.5167381,24.6503497 L79.4660384,24.6503497 Z M87.0784863,24.8181818 C88.6839346,24.8181818 89.7645249,23.5824805 89.7645249,21.7211076 C89.7645249,19.8440929 88.6839346,18.6083916 87.0784863,18.6083916 C85.4730379,18.6083916 84.3924476,19.8440929 84.3924476,21.7211076 C84.3924476,23.5824805 85.4730379,24.8181818 87.0784863,24.8181818 Z M87.162425,23.979021 C85.9515179,23.979021 85.3997121,22.9201211 85.3997121,21.7210727 C85.3997121,20.5220244 85.9515179,19.4475524 87.162425,19.4475524 C88.3733321,19.4475524 88.9251378,20.5220244 88.9251378,21.7210727 C88.9251378,22.9201211 88.3733321,23.979021 87.162425,23.979021 Z M93.2118681,24.8181818 C94.1176253,24.8181818 94.7110525,24.336689 94.9921495,23.73094 L95.0546155,23.73094 L95.0546155,24.7405217 L95.9759893,24.7405217 L95.9759893,18.7762238 L95.0546155,18.7762238 L95.0546155,22.3019936 C95.0546155,23.4202995 94.1957078,23.9328563 93.5085817,23.9328563 C92.743373,23.9328563 92.1967954,23.3737034 92.1967954,22.50391 L92.1967954,18.7762238 L91.2754216,18.7762238 L91.2754216,22.5660381 C91.2754216,24.0881766 92.0874798,24.8181818 93.2118681,24.8181818 Z M98.3991672,24.6503497 L98.3991672,21.0624517 C98.3991672,20.021806 99.0408566,19.431589 99.9144818,19.431589 C100.761048,19.431589 101.275172,19.9868589 101.275172,20.9226635 L101.275172,24.6503497 L102.187454,24.6503497 L102.187454,20.8605354 C102.187454,19.3383968 101.379544,18.6083916 100.177342,18.6083916 C99.2805237,18.6083916 98.7238775,19.0122243 98.4455544,19.6179733 L98.3682424,19.6179733 L98.3682424,18.6860517 L97.486886,18.6860517 L97.486886,24.6503497 L98.3991672,24.6503497 Z M106.200665,24.8181818 C107.336685,24.8181818 107.720475,24.1055406 107.920046,23.7802044 L108.027508,23.7802044 L108.027508,24.6942442 L108.90255,24.6942442 L108.90255,16.7622378 L107.996805,16.7622378 L107.996805,19.6902636 L107.920046,19.6902636 C107.720475,19.3804196 107.367388,18.6677784 106.216016,18.6677784 C104.726909,18.6677784 103.69835,19.8606778 103.69835,21.735234 C103.69835,23.6252824 104.726909,24.8181818 106.200665,24.8181818 Z M106.231636,23.979021 C105.112453,23.979021 104.537737,22.9668373 104.537737,21.6899286 C104.537737,20.428592 105.097329,19.4475524 106.231636,19.4475524 C107.32057,19.4475524 107.895286,20.3507317 107.895286,21.6899286 C107.895286,23.0446976 107.305446,23.979021 106.231636,23.979021 Z M112.419227,24.8181818 C113.445083,24.8181818 113.980979,24.2564923 114.164714,23.8664301 L114.210648,23.8664301 L114.210648,24.6777594 L115.114015,24.6777594 L115.114015,20.73033 C115.114015,18.8268264 113.690064,18.6083916 112.939811,18.6083916 C112.051756,18.6083916 111.04121,18.9204414 110.581871,20.0126155 L111.439304,20.3246653 C111.638351,19.8877956 112.109173,19.419721 112.970433,19.419721 C113.801071,19.419721 114.210648,19.8682925 114.210648,20.636715 L114.210648,20.66792 C114.210648,21.1125909 113.766621,21.0735847 112.69483,21.2140071 C111.6039,21.3583301 110.413447,21.6040693 110.413447,22.9770882 C110.413447,24.1472748 111.301502,24.8181818 112.419227,24.8181818 Z M112.643818,23.979021 C111.934114,23.979021 111.420711,23.6478622 111.420711,23.0013141 C111.420711,22.2916882 112.039815,22.0709157 112.734419,21.9762989 C113.111921,21.9289905 114.123627,21.8186042 114.274628,21.6293706 L114.274628,22.4809218 C114.274628,23.2378561 113.700824,23.979021 112.643818,23.979021 Z M118.797538,24.8181818 C119.138183,24.8181818 119.354957,24.7567713 119.478827,24.7107134 L119.293021,23.897024 C119.215602,23.9123766 119.091731,23.9430819 118.890442,23.9430819 C118.487862,23.9430819 118.100766,23.8202608 118.100766,23.0526293 L118.100766,19.61364 L119.370441,19.61364 L119.370441,18.8460085 L118.100766,18.8460085 L118.100766,17.4335664 L117.187219,17.4335664 L117.187219,18.8460085 L116.289157,18.8460085 L116.289157,19.61364 L117.187219,19.61364 L117.187219,23.2982714 C117.187219,24.3268976 118.023347,24.8181818 118.797538,24.8181818 Z M121.325479,17.7692308 C121.69321,17.7692308 121.996989,17.5048951 121.996989,17.1818182 C121.996989,16.8587413 121.69321,16.5944056 121.325479,16.5944056 C120.957748,16.5944056 120.653969,16.8587413 120.653969,17.1818182 C120.653969,17.5048951 120.957748,17.7692308 121.325479,17.7692308 Z M121.661234,24.6503497 L121.661234,18.7762238 L120.821847,18.7762238 L120.821847,24.6503497 L121.661234,24.6503497 Z M125.858169,24.8181818 C127.463618,24.8181818 128.544208,23.5824805 128.544208,21.7211076 C128.544208,19.8440929 127.463618,18.6083916 125.858169,18.6083916 C124.252721,18.6083916 123.172131,19.8440929 123.172131,21.7211076 C123.172131,23.5824805 124.252721,24.8181818 125.858169,24.8181818 Z M125.774231,23.979021 C124.563323,23.979021 124.011518,22.9201211 124.011518,21.7210727 C124.011518,20.5220244 124.563323,19.4475524 125.774231,19.4475524 C126.985138,19.4475524 127.536943,20.5220244 127.536943,21.7210727 C127.536943,22.9201211 126.985138,23.979021 125.774231,23.979021 Z M130.799508,24.6503497 L130.799508,21.0624517 C130.799508,20.021806 131.441198,19.431589 132.314823,19.431589 C133.161389,19.431589 133.675514,19.9868589 133.675514,20.9226635 L133.675514,24.6503497 L134.587795,24.6503497 L134.587795,20.8605354 C134.587795,19.3383968 133.779885,18.6083916 132.577684,18.6083916 C131.680865,18.6083916 131.124219,19.0122243 130.845896,19.6179733 L130.768584,19.6179733 L130.768584,18.6860517 L129.887227,18.6860517 L129.887227,24.6503497 L130.799508,24.6503497 Z"
              id="OpenHealthImagingFoundation"
              fill="#FFFFFF"
              fillRule="nonzero"
            ></path>
            <g
              id="Group"
              transform="translate(3, 3.0579)"
              fill="#FFFFFF"
              fillRule="nonzero"
              stroke="#FFFFFF"
              strokeWidth="0.25"
            >
              <path
                d="M20.874737,0 L14.2607623,0 C13.3583609,0 12.6268201,0.731540857 12.6268201,1.63394224 L12.6268201,8.24791696 C12.6268201,9.15031834 13.3583609,9.88185919 14.2607623,9.88185919 L20.874737,9.88185919 C21.7771384,9.88185919 22.5086793,9.15031834 22.5086793,8.24791696 L22.5086793,1.63394224 C22.5086793,0.731540857 21.7771384,0 20.874737,0 Z M14.2607623,0.653576894 L20.874737,0.653576894 C21.4161779,0.653576894 21.8551024,1.09250141 21.8551024,1.63394224 L21.8551024,8.24791696 C21.8551024,8.78935779 21.4161779,9.2282823 20.874737,9.2282823 L14.2607623,9.2282823 C13.7193215,9.2282823 13.280397,8.78935779 13.280397,8.24791696 L13.280397,1.63394224 C13.280397,1.09250141 13.7193215,0.653576894 14.2607623,0.653576894 Z"
                id="Rectangle"
              ></path>
              <path
                d="M8.24791696,0 L1.63394224,0 C0.731540857,0 0,0.731540857 0,1.63394224 L0,8.24791696 C0,9.15031834 0.731540857,9.88185919 1.63394224,9.88185919 L8.24791696,9.88185919 C9.15031834,9.88185919 9.88185919,9.15031834 9.88185919,8.24791696 L9.88185919,1.63394224 C9.88185919,0.731540857 9.15031834,0 8.24791696,0 Z M1.63394224,0.653576894 L8.24791696,0.653576894 C8.78935779,0.653576894 9.2282823,1.09250141 9.2282823,1.63394224 L9.2282823,8.24791696 C9.2282823,8.78935779 8.78935779,9.2282823 8.24791696,9.2282823 L1.63394224,9.2282823 C1.09250141,9.2282823 0.653576894,8.78935779 0.653576894,8.24791696 L0.653576894,1.63394224 C0.653576894,1.09250141 1.09250141,0.653576894 1.63394224,0.653576894 Z"
                id="Rectangle"
              ></path>
              <path
                d="M20.874737,12.6268201 L14.2607623,12.6268201 C13.3583609,12.6268201 12.6268201,13.3583609 12.6268201,14.2607623 L12.6268201,20.874737 C12.6268201,21.7771384 13.3583609,22.5086793 14.2607623,22.5086793 L20.874737,22.5086793 C21.7771384,22.5086793 22.5086793,21.7771384 22.5086793,20.874737 L22.5086793,14.2607623 C22.5086793,13.3583609 21.7771384,12.6268201 20.874737,12.6268201 Z M14.2607623,13.280397 L20.874737,13.280397 C21.4161779,13.280397 21.8551024,13.7193215 21.8551024,14.2607623 L21.8551024,20.874737 C21.8551024,21.4161779 21.4161779,21.8551024 20.874737,21.8551024 L14.2607623,21.8551024 C13.7193215,21.8551024 13.280397,21.4161779 13.280397,20.874737 L13.280397,14.2607623 C13.280397,13.7193215 13.7193215,13.280397 14.2607623,13.280397 Z"
                id="Rectangle"
              ></path>
              <path
                d="M8.24791696,12.6268201 L1.63394224,12.6268201 C0.731540857,12.6268201 0,13.3583609 0,14.2607623 L0,20.874737 C0,21.7771384 0.731540857,22.5086793 1.63394224,22.5086793 L8.24791696,22.5086793 C9.15031834,22.5086793 9.88185919,21.7771384 9.88185919,20.874737 L9.88185919,14.2607623 C9.88185919,13.3583609 9.15031834,12.6268201 8.24791696,12.6268201 Z M1.63394224,13.280397 L8.24791696,13.280397 C8.78935779,13.280397 9.2282823,13.7193215 9.2282823,14.2607623 L9.2282823,20.874737 C9.2282823,21.4161779 8.78935779,21.8551024 8.24791696,21.8551024 L1.63394224,21.8551024 C1.09250141,21.8551024 0.653576894,21.4161779 0.653576894,20.874737 L0.653576894,14.2607623 C0.653576894,13.7193215 1.09250141,13.280397 1.63394224,13.280397 Z"
                id="Rectangle"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  GearSettings: (props: IconProps) => (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Production"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-211, -235)"
        >
          <g
            id="icon-settings"
            transform="translate(211, 235)"
          >
            <rect
              id="Rectangle"
              x="0"
              y="0"
              width="28"
              height="28"
            ></rect>
            <path
              d="M20.2015688,10.2525279 C20.0232123,10.6274217 20.0120959,11.0603422 20.1709774,11.4438954 C20.3298588,11.8274487 20.6438515,12.1256974 21.0350638,12.2646554 L22.0250838,12.6168364 C22.6105106,12.8246232 23.00167,13.3785255 23.00167,13.9997339 C23.00167,14.6209423 22.6105106,15.1748446 22.0250838,15.3826314 L21.0350638,15.7348124 C20.6438515,15.8737704 20.3298588,16.1720191 20.1709774,16.5555724 C20.0120959,16.9391256 20.0232123,17.3720461 20.2015688,17.7469399 L20.6539257,18.6946982 C20.9219287,19.2558525 20.8071211,19.9250005 20.367394,20.3647276 C19.9276669,20.8044547 19.2585189,20.9192624 18.6973645,20.6512594 L17.748041,20.2004677 C17.3731472,20.0221111 16.9402267,20.0109948 16.5566735,20.1698763 C16.1731202,20.3287577 15.8748715,20.6427504 15.7359135,21.0339627 L15.3837325,22.0239827 C15.1756233,22.6088399 14.6220059,22.9994678 14.0012263,22.9994678 C13.3804467,22.9994678 12.8268293,22.6088399 12.6187202,22.0239827 L12.2665391,21.0339627 C12.127404,20.6426994 11.8290064,20.3287067 11.4453321,20.1698369 C11.0616578,20.0109671 10.6286351,20.0220972 10.253629,20.2004677 L9.30587073,20.6512594 C8.7446872,20.9203194 8.07479926,20.8059063 7.63473092,20.365838 C7.19466259,19.9257696 7.08024945,19.2558817 7.34930952,18.6946982 L7.80010123,17.7453747 C7.97845774,17.3704809 7.98957409,16.9375604 7.83069263,16.5540071 C7.67181118,16.1704539 7.35781846,15.8722052 6.96660615,15.7332471 L5.97658618,15.3810661 C5.39115942,15.1732793 5,14.619377 5,13.9981686 C5,13.3769603 5.39115942,12.8230579 5.97658618,12.6152712 L6.96660615,12.2630902 C7.35740035,12.124078 7.67105878,11.8260915 7.82990186,11.4429292 C7.98874494,11.0597669 7.97791757,10.6272622 7.80010123,10.2525279 L7.34930952,9.30320437 C7.08024945,8.74202085 7.19466259,8.0721329 7.63473092,7.63206456 C8.07479926,7.19199623 8.7446872,7.07758309 9.30587073,7.34664317 L10.2551942,7.79743487 C10.6298363,7.97533367 11.0622628,7.98639209 11.445508,7.82787471 C11.8287532,7.66935733 12.1270239,7.35606892 12.2665391,6.96550504 L12.6187202,5.97548507 C12.8268293,5.39062793 13.3804467,5 14.0012263,5 C14.6220059,5 15.1756233,5.39062793 15.3837325,5.97548507 L15.7359135,6.96550504 C15.8748715,7.35671735 16.1731202,7.67071008 16.5566735,7.82959153 C16.9402267,7.98847298 17.3731472,7.97735664 17.748041,7.79900012 L18.6973645,7.34664317 C19.2585189,7.07864018 19.9276669,7.19344783 20.367394,7.63317492 C20.8071211,8.07290202 20.9219287,8.74204999 20.6539257,9.30320437 L20.2015688,10.2525279 Z"
              id="Path"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              id="Oval"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              cx="14.000835"
              cy="13.9997339"
              r="3.52181017"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  ),

  // Aliases
  'tab-segmentation': (props: IconProps) => Icons.TabSegmentation(props),
  'tab-studies': (props: IconProps) => Icons.TabStudies(props),
  'tab-linear': (props: IconProps) => Icons.TabLinear(props),
  'tab-4d': (props: IconProps) => Icons.Tab4D(props),
  'tab-patient-info': (props: IconProps) => Icons.TabPatientInfo(props),
  'tab-roi-threshold': (props: IconProps) => Icons.TabRoiThreshold(props),
  'icon-mpr': (props: IconProps) => Icons.IconMPR(props),
  'power-off': (props: IconProps) => Icons.PowerOff(props),
  'icon-multiple-patients': (props: IconProps) => Icons.MultiplePatients(props),
  'icon-patient': (props: IconProps) => Icons.Patient(props),
  'icon-chevron-patient': (props: IconProps) => Icons.ChevronPatient(props),
  info: (props: IconProps) => Icons.Info(props),
  settings: (props: IconProps) => Icons.Settings(props),

  /** Adds an icon to the set of icons */
  addIcon: (name: string, icon) => {
    if (Icons[name]) {
      console.warn('Replacing icon', name);
    }
    Icons[name] = icon;
  },
};
