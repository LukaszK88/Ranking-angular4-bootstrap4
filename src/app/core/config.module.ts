import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({})
export class ConfigModule {}

export const categories = [
    {name:'21vs21'},
    {name:'16vs16'},
    {name:'5vs5'},
    {name:'Profight'},
    {name:'Sword&Shield'},
    {name:'Sword&Buckler'},
    {name:'Longsword'},
    {name:'Polearm'},
    {name:'Triathlon'}
];   

export const apiBase = 'http://whitecompany.com/api/';