import React from 'react';
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Line,
  Text,
  Defs,
  TSpan,
  Image,
  Use,
  Mask,
  Polygon,
  Ellipse,
  LinearGradient,
  Stop,
  Pattern,
  // ClipPath,
} from 'react-native-svg';

export const LogoSymbol = props => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M9.3 15.803H3.756V5.317H1.101V18h8.2v-2.197Zm6.258 2.4c2.848 0 4.667-1.82 4.667-4.923 0-3.058-1.846-4.904-4.667-4.904-2.821 0-4.667 1.854-4.667 4.904 0 3.094 1.82 4.922 4.667 4.922Zm0-1.96c-1.266 0-2.065-1.064-2.065-2.954 0-1.872.817-2.953 2.065-2.953s2.057 1.081 2.057 2.953c0 1.89-.8 2.953-2.057 2.953Zm15.415-7.665h-2.566v5.397c0 1.248-.712 2.065-1.855 2.065-1.133 0-1.757-.668-1.757-1.925V8.578h-2.567v6.073c0 2.198 1.354 3.525 3.393 3.525 1.424 0 2.355-.686 2.821-1.872h.053V18h2.478V8.578Z"
      fill="#EEFC79"
    />
    <Path
      d="M38.303 18c2.68 0 4.289-1.318 4.289-3.48 0-1.758-1.222-2.945-2.98-3.156v-.061c1.354-.246 2.32-1.45 2.32-2.857 0-1.872-1.476-3.129-3.656-3.129h-4.561V18h4.588ZM34.91 6.38h3.112c1.687 0 2.698.818 2.698 2.198 0 1.494-1.125 2.373-3.05 2.373h-2.76v-4.57Zm0 10.556v-4.948h3.068c2.188 0 3.383.888 3.383 2.47 0 1.573-1.151 2.478-3.225 2.478H34.91Zm12.884.212c-1.239 0-2.092-.686-2.092-1.68 0-1.01.8-1.634 2.242-1.73l2.707-.185v1.01c0 1.45-1.257 2.585-2.857 2.585Zm-.237 1.001c1.362 0 2.61-.755 3.12-1.89h.026V18h1.108v-6.258c0-1.863-1.31-3.032-3.393-3.032-2.083 0-3.428 1.16-3.56 2.795h1.126c.202-1.107 1.063-1.767 2.408-1.767 1.424 0 2.259.791 2.259 2.11v.79l-2.848.177c-2.11.14-3.278 1.09-3.278 2.654 0 1.6 1.23 2.68 3.032 2.68ZM54.482 18h1.16v-5.414c0-1.696 1.064-2.839 2.646-2.839 1.529 0 2.408.914 2.408 2.514V18h1.16v-5.924c0-2.074-1.23-3.366-3.234-3.366-1.477 0-2.55.73-3.015 1.837h-.026V8.859h-1.099V18Zm11.302-4.816V5.317h-1.169V18h1.169v-3.542l1.02-.94L70.46 18h1.362l-4.184-5.194 4.105-3.947h-1.441l-4.518 4.325Z"
      fill="#FFF"
    />
    <Path d="M44.5 3C48.667 1.5 59.4-.6 69 3" stroke="#EEFC79" />
  </Svg>
);
export const VisaSymbol = props => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m15.613 5.94-1.728 10.14h2.763l1.73-10.14h-2.765ZM11.57 5.952l-2.707 6.916-.289-1.045C8.041 10.566 6.525 8.76 4.746 7.62l2.475 8.456 2.924-.005 4.352-10.12-2.927.001Z"
      fill="#272A32"
    />
    <Path
      d="M7.524 6.677c-.16-.617-.626-.801-1.204-.823H2.036L2 6.055c3.334.81 5.54 2.758 6.456 5.102l-.932-4.48ZM23.98 7.885a5.102 5.102 0 0 1 2.068.388l.25.117.374-2.198a7.133 7.133 0 0 0-2.476-.425c-2.73 0-4.656 1.375-4.67 3.346-.018 1.456 1.37 2.27 2.42 2.755 1.076.498 1.438.814 1.433 1.258-.009.679-.859.99-1.653.99-1.107 0-1.694-.153-2.602-.53l-.356-.163-.39 2.27c.648.283 1.841.527 3.08.54 2.905 0 4.793-1.359 4.813-3.465.012-1.152-.725-2.032-2.322-2.753-.967-.47-1.558-.783-1.553-1.258 0-.422.502-.872 1.584-.872ZM33.765 5.952h-2.136c-.663 0-1.156.18-1.448.842l-4.103 9.293h2.902s.474-1.25.581-1.524l3.539.005c.082.354.337 1.519.337 1.519h2.564L33.765 5.952Zm-3.409 6.536c.228-.582 1.101-2.834 1.101-2.834-.015.028.226-.586.369-.968l.186.874.64 2.928h-2.296Z"
      fill="#272A32"
    />
  </Svg>
);
export const SearchSymbol = props => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect opacity={0.07} width={32} height={32} rx={16} fill="#fff" />
    <Path
      d="M14.83 19.502a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334ZM21.83 21.831l-3.733-3.733"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DownSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 9.724 4.39-4.39a.667.667 0 1 1 .944.942L8 11.61 2.667 6.276a.667.667 0 0 1 .943-.943L8 9.723Z"
      fill="#79767D"
    />
  </Svg>
);
export const PlusSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle opacity={0.07} cx={10} cy={10} r={10} fill="#fff" />
    <Rect x={9.333} y={6} width={1.333} height={8} rx={0.667} fill="#E5E5E5" />
    <Rect
      x={14}
      y={9.332}
      width={1.333}
      height={8}
      rx={0.667}
      transform="rotate(90 14 9.332)"
      fill="#E5E5E5"
    />
  </Svg>
);
export const AccountSymbol = props => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect width={32} height={32} rx={12} fill="#B2D0CE" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35 9.5h15.302c.837 0 1.515.746 1.515 1.667v10c0 .92-.678 1.666-1.515 1.666H8.35c-.837 0-1.515-.746-1.515-1.666v-10c0-.92.678-1.667 1.515-1.667Zm.15 1.667v10h15v-10h-15Zm1.667 6.666V19.5h1.667v-1.667h-1.667Zm2.5 1.667v-1.667h2.5V19.5h-2.5Zm7.5-1.667V19.5h1.667v-1.667h-1.667Zm-2.5 1.667v-1.667h1.667V19.5h-1.667Zm-5-5.833h-2.5v2.5h2.5v-2.5Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.001}
        y1={9.5}
        x2={16.001}
        y2={22.833}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#252525" />
        <Stop offset={1} stopColor="#2C2C2C" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export const SparkSymbol = props => (
  <Svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={32} height={32} rx={12} fill="#242727" />
    <Path d="M9 22.05h15v-15H9v15Z" fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.01563)" />
      </Pattern>
      <Image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
