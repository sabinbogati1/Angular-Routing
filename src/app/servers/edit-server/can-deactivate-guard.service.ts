import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRoute, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate{

    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRoute,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return component.canDeactivate();
    }
}