import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration'
// import * as dayjsBusinessDays from 'dayjs-business-days';
import * as dayjsBusinessTime from 'dayjs-business-time';
// const dayjsBusinessDays = require('dayjs-business-days').default

const theDate = dayjs('2022-05-04 07:00:00');

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(dayjsBusinessTime);

dayjs.setHolidays(['2022-04-17', '2022-04-25', '2022-05-01', '2022-05-03'])
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
  cyrc: any;
  mayBusiness: any;
  backgroundColor: string = '$flat-wet-asphalt';
  color: string = '$flat-amethyst';
  flatColors: string[] = [
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#34495E",
    "#2C3E50",
    "#9B59B6",
    "#8E44AD",
    "#F1C40F",
    "#E67E22",
    "#C0392B",
    "#95A5A6",
    "#7F8C8D",]

  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      this.now = dayjs().format('YYYY-MM-DD HH:mm:ss');
      
      this.cyrc = dayjs(this.now).businessDaysDiff(dayjs(theDate));
      this.mayBusiness = dayjs('2022-05-01').businessDaysDiff(dayjs('2022-05-31'));

      this.difference = dayjs(theDate).diff(this.now);
      this.days = Math.floor(dayjs.duration(this.difference).asDays());
      this.backgroundColor = this.flatColors[Math.floor(Math.random() * this.flatColors.length) + 1];
      this.color = this.flatColors[Math.floor(Math.random() * this.flatColors.length) + 1];
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
