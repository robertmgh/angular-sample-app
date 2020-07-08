import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
  useValue: environment.auth
})
export abstract class AuthConfig {
  abstract auth_url: string
  abstract client_id: string
  abstract response_type = 'token'
  abstract redirect_uri: string
  abstract state?: string
  /**
   * 	Optional.
      A space-separated list of scopes: see Using Scopes.
   */
  abstract scope?: string[]
  abstract show_dialog?: 'true'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = null

  constructor(private config: AuthConfig, private router: Router) {
    this.extractToken()
  }

  extractToken() {
    const rawToken = window.sessionStorage.getItem('token');
    if (rawToken) { this.token = JSON.parse(rawToken) }

    const p = new HttpParams({
      fromString: window.location.hash
    });
    const token = p.get('#access_token')
    const state = p.get('state')
    if (state) {
      this.router.navigate([state])
    }

    if (token) {
      this.token = (token)
      window.sessionStorage.setItem('token', JSON.stringify(this.token))
    }
  }

  authorization() {
    window.sessionStorage.removeItem('token');

    const {
      auth_url, state, show_dialog, scope, response_type, redirect_uri, client_id
    } = this.config

    const p = new HttpParams({
      fromObject: {
        response_type,
        redirect_uri,
        client_id,
        scope: scope?.join(' ') || '',
        state: '/music',
        show_dialog: show_dialog || ''
      }
    })

    window.location.href = (`${auth_url}?${p.toString()}`)
  }

  getToken() {
    if (this.token) {
      return this.token
    }
    this.authorization()
  }

}
