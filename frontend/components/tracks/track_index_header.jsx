import React from 'react';
import { capitalize } from '../../util/string_utils.js';

class TrackIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let selected = document.querySelector('.selected-cat');

    if(selected && selected.innerHTML !== 'All' && selected.innerHTML !=='Recent'){
      let category = selected.innerHTML.towLowerCase();
      this.props.filterTracks(category);
    }
  }

  handleClick(category){
    this.setSelected(category);
    this.props.filterTracks(category);
    this.setHeader(category);
  }

  setHeader(category){
    let title = document.querySelector('.track-idx-title');
    if (title && category){
      let categoryName = capitalize(category);
      let display = category === 'recent' ? "Recently Added" : categoryName;
      title.innerHTML = `Browse ${display} Speeches`;
    } else{
      title.innerHTML = 'Browse Recently Added Speeches';
    }
  }

  setSelected(category){
    let li = document.querySelector('.selected-cat');
    if(li){
      li.classList.remove('selected-cat');
    }

    let id = category ? `${category}-opt` : 'all-opt';

    let toSelect = document.getElementById(id);
    toSelect.className = 'selected-cat';
  }

  render(){
    return(
      <div className='category-header'>
        <ul className='category-list'>
          <li className='selected-cat'
              onClick={this.handleClick.bind(this, "recent")}
              id='recent-opt'>
              Recent
          </li>
          <li onClick={this.handleClick.bind(this, "politics")}
              id='politics-opt'>
              Politics
          </li>
          <li onClick={this.handleClick.bind(this, "sports")}
              id='sports-opt'>
              Sports
          </li>
          <li onClick={this.handleClick.bind(this, "history")}
              id='history-opt'>
              History
          </li>
          <li onClick={this.handleClick.bind(this, "entertainment")}
              id='entertainment-opt'>
              Entertainment
          </li>
        </ul>
      </div>
    )
  }
}


export default TrackIndexHeader;
