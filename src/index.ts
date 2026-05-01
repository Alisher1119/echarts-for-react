import * as echarts from '@alisher1119/echarts';
import { EChartsReactProps, EChartsOption, EChartsInstance } from './types';
import EChartsReactCore from './core';

export type { EChartsReactProps, EChartsOption, EChartsInstance };

// export the Component the echarts Object.
export default class EChartsReact extends EChartsReactCore {
  constructor(props: EChartsReactProps) {
    super(props);

    // 初始化为 echarts 整个包
    this.echarts = echarts;
  }
}
