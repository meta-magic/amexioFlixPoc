import {Directive,ElementRef,AfterViewInit,OnDestroy,TemplateRef,EmbeddedViewRef,
  ViewContainerRef,Renderer2,EventEmitter,Output,ContentChild} from '@angular/core';

@Directive({
  selector: '[pagedefer]',
  host: {
  }
})
export class DeferredLoader implements AfterViewInit,OnDestroy {

  @Output() onLoad: EventEmitter<any> = new EventEmitter();

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  documentScrollListener: Function;

  view: EmbeddedViewRef<any>;

  constructor(public el: ElementRef, public renderer: Renderer2, public viewContainer: ViewContainerRef) {}

  ngAfterViewInit() {
    if(this.shouldLoad()) {
      this.load();
    }

    this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
      if(this.shouldLoad()) {
        this.load();
        this.documentScrollListener();
        this.documentScrollListener = null;
      }
    });
  }

  shouldLoad(): boolean {
    let rect = this.el.nativeElement.getBoundingClientRect();
    let docElement = document.documentElement;
    let scrollTop = (window.pageYOffset||document.documentElement.scrollTop);
    let winHeight = docElement.clientHeight;

    return (winHeight >= rect.top);
  }

  load(): void {
    this.view = this.viewContainer.createEmbeddedView(this.template);
    this.onLoad.emit();
  }

  ngOnDestroy() {
    this.view = null;

    if(this.documentScrollListener) {
      this.documentScrollListener();
    }
  }
}
