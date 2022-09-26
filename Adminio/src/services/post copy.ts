import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Post{
    // server: string = 'http://localhost/apiionic/';
    //server: string = 'http://172.19.10.64/apiionic/';
    server: string = 'http://grupoadminio.tk/apiionic/';
    //server: string = 'http://localhost/api/';

    constructor(private http : HttpClient){}

    dadosApi(dados: any, api: string){

            const headerDict = {'Content-Type' : 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
            };

            const httpOptions = {
                headers: new HttpHeaders(headerDict)
                }

            let url = this.server + api;
            return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
        }
}
