import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

// [disabled]="loading"
@Component({
  selector: 'ga-to-button',
  template: `
  <button (click)="Click()" #button id="button" class="cssButton" [disabled]="loading || disabled"
    [ngClass]="{'disabled': loading || disabled}">
    <div class='text'>
      <div *ngIf="loading" [ngClass]="{'button-indicator': texto.length > 0}">
        <i class="fas fa-sync-alt fa-pulse"></i>
      </div>
      <div *ngIf="!loading && icon.length > 0" [ngClass]="{'button-indicator': texto.length > 0}">
        <i [class]="icon"></i>
      </div>
      <span>{{texto}}</span>
    </div>
  </button>
  `,
  styles: [
    `
    .cssButton {
      display: block;
      border: 1px solid black;
      margin: 5px;
      padding: 5px;
      width: max-content;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 14px;
      font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, Verdana, sans-serif;
      cursor: pointer;
      background-color: transparent;
      border-color: #2d6da3;
      color: #2d6da3;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
    }

    .cssButton:hover {
      background-color: rgba(45,109,163,0.1);
    }

    .cssButton .text {
      text-align: center;
      padding: 1px 6px 1px;
    }
    .button-indicator {
      float: left;
      margin-right: 5px;
      position: relative;
      padding:0;
    }

    .disabled {
      opacity: 0.5;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      zoom: 1;
      cursor: default;
    }
    `
  ]
})
export class ButtonComponent implements OnInit {

  @Input() texto: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() width = 0;

  loading = false;
  @Output() accion = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    console.log(this.width);
    if (this.width > 0) {
      this.AgregarWidth();
    }
  }

  Click() {
    this.loading = true;
    $('#button').addClass('disabled');
    this.accion.emit();
  }

  Finalizo() {
    this.loading = false;
    $('#button').removeClass('disabled');
  }

  AgregarWidth() {
    console.log(this.width, $('#button'));
    $('#button').css('min-width', this.width);
  }
}
