import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs'
import { Dayjs } from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration'

const theDate = dayjs('2022-06-01 00:00:00');
dayjs.extend(relativeTime);
dayjs.extend(duration);
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  difference: any;
  interval: any;
  now: any;
  days: any;
  backgroundColor: string = '$flat-wet-asphalt';
  color: string = '$flat-amethyst';
  flatColors: string[] = ["#1ABC9C",
    "#16A085",
    "#2ECC71",
    "#27AE60",
    "#3498DB",
    "#2980B9",
    "#34495E",
    "#2C3E50",
    "#9B59B6",
    "#8E44AD",
    "#F1C40F",
    "#F39C12",
    "#E67E22",
    "#D35400",
    "#E74C3C",
    "#C0392B",
    "#ECF0F1",
    "#BDC3C7",
    "#95A5A6",
    "#7F8C8D",]

  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {

      this.now = dayjs().format('YYYY-MM-DD HH:mm:ss')
      this.difference = theDate.diff(this.now);
      this.days = Math.floor(dayjs.duration(this.difference).asDays());
      this.backgroundColor = this.flatColors[Math.floor(Math.random() * this.flatColors.length) + 1];
      this.color = this.flatColors[Math.floor(Math.random() * this.flatColors.length) + 1];
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
