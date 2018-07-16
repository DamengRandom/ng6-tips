import { Component,
  Directive,
  Input,
  OnInit,
  HostBinding,
  HostListener,
  Injectable,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  TemplateRef } from '@angular/core';

@Injectable()

export class TrackingService {
  logs = [];
  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}

export class OnlineOfflineService {
  appOnline = true;
  constructor() {
    // setInterval(() => {
      this.appOnline = Math.random() > .5;
      console.log('this online: ', this.appOnline);
    // }, 1000);
  }
}

@Directive({
  selector: '[appOnline]'
})

export class OnOffLineDirective {
  @HostBinding('disabled') get disabled() {
    return this.onlineOfflineService.appOnline;
  }
  constructor(private onlineOfflineService: OnlineOfflineService) {}
}

@Directive({
  selector: '[appFirst]'
})
export class CustomDirective {
  @Input() appFirst;
  // @HostBinding() innerText = 'First Directive Function';
  @HostBinding() get innerText() {
    return this.appFirst;
  }

  @HostListener('click', ['$event']) onClick($event) {
    console.log('$event: ', $event);
    this.appFirst = 'clicked';
  }
}

@Directive({
  selector: '[appTrack]'
})

export class TrackDirective {
  @Input() appTrack;
  @HostListener('click') onclick() {
    this.trackingService.log({event: 'click', logInfo: `${this.appTrack} was clicked ..`});
  }
  constructor(private trackingService: TrackingService) {}
}

// strcutural directive
@Directive({
  selector: '[appThree]'
})

export class ThreeDirective implements OnInit {
  // @Input() set appThree(value) {
  //   this.view.createEmbeddedView(this.template, {
  //     $implicit: 'structural directive demo'
  //   });
  // }
  @Input() set appThreeFrom({m1, m2, m3}) { // dynamic call messages
    this.view.createEmbeddedView(this.template, {
      $implicit: m1
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: m2
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: m3
    });
  }
  constructor(private el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>) {
    console.log('native element: ', el.nativeElement);
  }
  ngOnInit() {
    // this.view.createEmbeddedView(this.template);
  }
}

@Component({
  selector: 'app-basic',
  template: `
    <div>{{ message }}</div>
    <ng-template #templateRef let-newData="newData"><p>{{ newData }}</p></ng-template>
    <br>
    <div>
      <p>Another way to render template: ngTemnplateOutlet: </p>
      <div [ngTemplateOutlet]="templateRef"></div>
      <div [ngTemplateOutlet]="templateRef"
        [ngTemplateOutletContext]="{newData: 'wujiwujiwuji'}"></div>
    </div>
    <!-- <h3 *appThree></h3>
    <h4 *appThree="let infoMessage">{{ infoMessage }}</h4> -->
    <h4 *appThree="let infoMessage from infoMessages">{{ infoMessage }}</h4>
  `
})

export class BasicCustomComponent implements OnInit {
  @Input() message;
  @ViewChild('templateRef') template; // call template by its template ref id !!!

  infoMessages = {
    m1: 'jishdhas',
    m2: 'hdqkwbd',
    m3: '832hijdf'
  };

  public newTemplateData = {
    newData: 'new data being called ..'
  };
  constructor(private viewRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewRef.createEmbeddedView(this.template);
  }
}

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {
  public message = `parent pass @Input to child and display data in child component`;
  // public initialFirstVal = `first value will overwrite current string ..`;
  public readInitialFirstVal = `read initial first value`;

  constructor() { }

  ngOnInit() {
  }

}
