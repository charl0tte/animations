import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration'
// import * as dayjsBusinessDays from 'dayjs-business-days';
import * as dayjsBusinessTime from 'dayjs-business-time';
// const dayjsBusinessDays = require('dayjs-business-days').default

const theDate = dayjs('2022-06-01 09:00:00');

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(dayjsBusinessTime);

dayjs.setHolidays(['2022-04-15', '2022-04-17', '2022-05-02', '2022-05-03'])
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
  backgroundColor: string = '#34495e';
  color: string = '#7f8c8d';
  index: number = 0;
  flatColors: any[] = [
    // { "primaryColor": "#1ABC9C", "secondaryColor": "#F39C12" },
    // { "primaryColor": "#16A085", "secondaryColor": "#F1C40F" },
    // { "primaryColor": "#2ECC71", "secondaryColor": "#E67E22" },
    // { "primaryColor": "#27AE60", "secondaryColor": "#D35400" },

    { "primaryColor": "#2C3E50", "secondaryColor": "#F1C40F" },
    // { "primaryColor": "#2980B9", "secondaryColor": "#E67E22" },
    // { "primaryColor": "#34495E", "secondaryColor": "#E74C3C" },
    // { "primaryColor": "#2C3E50", "secondaryColor": "#9B59B6" },

    // { "primaryColor": "#9B59B6", "secondaryColor": "#F39C12" },
    // { "primaryColor": "#8E44AD", "secondaryColor": "#BDC3C7" },

    
    // { "primaryColor": "#F39C12", "secondaryColor": "#C0392B" },
    { "primaryColor": "#2C3E50", "secondaryColor": "#3498DB" },
    // { "primaryColor": "#E67E22", "secondaryColor": "#8E44AD" },
    // { "primaryColor": "#D35400", "secondaryColor": "#2C3E50" },

    // { "primaryColor": "#E74C3C", "secondaryColor": "#3498DB" },
    // { "primaryColor": "#C0392B", "secondaryColor": "#BDC3C7" },

    // { "primaryColor": "#ECF0F1", "secondaryColor": "#27AE60" },
    // { "primaryColor": "#BDC3C7", "secondaryColor": "#F39C12" },
    // { "primaryColor": "#95A5A6", "secondaryColor": "#2980B9" },
    // { "primaryColor": "#7F8C8D", "secondaryColor": "#F1C40F" },
  ]

  // backgroundColors: string[] = ['#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50'];

  constructor() { }

  ngOnInit(): void {

    this.interval = setInterval(() => {

      this.now = dayjs().format('YYYY-MM-DD HH:mm:ss');
      this.cyrc = dayjs(this.now).businessDaysDiff(dayjs('2022-05-09'));
      this.mayBusiness = dayjs('2022-05-01').businessDaysDiff(dayjs('2022-05-31'));

      // this.difference = dayjs(theDate).diff(this.now)
      // this.days = Math.floor(dayjs.duration(this.difference).asDays());
      
      this.days = Math.abs(dayjs(this.now).businessDaysDiff(theDate))
      this.difference = dayjs(this.now).diff(theDate)
      
      this.backgroundColor = this.flatColors[this.index].primaryColor;
      this.color = this.flatColors[this.index].secondaryColor;

      // if (this.index == this.flatColors.length - 1) {
      //   this.index = -1;
      // }

      // this.index++;

    }, 1000);



  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
