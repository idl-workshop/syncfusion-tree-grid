import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';

import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { ToolbarService, EditService } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';


// import { RTEComponent } from './rich-text-editor/rich-text-editor.component';
// import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// Imported Syncfusion RichTextEditorModule from richtexteditor package
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TreeGridModule,
//        RichTextEditorAllModule,
        RichTextEditorModule,
        ButtonModule,
        DropDownListAllModule
    ],
    declarations: [
        TreeGridComponent
//        RTEComponent,
    ],
    providers: [
        EditService,
        ToolbarService
    ],
    exports: [
        TreeGridComponent
//        RTEComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
