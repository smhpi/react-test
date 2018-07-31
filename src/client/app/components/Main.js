import React from 'react';
import API from '../lib/API';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
    return { links: LinkStore.getAll()}
}

export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount(){
        API.fetchLink();
        LinkStore.on("change" , this.onChange)
    }

    componentWillMount(){
        LinkStore.removeAllListeners("change", this.onChange);
    }

    onChange() {
        console.log("4- in the view");
        this.setState(_getAppState());
    }
    
    render(){
        let content = this.state.links.map(link =>{
            return <li key = {link.id}>
                        <a href = "#">{link.title} </a>
                    </li>;
        });  
        return(
            <div>
                <h3>Links</h3>
                <ul>
                    <li>{content}</li>
                </ul>   
            </div>
        )
    }
}