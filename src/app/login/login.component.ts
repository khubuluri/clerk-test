import { Component, OnInit, ViewChild } from '@angular/core';
import Clerk from '@clerk/clerk-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  clerkLoaded = false;
  clerk!: Clerk;

  constructor() {}

  ngOnInit(): void {
    this.loadClerk();
  }

  async loadClerk() {
    const clerkFrontendApi = 'clerk.keen.piranha-44.lcl.dev';
    this.clerk = new Clerk(clerkFrontendApi);
    await this.clerk
      .load({
        // Set load options here...
      })
      .then((res) => {
        console.log(res);
        this.clerkLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.clerk.getFapiClient());

    // clerk.mountSignIn(this.signIn);
  }

  signIn(element: HTMLDivElement) {
    this.clerk.mountSignIn(element);
  }
}
