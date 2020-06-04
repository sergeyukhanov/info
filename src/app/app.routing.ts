import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {IndexComponent} from "./pages/index/index.component";


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'portfolio', component: PortfolioComponent},
];

export const routing = RouterModule.forRoot(routes);
