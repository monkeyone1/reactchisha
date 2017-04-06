import React, {Component} from 'react';
//import Item from './item';
import './main.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            bg: [],
            num:0
            
        }

    }
    handlerBg() {
        let bg=this.state.bg;
        for(let i=0;i<bg.length;i++) {
            if (bg[i].opacity<=0) {
                bg.splice(i,1);
                i--;
            } else {
                bg[i].opacity-=5;  
            }
        }
        console.log(bg);
        if(!this.state.flag&&bg.length<20){
            bg=[...bg,{
                item:this.props.str[Math.floor(Math.random() *bg.length)],
                 top:Math.floor(Math.random() * window.innerHeight),
                 left: Math.floor(Math.random() * window.innerWidth),
                 opacity:100

            }]
        
        }
        if(bg.length===0){
            clearInterval(this.bginterval);
        }
        this.setState({
            bg:bg

        });
        
    }

    handlerAction() {
        let len = this.props.str.length;
        let num = null;

        if (this.interval != null) {
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.interval = setInterval(() => {
                num = Math.floor(Math.random() * 100 % len);
                this.setState({num: num
                   });
            }, 100)
            this.bginterval=setInterval(() => {
                this.handlerBg();
            },200);

        }

        this.setState({
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <div className='bg'>
                <div className='main'>
                    <h2 style={{
                        textAlign: 'content'
                    }}>今天到底TM吃啥:{this.props.str[this.state.num]}</h2>

                    <button style={{margin:'20px'}}
                        className='btn'
                        onClick={this
                        .handlerAction
                        .bind(this)}>{this.state.flag
                            ? '开始'
                            : '停止'}
                    </button>
                </div>

                {
                 this.state.bg.map((x) => 
                     <h2 key={Math.random()} style={{
                        position:'absolute',
                        left:x.left+'px',
                         top:x.top+'px',
                         fontSize:Math.random()*50+'px',
                         opacity:x.opacity / 100
               
                     }
                        
                     }>{x.item}</h2>
                 )
                }

            </div>
        );
    }
}

export default App;

//  <Item
//                     item={this.props.str[this.state.num]}
//                     top={Math.floor(Math.random() * 700)}
//                     left={this.state.left}
//                     rgba={ Math.random().toFixed(1)}/>