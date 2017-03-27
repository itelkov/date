import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

export class Utils {

    static getNowDateStruct(): NgbDateStruct{
        let now = new Date();
        return {year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate()};
    }

    static getNowTimeStruct(): NgbTimeStruct{
        let now = new Date();
        return {hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds()};
    }

    static getZeroTimeStruct(): NgbTimeStruct{
        return {hour: 0, minute: 0, second: 0};
    }

    static getMaxTimeStruct(): NgbTimeStruct{
        return {hour: 23, minute: 59, second: 59};
    }

    static getDateStruct(dateTime: string): NgbDateStruct{
        let dateTimeArr: Array<string> = dateTime.split(' ');
        let dateArr : Array<string> = dateTimeArr[0].split('-');
        return dateArr.length == 3 ? {year: parseInt(dateArr[0]), month: parseInt(dateArr[1]), day: parseInt(dateArr[2])}
            : {year: null, month: null, day: null};
    }

    static getTimeStruct(dateTime: string): NgbTimeStruct{
        let dateTimeArr: Array<string> = dateTime.split(' ');
        if (dateTimeArr.length == 2){
            let timeArr : Array<string> = dateTimeArr[1].split(':');
            if (timeArr.length == 3)
                return {hour: parseInt(timeArr[0]), minute: parseInt(timeArr[1]), second: parseInt(timeArr[2])};
        }

        return {hour: null, minute: null, second: null};
    }

    static getDate(date: NgbDateStruct): string{
        return date.year + '-' + this.pad(date.month, 2) + '-' + this.pad(date.day, 2);
    }

    static getTime(time: NgbTimeStruct): string{
        return this.pad(time.hour, 2) + ':' + this.pad(time.minute, 2) + ':' + this.pad(time.second, 2);
    }

    static getDateTime(date: NgbDateStruct, time: NgbTimeStruct): string{
        return date.year + '-' + this.pad(date.month, 2) + '-' + this.pad(date.day, 2) + ' ' + this.pad(time.hour, 2) + ':' + this.pad(time.minute, 2) + ':' + this.pad(time.second, 2);
    }

    static getDisplayDate(date: NgbDateStruct, fullYear: boolean = false): string{
        return this.pad(date.day, 2) + '.' + this.pad(date.month, 2) + '.' + (fullYear ? date.year : (date.year + "").substr(2));
    }

    static getDisplayTime(time: NgbTimeStruct, seconds: boolean = false): string{
        return this.pad(time.hour, 2) + ':' + this.pad(time.minute, 2) + (seconds ? ':' + this.pad(time.second, 2) : '');
    }

    static getDisplayDateTimeFromStruct(date: NgbDateStruct, time: NgbTimeStruct, fullYear: boolean = false, seconds: boolean = false): string{
        return this.getDisplayDate(date, fullYear) + ' ' + this.getDisplayTime(time, seconds);
    }

    static getDisplayDateTime(dateTime: string, fullYear: boolean = false, seconds: boolean = false): string{
        return dateTime ? this.getDisplayDateTimeFromStruct(this.getDateStruct(dateTime), this.getTimeStruct(dateTime), fullYear, seconds) : '';
    }

    static pad(num:number, size:number): string {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
}
