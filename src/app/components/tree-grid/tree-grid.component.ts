import { Component, OnInit } from "@angular/core";
// THIS WAS COMMENTED OUT BECAUSE COMMANDMODEL NOT FOUND
// import { EditSettingsModel, ToolbarItems, CommandModel } from '@syncfusion/ej2-angular-treegrid';
import { EditSettingsModel, ToolbarItems} from '@syncfusion/ej2-angular-treegrid';


@Component({
  selector: "tree-grid",
  templateUrl: "./tree-grid.component.html",
  styleUrls: ["./tree-grid.component.scss"]
})
export class TreeGridComponent implements OnInit {
  public stages: Object[];
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  // public commands: CommandModel;

  ngOnInit() {
    this.stages = [
      {
        id: 1,
        name: "Mission & Crew",
        isInExpandState: true,
        moveUpDown:"<button>Up</button><button>Down</button>",
        steps: [
          {
            id: 1,
            name: "Welcome",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 2,
            name: "Crew Setup",
            moveUpDown:"<button>Up</button><button>Down</button>"
          }
        ]
      },
      {
        id: 2,
        name: "Build an E.E.V.",
        moveUpDown:"<button>Up</button><button>Down</button>",
        steps: [
          {
            id: 1,
            name: "E.E.V. Specs",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 2,
            name: "Assembly",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 3,
            name: "Report Back",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 4,
            name: "Customize",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 5,
            name: "Customize the E.E.V.",
            moveUpDown:"<button>Up</button><button>Down</button>"
          }
        ]
      },
      {
        id: 3,
        name: "Predict Speed",
        isInExpandState: true,
        moveUpDown:"<button>Up</button><button>Down</button>",
        steps: [
          {
            id: 1,
            name: "Speed Requirements",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 2,
            name: "Sync E.E.V.'s",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 3,
            name: "Prediction Test 1",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 4,
            name: "Prediction Test 2",
            moveUpDown:"<button>Up</button><button>Down</button>"
          }
        ]
      },
      {
        id: 4,
        name: "Emergency Planning",
        isInExpandState: true,
        moveUpDown:"<button>Up</button><button>Down</button>",
        steps: [
          {
            id: 1,
            name: "TK",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 2,
            name: "TK",
            moveUpDown:"<button>Up</button><button>Down</button>"
          }
        ]
      },
      {
        id: 5,
        name: "Explore the Planet",
        moveUpDown:"<button>Up</button><button>Down</button>",
        steps: [
          {
            id: 1,
            name: "Prepare E.E.V.",
            moveUpDown:"<button>Up</button><button>Down</button>"
          },
          {
            id: 2,
            name: "TK",
            moveUpDown:"<button>Up</button><button>Down</button>"
          }
        ]
      }
    ];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
  }
}
