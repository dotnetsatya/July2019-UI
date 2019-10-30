import { Component, OnInit } from '@angular/core';
import { BroadCastService } from '../services/broadcast.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private broadCast: BroadCastService) { }

  ngOnInit() {
    this.broadCast.isLoading.subscribe((value: boolean) => {
      this.isLoading = value;
      console.log(this.isLoading);
    });

  }

}
