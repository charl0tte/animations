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

  // .format('M DD HH:mm:ss')

  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {

      this.now = dayjs().format('YYYY-MM-DD HH:mm:ss')
      this.difference = theDate.diff(this.now);
      this.days = Math.floor(dayjs.duration(this.difference).asDays());

    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
