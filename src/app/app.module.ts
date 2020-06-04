import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {routing} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StartBannerComponent } from './components/start-banner/start-banner.component';
import { AboutContainerComponent } from './components/about-container/about-container.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { BlockqouteTitleComponent } from './components/blockqoute-title/blockqoute-title.component';
import { SkillsContainerComponent } from './components/skills-container/skills-container.component';
import { MainLinkComponent } from './components/main-link/main-link.component';
import { PositionContainerComponent } from './components/position-container/position-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PortfolioComponent,
    BlogComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    StartBannerComponent,
    AboutContainerComponent,
    TitleComponentComponent,
    BlockqouteTitleComponent,
    SkillsContainerComponent,
    MainLinkComponent,
    PositionContainerComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
