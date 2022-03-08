import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private herokuSmaUrlbyId ="http://antennatest.eu-4.evennode.com/signal/sma/"
  private herokuPcbUrlbyId ="http://antennatest.eu-4.evennode.com/signal/pcb/"

  constructor(private http: HttpClient) { }

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
