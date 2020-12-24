import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  identifiant:number;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.identifiant=this.activatedRoute.snapshot.params["idf"];
  }

}
