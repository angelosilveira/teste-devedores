const size = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1366px',
  xxl: '1600px',
  xxxl: '1900px',

  maxXXS: '319px',
  maxXS: '575px',
  maxSM: '767px',
  maxMD: '991px',
  maxLG: '1199px',
  maxXL: '1365px',
  maxXXL: '1599px',
  maxXXXL: '1899px',
};

export const device = {
  /** @property - `(min-width:320px)` */
  xxs: `(min-width:${size.xxs})`,
  /** @property - `(min-width:576px)` */
  xs: `(min-width:${size.xs})`,
  /** @property - `(min-width:768px)` */
  sm: `(min-width:${size.sm})`,
  /** @property - `(min-width:992px)` */
  md: `(min-width:${size.md})`,
  /** @property - `(min-width:1200px)` */
  lg: `(min-width:${size.lg})`,
  /** @property - `(min-width:1366px)` */
  xl: `(min-width:${size.xl})`,
  /** @property - `(min-width:1600px)` */
  xxl: `(min-width:${size.xxl})`,
  /** @property - `(min-width:1900px)` */
  xxxl: `(min-width:${size.xxxl})`,
  /** @property - `(max-width:319px)` */
  maxXXS: `(max-width: ${size.maxXXS})`,
  /** @property - `(max-width:575px)` */
  maxXS: `(max-width: ${size.maxXS})`,
  /** @property - `(max-width:767px)` */
  maxSM: `(max-width: ${size.maxSM})`,
  /** @property - `(max-width:991px)` */
  maxMD: `(max-width: ${size.maxMD})`,
  /** @property - `(max-width:1199px)` */
  maxLG: `(max-width: ${size.maxLG})`,
  /** @property - `(max-width:1365px)` */
  maxXL: `(max-width: ${size.maxXL})`,
  /** @property - `(max-width:1599px)` */
  maxXXL: `(max-width: ${size.maxXXL})`,
  /** @property - `(max-width:1899px)` */
  maxXXXL: `(max-width: ${size.maxXXXL})`,
};
