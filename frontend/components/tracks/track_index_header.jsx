import React from 'react';

class TrackIndexHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(category){
    this.setSelected(category);
    this.props.filterTracks(category);
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
              onClick={this.handleClick.bind(this, "")}
              id='all-opt'>
              All
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
