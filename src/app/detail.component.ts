import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailService } from './detail.service';
import { CookieService } from 'ngx-cookie-service';
import { ShippingMethodComponent } from './components/shipping-method/shipping-method.component';
import { RemoveService } from './services/remove.service';
import { Router } from '@angular/router';

@Component({
    selector: "detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
    private msg:String;
    private compt: Number = 1;
    private connected: String;
    private itemComp: Object[];
    private message_content: String;
    private message_email_recontact: String;
    private message_name_recontact: number;

    constructor(private router: Router, private detail: DetailService, private rem: RemoveService, private route: ActivatedRoute, private cookie: CookieService) {
        this.connected = cookie.get("ecomm");
    }
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.detail.getDetails("Detail/" + params.id).subscribe(res => { this.itemComp = res; });
        });
    }
    remove_item(id: number) {
        console.log("remove" + id);
        let Prod = JSON.stringify({
            "_id": id
        });
        this.rem.RemoveProduct(Prod);
        this.router.navigate(['my-sells']);
    }
    send_message() {
        let newMessage = JSON.stringify({
            "email_sender":this.cookie.get("ecomm"),
            "email_recontact":this.message_email_recontact,
            "name_sender":this.message_name_recontact,
            "content":this.message_content,
            "email_receiver":this.itemComp[0].owner,
            "seen":"no"});
        console.log(newMessage);
        this.rem.sendMessage(newMessage);
        this.msg="The message has been sent";
    }
}
