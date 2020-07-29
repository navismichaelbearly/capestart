import React from 'react';

class Books extends React.Component {
  constructor() {
        super()
        this.state = {
            book_list: []
        }
    }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/book_list')
    .then(response =>  response.json())
    .then(resData => {
      console.log("bearly");
      console.log(JSON.stringify(resData))
       //console.log(JSON.stringify(resData))
       //do your logic here
       //let person = resData.results
       this.setState({ book_list: resData.results }); //this is an asynchronous function
    })
  }

  render() {
    return(
      <div>
        {this.state.book_list.map((bookRecord) => {
            return ( <div>
              <div> {bookRecord.title} </div>
              <div> {bookRecord.desc} </div>
              <div> {bookRecord.price} </div>
              <div> {bookRecord.published_on} </div>
            </div>);
        })}
    </div>)
  }
}

export default Books;
