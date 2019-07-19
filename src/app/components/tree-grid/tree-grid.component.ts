import { Component, OnInit } from "@angular/core";
import { EditSettingsModel, ToolbarItems, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: "tree-grid",
  templateUrl: "./tree-grid.component.html",
  styleUrls: ["./tree-grid.component.scss"]
})
export class TreeGridComponent implements OnInit {
  public stages: Object[];
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  
  ngOnInit() {
    this.stages = [
      {
        id: 1,
        name: "Mission & Crew",
        isInExpandState: true,
        steps: [
          {
            id: 1,
            name: "Welcome",
          },
          {
            id: 2,
            name: "Crew Setup",
          }
        ]
      },
      {
        id: 2,
        name: "Build an E.E.V.",
        steps: [
          {
            id: 1,
            name: "E.E.V. Specs",
          },
          {
            id: 2,
            name: "Assembly",
          },
          {
            id: 3,
            name: "Report Back",
          },
          {
            id: 4,
            name: "Customize",
          },
          {
            id: 5,
            name: "Customize the E.E.V.",
          }
        ]
      },
      {
        id: 3,
        name: "Predict Speed",
        isInExpandState: true,
        steps: [
          {
            id: 1,
            name: "Speed Requirements",
          },
          {
            id: 2,
            name: "Sync E.E.V.'s",
          },
          {
            id: 3,
            name: "Prediction Test 1",
          },
          {
            id: 4,
            name: "Prediction Test 2",
          }
        ]
      },
      {
        id: 4,
        name: "Emergency Planning",
        isInExpandState: true,
        steps: [
          {
            id: 1,
            name: "TK"
          },
          {
            id: 2,
            name: "TK"
          }
        ]
      },
      {
        id: 5,
        name: "Explore the Planet",
        steps: [
          {
            id: 1,
            name: "Prepare E.E.V."
          },
          {
            id: 2,
            name: "TK"
          }
        ]
      }
    ];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
  }
}
