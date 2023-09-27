import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.development';
import { StepperModule } from 'ngvs-stepper';

@NgModule({
  declarations: [AppComponent, TaskComponent, FormComponent, MainViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    DragDropModule,
    AuthModule.forRoot(environment.auth),
    StepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
