import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { MenuItem } from '../shared/model/menuItem';
import { MenuService } from '../shared/model/menu.service';
import { MenuType } from '../shared/model/menuTypeEnum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appetizers$: Observable<MenuItem[]>;
  mains$: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.appetizers$ = this.menuService.findMenuItems(MenuType.Appetizer);
    this.mains$ = this.menuService.findMenuItems(MenuType.Main);
  }

}
