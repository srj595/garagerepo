import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { SparelistComponent } from './sparelist/sparelist.component';
import { AddSpareComponent } from './add-spare/add-spare.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { JobcardServicesComponent } from './jobcard-services/jobcard-services.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    JobcardComponent,
    LoginComponent,
    SignupComponent,
    SparelistComponent,
    AddSpareComponent,
    ServicesListComponent,
    AddServicesComponent,
    JobcardServicesComponent,

  ],
  providers: [
    MatDatepickerModule,

    MatNativeDateModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
