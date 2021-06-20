import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from "../assets/config/app-config.model";
import * as config from "../assets/config/config.dev.json";

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  static settings : IAppConfig
  constructor(private http : HttpClient) { }

  load()
  {
    const jsonFile = 'assets/config/config.dev.json';
    
    return new Promise<void>((resolve, reject) => {
      AppConfig.settings = <IAppConfig><unknown>config;
      resolve()
    });

  }
}
