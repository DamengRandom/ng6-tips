import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionDemoService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  constructor() {}

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
    console.log('missionAnnounced$', this.missionAnnounced$);
  }

  confirmMIssion(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
    console.log('missionConfirmed$', this.missionConfirmed$);
  }
}
