import {Component} from '@angular/core'
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
@Component({
 selector:'safety-child-status',
  templateUrl:'./safety-child-status.component.html',
  styleUrls:['./safety-child-status.component.css']
})
export class SafetyChildStatusComponent{
   private items: MenuItem[];
//!important
    ngOnInit() {
        this.items = [
            {
                label:'信息总览',items:[]
            },
            {
                label:'儿童管理',
                items:[
                    {
                        label:'位置规划'
                    },
                    {
                         label:'路径查询',
                    },
                    {
                         label:'账户管理'
                    }
                   ]
            }
        ];
    }
}
