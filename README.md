# @alisher1119/echarts-for-react

This package is a fork of [echarts-for-react](https://github.com/hustcc/echarts-for-react).

## Original Packages

- [echarts-for-react](https://github.com/hustcc/echarts-for-react)
- [Apache ECharts](https://github.com/apache/echarts)

## Changes

- Renamed package to `@alisher1119/echarts-for-react`.
- Replaced `echarts` dependency with `@alisher1119/echarts`.
- Modified `initEchartsInstance` in `src/core.tsx` to implement a double-initialization pattern. It now initializes a temporary instance, waits for the `finished` event to determine the container's final dimensions, disposes of the temporary instance, and then re-initializes with the correct `width` and `height`. This ensures charts are correctly sized on their first render even when the container size is dynamic.
