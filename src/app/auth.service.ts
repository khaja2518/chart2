import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseurl = "http://localhost:3000/home";
  
  private smaurl = "http://localhost:3000/signal/sma/622318b30e419a765e3511f5";
  private pcburl = "http://localhost:3000/signal/pcb/622318b30e419a765e3511f7"

  private pcburlbyid = "http://localhost:3000/signal/pcb/"
  private smaurlbyid = "http://localhost:3000/signal/sma/";

  private herokuSmaUrlbyId ="https://signaldb.herokuapp.com/signal/sma/"
  private herokuPcbUrlbyId ="https://signaldb.herokuapp.com/signal/pcb/"

  constructor(private http: HttpClient) { }

  getHome() {
    return this.http.get(this.baseurl).toPromise().then((data) => {
      return data
    })
  }
  getSma() {
    return this.http.get(this.smaurl).toPromise().then((data) => {
      return data
    })
  }
  getPcb() {
    return this.http.get(this.pcburl).toPromise().then((data) => {
      // console.log(data)
      return data
    })
  }
  getPcbbyid(id: any) {
    // console.log(this.pcburlbyid.concat(id.toString()))
    return this.http.get(this.herokuPcbUrlbyId.concat(id.toString())).toPromise().then((data) => {
      // console.log(data)
      return data
    })
  }
  dummy: any = []
  getSmabyid(id: any) {

    if (id === null) {
      return this.dummy
    } else {
      // console.log(this.pcburlbyid.concat(id.toString()))
      return this.http.get(this.herokuSmaUrlbyId.concat(id.toString())).toPromise().then((data) => {
        // console.log(data)
        return data
      })
    }
  }
}
