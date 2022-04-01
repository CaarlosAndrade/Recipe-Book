import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls:['header.component.css']

})
export class HeaderComponent{

    @Output() selectLink = new EventEmitter<string>();

    onSelect(selectLink: string){
        this.selectLink.emit(selectLink);
    }

}