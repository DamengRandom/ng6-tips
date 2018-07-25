import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MissionDemoService } from '../../services/mission-demo.service';
import { MessageDemoService } from '../../services/message-demo.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.scss'],
  providers: [MessageDemoService, MissionDemoService]
})

export class MissionControlComponent implements OnInit, OnDestroy {
  astronauts = ['Dan', 'Dimitris', 'Dave'];
  history: string[] = [];
  missions = ['Fly to moon!',
    'Fly to mars!',
    'Fly to vegas!'];
  nextMission = 0;

  message: any;
  subscription: Subscription;

  constructor(private messageDemoService: MessageDemoService,
    private missionDemoService: MissionDemoService) {
    missionDemoService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });

    this.subscription = this.messageDemoService.getMessage().subscribe(message => {
      console.log('messagesssssss: ', message);
      this.message = message.text;
    });
  }

  ngOnInit() {
    console.log('message: ', this.message);
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionDemoService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
