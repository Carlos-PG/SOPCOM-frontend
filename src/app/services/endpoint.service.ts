import { Injectable } from '@angular/core';
import { Values } from 'src/utils/values';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = Values.SERVER_URL + Values.SERVER_PORT + Values.ENTRY_FILE;

  public getAllMethodChunk() {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getMethodChunkById(id) {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK + '/' + id;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public addNewMethodChunk(data) {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }

  public updateMethodChunk(id, data) {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK + '/' + id;
    return this.http.put<any[]>(request, data).pipe(map(response => response));
  }
  
  public deleteMethodChunk(id) {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK + '/' + id;
    return this.http.delete<any[]>(request).pipe(map(response => response));
  }

  public getAllMethodElementsByType(type) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '?type=' + type;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getMethodElement(id) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public updateMethodElement(id, data) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.put<any[]>(request, data).pipe(res => res);
  }

  public addMethodElement(data) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }

  public deleteMethodElement(id) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.delete<any[]>(request).pipe(map(response => response));
  }

  public getAllMethodElementRelationTypes() {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + Values.RESOURCES.RELATIONS + '/' + Values.RESOURCES.TYPES;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getAllCriterions() {
    const request = this.URL + Values.RESOURCES.CRITERION;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getCriterionById(id) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + id;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public addCriterion(data) {
    const request = this.URL + Values.RESOURCES.CRITERION;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }

  public updateCriterion(id, data) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + id;
    return this.http.put<any[]>(request, data).pipe(map(response => response));
  }

  public deleteCriterion(id) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + id;
    return this.http.delete<any[]>(request).pipe(map(response => response));
  }

  public getAllGoals() {
    const request = this.URL + Values.RESOURCES.GOAL;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public addNewGoal(data) {
    const request = this.URL + Values.RESOURCES.GOAL;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }

  public addMethodElementFigure(id, figure) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id + '/image';
    return this.http.post<any[]>(request, figure).pipe(map(response => response));
  }
  
  public addValueCriterion(idC, data) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + idC + '/' + Values.RESOURCES.VALUES;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }
  
  public updateValueCriterion(idC, idV, data) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + idC + '/' + Values.RESOURCES.VALUES + '/' + idV;
    return this.http.put<any[]>(request, data).pipe(map(response => response));
  }
  
  public deleteValueCriterion(idC, idV) {
    const request = this.URL + Values.RESOURCES.CRITERION + '/' + idC + '/' + Values.RESOURCES.VALUES + '/' + idV;
    return this.http.delete<any[]>(request).pipe(map(response => response));
  }
}
