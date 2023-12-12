import { createVar } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

export const headerHeight = createVar()
export const headerZIndex = createVar()

export const footerHeight = createVar()
export const footerZIndex = createVar()


export const layoutRecipe = recipe({
    base: [
        {
            position: 'relative',
            width: '100%',
            height: '100%',
          
        }
    ],
    variants: {
    },
    compoundVariants: [
    ]
})



export type LayoutRecipe = RecipeVariants<typeof layoutRecipe>;
