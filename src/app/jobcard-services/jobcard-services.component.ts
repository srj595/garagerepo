import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcard-services',
  templateUrl: './jobcard-services.component.html',
  styleUrls: ['./jobcard-services.component.scss']
})
export class JobcardServicesComponent implements OnInit {
    title='service'
  constructor() { }

 array:any=[
   {
    ID:'1',
    ServiceName:'full service',
    ServiceCost:'   10000',
    
   },
   
    {
      ID:'2',
      ServiceName:'ac service',
      ServiceCost:'  2000',
      
     }
   
 ]




  ngOnInit(): void {
  }

}