////////////////////////////////////////////////////////////////

export const StarSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.129 18.886 3.815-1.988 3.815 1.988a1 1 0 0 0 1.448-1.058l-.727-4.195 3.068-2.962a1 1 0 0 0-.552-1.71l-4.248-.611-1.909-3.831a1 1 0 0 0-1.79 0L9.14 8.349l-4.248.613a1 1 0 0 0-.552 1.709l3.068 2.962-.727 4.195a1 1 0 0 0 1.448 1.058Zm7.357-1.887-3.54-1.844L8.404 17l.676-3.905-2.864-2.766 3.958-.57 1.77-3.553 1.77 3.553 3.959.57-2.865 2.766.677 3.905Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.944}
        y1={3.965}
        x2={11.944}
        y2={19.001}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#252525" />
        <Stop offset={1} stopColor="#2C2C2C" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export const BudgetSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.054 8.333h3.333v-1.11C16.387 6 15.387 5 14.165 5H7.498C6.276 5 5.276 6 5.276 7.222v5.556C5.276 14 6.276 15 7.498 15h6.667c1.222 0 2.222-1 2.222-2.222v-1.111h-3.333c-.611 0-1.111-.5-1.111-1.111V9.444c0-.61.5-1.11 1.11-1.11Z"
      stroke="#212121"
      strokeWidth={1.667}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.612 10.554a.556.556 0 1 0 0-1.111.556.556 0 0 0 0 1.11Z"
      fill="#212121"
    />
    <Path
      d="M16.39 8.333v3.334"
      stroke="#212121"
      strokeWidth={1.667}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const FinanceSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.125 16.32H6.042a2.368 2.368 0 0 1-2.361-2.362V6.875a2.368 2.368 0 0 1 2.36-2.361h7.084a2.368 2.368 0 0 1 2.361 2.361v7.083c0 1.299-1.003 2.361-2.361 2.361ZM6.632 13.368v-2.361M9.584 13.368V7.465M12.535 13.368V9.236"
      stroke="#212121"
      strokeWidth={1.667}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
////////////////////////////////////////////////////////////////
export const HomeTabSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.004 2.25 2.337 7.583c-.417.334-.667.834-.667 1.334v7.5c0 .916.75 1.666 1.667 1.666H6.67v-5c0-.916.75-1.666 1.667-1.666h3.333c.917 0 1.667.75 1.667 1.666v5h3.333c.917 0 1.667-.75 1.667-1.666v-7.5c0-.5-.25-1-.667-1.334L11.004 2.25c-.5-.5-1.417-.5-2 0Z"
      stroke="#F2FE8D"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);
export const CartTabSymbol = props => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M16.164 20.331H7.748c-2.084 0-3.667-1.916-3.25-4l1.083-5c.333-1.5 1.667-2.666 3.25-2.666h6.25c1.583 0 2.917 1.083 3.25 2.666l1.083 5c.5 2-1.083 4-3.25 4Z"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.666 10.331V6.998c0-1.833 1.5-3.333 3.333-3.333 1.834 0 3.334 1.5 3.334 3.333v3.333"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const WalletTabSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.993 18.667h-10a3.343 3.343 0 0 1-3.334-3.333V8.667c0-1.833 1.5-3.333 3.334-3.333h10c1.833 0 3.333 1.5 3.333 3.333v6.667c0 1.833-1.417 3.333-3.333 3.333ZM3.658 8.667h16.667M13.658 15.334h3.334"
      stroke="#fff"
      fill="none"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ChatTabSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.993 20.333H5.326c-.917 0-1.667-.75-1.667-1.667V12c0-4.583 3.75-8.333 8.334-8.333 4.583 0 8.333 3.75 8.333 8.333 0 4.667-3.667 8.334-8.333 8.334Z"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M7.821 12.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM16.162 12.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM11.992 12.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
      fill="#fff"
    />
  </Svg>
);
export const NotificationTabSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.993 20.333h-10A3.343 3.343 0 0 1 3.659 17V7c0-1.834 1.5-3.334 3.334-3.334h10c1.833 0 3.333 1.5 3.333 3.334v10c0 1.833-1.5 3.333-3.333 3.333Z"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      fill="none"
      strokeLinejoin="round"
    />
    <Path
      d="M11.988 9.5V12l3.833 3.916"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
