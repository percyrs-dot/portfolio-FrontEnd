import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comp/header/header.component';
import { BannercardComponent } from './comp/bannercard/bannercard.component';
import { AboutComponent } from './comp/about/about.component';
import { ExperienceComponent } from './comp/experience/experience.component';
import { EducationComponent } from './comp/education/education.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { AchievementsComponent } from './comp/achievements/achievements.component';
import { FooterComponent } from './comp/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comp/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannercardComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
