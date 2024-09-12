import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  @ViewChild('chart', { static: true }) chartElement!: ElementRef;

  ngOnInit(): void {
    this.changeChart();
  }
  monthData = [
    ['2023-1-1', 42],
    ['2023-2-1', 20],
    ['2023-3-1', 43],
    ['2023-4-1', 2],
    ['2023-5-1', 12],
    ['2023-6-1', 32],
    ['2023-7-1', 52],
    ['2023-8-1', 32],
    ['2023-9-1', 92],
    ['2023-10-1', 42],
    ['2023-11-1', 32],
    ['2023-12-1', 12],
  ];
  data: any = [];
  yearData = [
    ['2019-1-1', 102],
    ['2020-1-1', 500],
    ['2021-1-1', 103],
    ['2022-1-1', 120],
    ['2023-1-1', 202],
    ['2024-1-1', 302],
  ];

  selected: any = 'monthly';
  changeChart() {
    if (this.selected == 'monthly') {
      this.data = this.monthData;
    } else {
      this.data = this.yearData;
    }
    this.initChart();
  }
  initChart(): void {
    const chart = echarts.init(this.chartElement.nativeElement);
    const options: echarts.EChartsOption = {
      tooltip: {
        triggerOn: 'click',
        position: function (pt: any) {
          return [pt[0], 130];
        },
      },
      xAxis: {
        type: 'time',
        axisPointer: {
          snap: true,
          type: 'line',
          lineStyle: {
            color: '#7581BD',
            dashOffset: 4,
            width: 2,
          },
          label: {
            show: false,
          },
          handle: {
            show: true,
            size: 0,
          },
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: { opacity: 0.3 },
        },
        axisLabel: {
          formatter: '',
        },
      },
      grid: {
        top: 75,
        left: 15,
        right: 15,
        height: 160,
      },
      series: [
        {
          name: 'استخدام ',
          type: 'line',
          smooth: true,
          lineStyle: { color: 'rgba(138,116,249,1)' },
          symbol: 'circle',
          symbolSize: 0,
          sampling: 'average',
          itemStyle: {
            color: 'rgba(138,116,249,1)',
          },
          stack: 'a',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(138,116,249,0.8)',
              },
              {
                offset: 1,
                color: 'rgba(138,116,249,0.2)',
              },
            ]),
          },
          data: this.data,
        },
      ],
    };
    chart.setOption(options);
  }
}
