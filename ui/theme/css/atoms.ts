export const responsiveProperties = {
    display: ["flex", "none", "block", "grid", "inline-block"],
    flexDirection: {
        row: "row",
        column: "column",
        rowReverse: "row-reverse",
        columnReverse: "column-reverse",
    },
    alignItems: {
        flexStart: "flex-start",
        center: "center",
        flexEnd: "flex-end",
        stretch: "stretch",
        baseline: "baseline",
    },
    justifyContent: {
        flexStart: "flex-start",
        center: "center",
        flexEnd: "flex-end",
    },
    flexWrap: {
        nowrap: "nowrap",
        wrap: "wrap",
        wrapReverse: "wrap-reverse",
    },
    flexShrink: [0],
    flexGrow: [0, 1, 2],
    flex: [0, 1, 2],
} as const