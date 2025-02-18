import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  private ObservaleSubscription!:Subscription;
  customObservableInterval!:Observable<number>;
  private customSubscription!:Subscription;
  ngOnInit(): void {
    // this.ObservaleSubscription = interval(1000).subscribe(
      // count => console.log(count)
    // )
    this.customObservableInterval = new Observable(observer =>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count === 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('limit excedded'));
        }
        count++;
      },1000)
    })
    this.customSubscription = this.customObservableInterval.pipe(filter((data)=>{
      return data > 0;
    }),map((data:number)=>{
      return "Round: "+(data +1); 
    })).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("completed")
      }
    )
  }
  ngOnDestroy(): void {
    this.customSubscription.unsubscribe();
      // this.ObservaleSubscription.unsubscribe();
  }
}
