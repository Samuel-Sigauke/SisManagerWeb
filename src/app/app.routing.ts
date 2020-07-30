import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { 
        path:'', component: LoginComponent,
    },
    {
        path: 'login', component: LoginComponent,
        // children: [
        //     { 
        //         path: 'login', component: LoginComponent 
        //     },
        //     { 
        //         path:'student',
        //         loadChildren: 'src/app/student/student.module#StudentModule',
        //     },
        //     { 
        //         path:'subject',
        //         loadChildren: 'src/app/subject/subject.module#SubjecttModule',
        //     },
        //     { 
        //         path:'teacher',
        //         loadChildren: 'src/app/teacher/teacher.module#TeacherModule',
        //     },
        //     { 
        //         path:'classes',
        //         loadChildren: 'src/app/classes/classes.module#ClassesModule',
        //     }
        // ]
    },
    { 
        path:'', component: LeftnavComponent,
        children: [
            {
            path:'student',
            loadChildren: 'src/app/student/student.module#StudentModule',
            },
            {
                path:'subject',
                loadChildren: 'src/app/subject/subject.module#SubjectModule',
            },
            {
                path:'teacher',
                loadChildren: 'src/app/teacher/teacher.module#TeacherModule',
            },
        ]

    },

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [ RouterModule ],
    declarations: [],
    providers: []
})
export class AppRoutingModule { }
