export enum SizeEnum {
    SS = 'SS',
    MS = 'MS',
    MM = 'MM',
    ML = 'ML',
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL',
}

export enum ScreenEnum {
    SS = 0,
    MS = 360,
    MM = 768,
    ML = 1024,
    XS = 1280,
    SM = 1440,
    MD = 1600,
    LG = 1760,
    XL = 1920,
}

export const breakpoints = {
    [SizeEnum.SS]: { "@media": `screen and (max-width: ${ScreenEnum.SS}px)` },
    [SizeEnum.MS]: { "@media": `screen and (max-width: ${ScreenEnum.MS}px)` },
    [SizeEnum.MM]: { "@media": `screen and (max-width: ${ScreenEnum.MM}px)` },
    [SizeEnum.ML]: { "@media": `screen and (max-width: ${ScreenEnum.ML}px)` },
    [SizeEnum.XS]: { "@media": `screen and (max-width: ${ScreenEnum.XS}px)` },
    [SizeEnum.SM]: { "@media": `screen and (max-width: ${ScreenEnum.SM}px)` },
    [SizeEnum.MD]: { "@media": `screen and (max-width: ${ScreenEnum.MD}px)` },
    [SizeEnum.LG]: { "@media": `screen and (max-width: ${ScreenEnum.LG}px)` },
    [SizeEnum.XL]: { "@media": `screen and (max-width: ${ScreenEnum.XL}px)` },
} as const;