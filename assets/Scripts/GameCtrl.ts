import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';

@ccclass('GameCtrl')
export class GameCtrl extends Component {


    @property({
        type:Ground,
        tooltip:'this is ground'
    })
    public ground:Ground

    @property({
        type:CCInteger
    })
    public speed:number=300;

    @property({
        type:CCInteger
    })
    public pipeSpeed:number=200;

    onLoad(){

    }

    initListener(){

    }

    startGame(){
        
    }

}


