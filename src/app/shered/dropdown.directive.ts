import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    // traz uma referencia da classe do elemento onde a diretiva está
    // utilza TRUE ou FALSE para anexar ou não a classe especificada.
    @HostBinding('class.open') isOpnen = false;

    // captura o elemento onde a diretiva está quando ocorrer o evento de click
    @HostListener('click') onClickDropdown(){
        // funciona como um toggle, alterando a cada click
        this.isOpnen = !this.isOpnen;

    }

    constructor(private elementRef: ElementRef){}

}

// Se você quiser que um menu suspenso também possa ser fechado com um clique em qualquer lugar 
// do lado de fora (o que também significa que um clique em um menu suspenso fecha qualquer outro,
// a propósito), substitua o código de dropdown.directive.ts por este (colocando o ouvinte não no 
// menu suspenso, mas no documento):

// @Directive({
//     selector: '[appDropdown]'
//   })
//   export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//       this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//     }
//     constructor(private elRef: ElementRef) {}
//   }