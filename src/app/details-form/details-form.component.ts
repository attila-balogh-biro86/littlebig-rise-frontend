import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Proposal } from '../data-model/proposal.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification/notification.component';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  constructor( private readonly dataService: DataService, private snackBar: MatSnackBar) { }

  proposal: Proposal = new Proposal();
  workUnitTypes: string[] = [];

  ngOnInit() {
    this.workUnitTypes = Array.of('HOURS', 'DAYS', 'MONTHS', 'PACKAGE');
  }

  onDetailsFormSubmit() {
    this.dataService
  .postProposal(this.proposal)
  .subscribe(proposal => {
    console.log('postProposal has been successful:', proposal);
    const message = 'Proposal has been saved successfully';
    this.snackBar.openFromComponent(NotificationComponent, {
        data: {
          message,
          success: true
        },
        duration: 5000,
      });
    });
    // tslint:disable-next-line:no-unused-expression
    error => {
      console.log ('postProposal post failed: ', error);
      const message = 'Save proposal has failed';
      this.snackBar.openFromComponent(NotificationComponent, {
        data: {
          message,
          success: false
        },
        duration: 3000,
      });
    };
  }


}
