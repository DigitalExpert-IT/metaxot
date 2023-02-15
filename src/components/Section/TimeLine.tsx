import { Text } from "@chakra-ui/react";
import { Trans } from "react-i18next";

interface TimeLineProps {
  q1: string;
  q2: string;
  q3: {
    title: string;
    concept: string;
  };
  q4: string;
  q5: string;
}

export const TimeLine: React.FC<TimeLineProps> = props => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1021 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M506 479L506 611" stroke="#FF8A00" />
      <circle
        cx="506.5"
        cy="618.5"
        r="6.5"
        fill="white"
        stroke="#FF9900"
        strokeWidth="2"
      />
      <circle cx="506.5" cy="618.5" r="3.5" fill="black" />

      <path d="M499 618.5H439.5L349 669H265.5" stroke="#FF9900" />
      <text x="60" y="650" fill="white" fontSize="16" fontFamily="Armata">
        <Trans
          i18nKey={props.q5}
          components={{
            span: <tspan x="60" dy="3em"></tspan>,
          }}
        ></Trans>
      </text>
      <path d="M514.5 471H657.5" stroke="#FF9900" />
      <path d="M506 334L506 465" stroke="#FF8A00" />
      <DefaultCircle />
      <text x="761" y="450" fill="white" fontSize="16" fontFamily="Armata">
        <Trans
          i18nKey={props.q4}
          components={{
            span: <tspan x="761" dy="3em"></tspan>,
          }}
        ></Trans>
      </text>
      <ActiveCircle />
      <g>
        <path
          d="M496 326.5H458L425.5 400.5H381.5"
          stroke="#FF9900"
          strokeWidth="0.5"
        />
        <path
          d="M496 326.5H458L425.5 400.5H381.5"
          stroke="#FF9900"
          filter="url(#filter0_f_40_169)"
        />
        <path d="M506 208L506 319" stroke="#FF8A00" strokeWidth="0.5" />
        <path
          d="M506 208L506 319"
          stroke="#FF8A00"
          filter="url(#filter2_f_40_169)"
        />
      </g>
      <rect y="348" width="332" height="56" fill="#FF9900"></rect>
      <text
        fill="#000000"
        x="110"
        y="370"
        fontSize="16"
        fontWeight="bold"
        fontFamily="Armata"
      >
        <Trans
          i18nKey={props.q3.title}
          components={{
            span: <tspan x="110" dy="1.3em"></tspan>,
          }}
        ></Trans>
      </text>

      <Text as={"text"} fill="#ffffff" x="20" y="425" fontSize={14}>
        <Trans
          i18nKey={props.q3.concept}
          components={{
            span: <tspan x="20" dy="1.3em"></tspan>,
          }}
        ></Trans>
      </Text>
      <g opacity="0.2" filter="url(#filter3_b_40_169)">
        <path
          d="M0 404H332V448C332 454.627 326.627 460 320 460H12C5.37258 460 0 454.627 0 448V404Z"
          fill="white"
        />
      </g>
      <path
        d="M513.5 202H582.5L643.5 159.5H696.5"
        stroke="#FF9900"
        strokeWidth="0.5"
      />
      <g filter="url(#filter4_f_40_169)">
        <path d="M513.5 202H582.5L643.5 159.5H696.5" stroke="#FF9900" />
      </g>
      <g filter="url(#filter5_f_40_169)">
        <path d="M506 83L506 194" stroke="#FF8A00" />
      </g>
      <path d="M506 83L506 194" stroke="#FF8A00" strokeWidth="0.5" />
      <g>
        <circle
          cx="506.5"
          cy="201.5"
          r="7.5"
          fill="#FF9900"
          filter="url(#filter6_f_40_169)"
        />
        <circle
          cx="506.5"
          cy="201.5"
          r="6.5"
          fill="white"
          stroke="#FF9900"
          strokeWidth="2"
        />
        <circle cx="506.5" cy="201.5" r="3.5" fill="black" />
      </g>
      <text x="761" y="149" fill="white" fontSize="16" fontFamily="Armata">
        <Trans
          components={{
            span: <tspan x="761" dy="3em"></tspan>,
          }}
          i18nKey={props.q2}
        ></Trans>
      </text>
      <g>
        <path d="M499 81.5H329" stroke="#FF9900" strokeWidth="0.5" />
        <path
          d="M499 81.5H329"
          stroke="#FF9900"
          filter="url(#filter7_f_40_169)"
        />
      </g>
      <g>
        <path
          d="M506 2L506 75"
          stroke="#FF8A00"
          filter="url(#filter8_f_40_169)"
        />
        <path d="M506 2L506 75" stroke="#FF8A00" strokeWidth="0.5" />
      </g>

      <g>
        <circle
          cx="506.5"
          cy="81.5"
          r="7.5"
          fill="#FF9900"
          filter="url(#filter9_f_40_169)"
        />
        <circle
          cx="506.5"
          cy="81.5"
          r="7.5"
          fill="white"
          filter="url(#filter10_d_40_169)"
        />
        <circle
          cx="506.5"
          cy="81.5"
          r="6.5"
          stroke="#FF9900"
          strokeWidth="2"
          filter="url(#filter10_d_40_169)"
        />
        <circle cx="506.5" cy="81.5" r="3.5" fill="black" />
      </g>
      <text x="60" y="75" fill="white" fontSize="16" fontFamily="Armata">
        <Trans
          components={{
            span: <tspan x="60" dy="3em"></tspan>,
          }}
          i18nKey={props.q1}
        ></Trans>
      </text>
      <defs>
        <filter
          id="filter0_f_40_169"
          x="379.5"
          y="324"
          width="118.5"
          height="79"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter1_f_40_169"
          x="492"
          y="312"
          width="29"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter2_f_40_169"
          x="503.5"
          y="206"
          width="5"
          height="115"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter3_b_40_169"
          x="-100"
          y="304"
          width="532"
          height="256"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_40_169"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_40_169"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_f_40_169"
          x="511.5"
          y="157"
          width="187"
          height="47.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter5_f_40_169"
          x="503.5"
          y="81"
          width="5"
          height="115"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter6_f_40_169"
          x="491"
          y="186"
          width="31"
          height="31"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter7_f_40_169"
          x="327"
          y="79"
          width="174"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter8_f_40_169"
          x="503.5"
          y="0"
          width="5"
          height="77"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter9_f_40_169"
          x="491"
          y="66"
          width="31"
          height="31"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_40_169"
          />
        </filter>
        <filter
          id="filter10_d_40_169"
          x="495"
          y="74"
          width="23"
          height="23"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_40_169"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_40_169"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const ActiveCircle = () => {
  return (
    <g>
      <circle
        cx="506.5"
        cy="326.5"
        r="7.5"
        fill="black"
        filter="url(#filter1_f_40_169)"
      />
      <circle
        cx="506.5"
        cy="326.5"
        r="9"
        stroke="#FF9900"
        strokeWidth="3"
        filter="url(#filter1_f_40_169)"
      />
      <circle
        cx="506.5"
        cy="326.5"
        r="9"
        fill="black"
        stroke="#FF9900"
        strokeWidth="3"
      />
      <circle cx="506.5" cy="326.5" r="3.5" fill="#FF9900" />
    </g>
  );
};

export const DefaultCircle = () => {
  return (
    <g>
      <circle
        cx="506.5"
        cy="471.5"
        r="6.5"
        fill="white"
        stroke="#FF9900"
        strokeWidth="2"
      />
      <circle cx="506.5" cy="471.5" r="3.5" fill="black" />
    </g>
  );
};
