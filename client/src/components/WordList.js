import React, {Component} from 'react';
class WordList extends Component {
render(){
    var answers= this.props.answers;
    console.log("ans",answers);
    return(
    <div>
        <h3>Find the words</h3>
        {/*TODO: FIX ME IN A BOX*/}
        <ul className="list-group">
        {
        answers.map((answer) => {
        if(answer.isFound) {
        return(
        //TODO: APPLY DEL TAG ONLY IF FOUND
        <li className="list-group-item active" key={answer.value}><del>{ answer.value }</del></li>
        );
        } else {
        return <li className="list-group-item active" key={answer.value}>{ answer.value }</li>
        }
        })
        }
        </ul>
       
        </div>);
}

}
export default WordList;