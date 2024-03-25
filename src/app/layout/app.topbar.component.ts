import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { GoogleApiService, UserInfo } from '../pages/login/services/google-api.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    userInfo?: UserInfo;

    constructor(
        public layoutService: LayoutService,
        private readonly googleApi: GoogleApiService
        ) { 
            googleApi.userProfileSubject.subscribe(info => {
                this.userInfo = info;
              })
        }

    logout(){
        debugger;

        this.googleApi.signOut();
    }
}
