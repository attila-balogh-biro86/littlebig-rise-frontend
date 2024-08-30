import { Proposal } from '../data-model/proposal.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  postProposal(proposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>('https://littlebig-core-backend.bluerock-2a891aee.northeurope.azurecontainerapps.io/api/v1/rise/request-for-proposals', proposal);
  }
}
