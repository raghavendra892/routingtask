import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavdropdown]'
})
export class NavdropdownDirective {

  @Input() NavBarClass! : string;

  istrue : boolean = false

  constructor(private eleRef : ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('click') onclick(){
    this.istrue = ! this.istrue
    let parentEle = this.eleRef.nativeElement as HTMLInputElement;
    console.log(parentEle.classList)
    if(this.istrue){
      // parentEle.lastElementChild?.classList.remove(this.NavBarClass);
     parentEle.nextElementSibling?.classList.remove(this.NavBarClass)
    }else{
      //parentEle.lastElementChild?.classList.add(this.NavBarClass)
      parentEle.nextElementSibling?.classList.add(this.NavBarClass)
    }
  }
}
