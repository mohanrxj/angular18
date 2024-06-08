import { Component, OnInit } from '@angular/core';
import { DatserviceService } from './Services/datservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  datas: any;
  constructor(private dat: DatserviceService) { }

  ngOnInit(): void {
    let data = this.dat.getUsers().subscribe((rep) => {
      console.log(rep);
      this.datas = rep
    })
  }
}
