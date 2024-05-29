export type FormatColor = string & { __brand: "FormatColor" };

export enum ThemeColorKey {
  Bg1 = 'bg1',
  Bg2 = 'bg2',
  Bg3 = 'bg3',
  Element1 = 'element1',
  Element2 = 'element2',
  Element3 = 'element3',
  Element4 = 'element4',
  Main1 = 'main1',
  Main2 = 'main2',
  Main3 = 'main3',
  Green1 = 'green1',
  Green2 = 'green2',
  Green3 = 'green3',
  Red1 = 'red1',
  Red2 = 'red2',
  Red3 = 'red3',
  Blue1 = 'blue1',
  Footer = 'footer',
  FooterBorder = 'footerBorder',
};

export type ThemeColor = Record<ThemeColorKey, string>;
