import {Injectable, Inject} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {MenuItem} from "./menuItem";
import {MenuType} from "./menuTypeEnum";


@Injectable()
export class MenuService {

  private appetizers = [
    new MenuItem('OLIVES','Marinated black & green olives with crostini', 6.95),
    new MenuItem('CALAMARI FRITTI', 'Crispy fried calamari with lemon caper aioli', 14.25),
    new MenuItem('CALAMARI GRIGLIA ALLA PUTTANESCA', 'Grilled calamari, tomatoes, black olives, capers, lemon, olive oil', 14.50)
  ];

  private mainCourses = [
    new MenuItem('CHICKEN PARMIGIANA', 'Breaded chicken scallopine, pomodoro sauce, mozzarella & parmesan, served with linguini pomodoro', 21.25),
    new MenuItem('VEAL LIMONE', 'Veal scallopine, capers, lemon white wine sauce, roasted potatoes, rapini', 26.95),
    new MenuItem('SALMON', 'Seared Atlantic salmon, roasted potatoes, green beans, lemon caper aioli', 26.95)
  ];

  constructor() {
  }

  findMenuItems(type:MenuType):Observable<MenuItem[]> {
    let items:MenuItem[] = type == MenuType.Appetizer ? this.appetizers : (type==MenuType.Main ? this.mainCourses : []);
    return Observable.of(items);
  }
}
