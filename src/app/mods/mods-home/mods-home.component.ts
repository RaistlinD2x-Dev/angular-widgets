import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'because it is...' },
    { title: 'What does an orange taste like?', content: 'It tastes like an orange.' },
    { title: 'What color is the cat?', content: 'The cat is orange.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen
  }

}
