import { ISSServiceService } from './../iss-service.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.scss']
})
export class ISSComponent implements OnInit {

  constructor(private ISSServiceService:ISSServiceService,
    private rederer: Renderer2) { }

  Visibility:string="";

  bodyTag:HTMLBodyElement = document.getElementsByTagName('body')[0];

  ngOnInit(): void {
      this.ISSServiceService.getData().subscribe(
      (visibility)=>(
        this.Visibility=visibility.visibility
      )
    );

    this.rederer.addClass(document.body,'body-class');
    delay(10000);
  }

  GetData()
  {
    debugger;
    switch(this.Visibility)
    {

      case 'daylight':
        {
          this.bodyTag.style.backgroundColor='yellow';
          break;
        }
      case 'eclipsed':
        {
          this.bodyTag.style.backgroundColor='red';
          break;
        }
       case 'nighttime':
       {
         this.bodyTag.style.backgroundColor='blue';
         break;
       }
    }

  }

}
