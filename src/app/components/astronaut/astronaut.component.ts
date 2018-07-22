import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageDemoService } from '../../services/message-demo.service';
import { MissionDemoService } from '../../services/mission-demo.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})

export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false; 
  subscription: Subscription; 

  messageContent: string = '';

  constructor(private messageDemoService: MessageDemoService,
    private missionDemoService: MissionDemoService) {
    this.subscription = missionDemoService.missionAnnounced$.subscribe(mission => {
      this.mission = mission;
      this.announced = true;
      this.confirmed = false; 
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionDemoService.confirmMIssion(this.astronaut);
  }

  writeMessage() {
    let mb = document.getElementById('messageBox');
    mb.addEventListener('input', () => {
      this.messageContent = mb.innerHTML;
      console.log('mb.innerHTML ', mb.innerHTML);
    });
  }

  sendMessage() {
    this.messageDemoService.sendMessage(this.messageContent);
  }

  clearMessage(): void {
    this.messageDemoService.clearMessage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
