import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { CountWidgetStyles } from 'ngvs-stepper';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  public arr = [
    { id: 1, name: 'task 1', urgency: 'yes', importance: 'yes' },
    { id: 2, name: 'task 2', urgency: 'no', importance: 'yes' },
    { id: 3, name: 'task 3', urgency: 'no', importance: 'no' },
    { id: 4, name: 'task 4', urgency: 'yes', importance: 'yes' },
    { id: 5, name: 'task 5', urgency: 'yes', importance: 'no' },
    { id: 6, name: 'task 5', urgency: 'yes', importance: 'yes' },
    { id: 7, name: 'task 5', urgency: 'no', importance: 'no' },
    { id: 8, name: 'task 5', urgency: 'yes', importance: 'no' },
    { id: 9, name: 'task 5', urgency: 'no', importance: 'no' },
  ];

  public do: any;
  public schedule: any;
  public delegate: any;
  public delete: any;
  public board: Board;
  public myStyle: CountWidgetStyles;

  constructor() {
    this.do = this.arr.filter(
      (a) => a.urgency == 'yes' && a.importance == 'yes'
    );
    this.schedule = this.arr.filter(
      (a) => a.urgency == 'no' && a.importance == 'yes'
    );
    this.delegate = this.arr.filter(
      (a) => a.urgency == 'yes' && a.importance == 'no'
    );
    this.delete = this.arr.filter(
      (a) => a.urgency == 'no' && a.importance == 'no'
    );
    console.log(this.do);

    this.board = new Board('Priorities', [
      new Column('Do First', this.do),
      new Column('Schedule', this.schedule),
      new Column('Delegate', this.delegate),
      new Column('Delete', this.delete),
    ]);

    this.myStyle = {
      colors: {
        default: 'red',
        background: 'gray',
        active: 'blue',
        activeBg: 'white',
        completed: 'black',
        completedBg: 'white',
      },
      shape: 'circle',
      orientation: '',
    };
  }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
