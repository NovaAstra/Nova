import * as styled from './Layout.css';

import { defineComponent, computed } from 'vue';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export const props = {
    headerHeight: {
        type: Number,
        default: 56
    },
    footerHeight: {
        type: Number,
        default: 48
    }
}

export const Layout = defineComponent({
    name: 'Layout',
    props,
    setup(props) {
        const { headerHeight, footerHeight } = props

        const style = computed(() => (assignInlineVars({
            [styled.headerHeight]: `${headerHeight}px`,
            [styled.footerHeight]: `${footerHeight}px`,
        })))

        return () => (
            <section class={styled.layoutRecipe()} style={style.value}>
                <header></header>

                <main></main>

                <footer></footer>
            </section>
        )
    }
})