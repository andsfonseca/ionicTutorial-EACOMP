import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AnotherPage } from '../anotherPage/anotherPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private data;
	private eventosAtuais;
	private temEvento;
	private gosto;
	private votou;

	programacao: Array<{data: string, eventos: Array<{nome: string, hora: string}> }>;

  	constructor(public navCtrl: NavController, private storage: Storage) {

  		var date = new Date();
  		this.data = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();

  		this.votou = false;

  		this.programacao = [
  			{data: '22/6/2017', eventos: [
  				{nome:'Minicurso 1: Aplicativos Móveis', hora:"8h30"},
  				{nome:'Minicurso 3: RoboCup', hora:"8h30"},
  				{nome:'Minicurso 5: Desenvolvimento de Jogos', hora:"8h30"},
  				{nome:'Minicurso 2: Plataforma Arduino', hora:"14h"},
  				{nome:'Minicurso 4: Aprendizado de Máquina', hora:"14h"}
  			]},
  			{data: '23/6/2017', eventos: [
  				{nome:'Minicurso 1: Aplicativos Móveis', hora:"8h30"},
  				{nome:'Minicurso 3: RoboCup', hora:"8h30"},
  				{nome:'Minicurso 5: Desenvolvimento de Jogos', hora:"8h30"},
  				{nome:'Maratona de Programação', hora:"14h"}
  			]},
  			{data: '24/6/2017', eventos: [
  				{nome:'Futebol de Computação', hora:"13h"}
  			]},
  			{data: '26/6/2017', eventos: [
  				{nome:'Abertura', hora:"14h"},
  				{nome:'Palestra IoT e IoMT', hora:"14h"},
  				{nome:'Mostra do Laboratórios', hora:"16h"},
  				{nome:'Minicurso 2: Plataforma Arduino', hora:"14h"},
  				{nome:'Minicurso 4: Aprendizado de Máquina', hora:"14h"}
  			]},
  			{data: '27/6/2017', eventos: [
  				{nome:'Sessão de Apresentação de Trabalhos', hora:"9h30"},
  				{nome:'Sessão de Apresentação de Trabalhos', hora:"14h"},
  				{nome:'Competição de APPs', hora:"16h"},
  				{nome:'Competição de Jogos', hora:"16h"},
  				{nome:'Competição Robocup', hora:"16h"},
  				{nome:'Premiação de Artigos', hora:"16h"}
  			]}
  		];

  		this.temEvento = false;
  		for (let entry of this.programacao) {
    		if(entry.data == this.data){
    			this.eventosAtuais = entry.eventos;
    			this.temEvento = true;
    		}
		}

		storage.get(this.data).then((val) => {
			if(val!=null){
	    		this.votou = true;
	    		this.gostou = val;
    		}
 		});
  	}

  	gostou(value){

  		if(value){	
  			this.gosto = true;
  		}
  		else{
  			this.gosto = false;
  		}
  		this.storage.set(this.data, this.gosto);
  	}

}
