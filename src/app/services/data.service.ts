import { Proposal } from '../data-model/proposal.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  postProposal(person: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>('https://putsreq.com/2BTGmqA20FpNczDAGeqR', person);
  }
}
