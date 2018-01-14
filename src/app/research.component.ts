import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ResearchService} from './research.service';

@Component({
 selector: "research",
 templateUrl: "./research.component.html"
})
export class ResearchComponent implements OnInit {
      private products : Object[];
      constructor(private research : ResearchService, private route : ActivatedRoute){}
      ngOnInit(){
        this.route.params.subscribe((params:Params)=>{
            this.research.getProducts("Products/"+params.marque).subscribe(res => {this.products = res;console.log(this.products);});
        }); 
     }
 }


