import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { ProjectsPageComponent } from './features/project/projects-page/projects-page.component';
import { TimelinePageComponent } from './features/timeline/timeline-page/timeline-page.component';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { AboutmePageComponent } from './features/about/aboutme-page/aboutme-page.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },

    { path: 'projects', loadComponent: () => import('./features/project/projects-page/projects-page.component')
        .then(m => m.ProjectsPageComponent)
    },
    { path: 'timeline', loadComponent: () => import('./features/timeline/timeline-page/timeline-page.component')
        .then(m => m.TimelinePageComponent)
    },
    { path: 'about-me',  loadComponent: () => import('./features/about/aboutme-page/aboutme-page.component')
        .then(m => m.AboutmePageComponent)
    },
    { path: 'contact', loadComponent: () => import('./features/contact/contact-page/contact-page.component')
        .then(m => m.ContactPageComponent)
    },
    { path: '**', redirectTo: 'home' } // Redirigir a Home para rutas no válidas
];

