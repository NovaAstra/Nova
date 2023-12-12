import { defineProperties, createSprinkles, createMapValueFn } from '@vanilla-extract/sprinkles';
import { responsivePropertiesConditions, responsivePropertiesDefaultCondition } from './conditions.js'
import { responsiveProperties } from './atoms.js'

const responsiveStyles = defineProperties({
    conditions: responsivePropertiesConditions,
    defaultCondition: responsivePropertiesDefaultCondition,
    properties: responsiveProperties,
    shorthands: {}
})

export const atoms = createSprinkles(
    responsiveStyles
)

export type Atoms = Parameters<typeof atoms>[0];

export const mapResponsiveValue = createMapValueFn(responsiveStyles);
