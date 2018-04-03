import React from 'react';
import ReactDOM from 'react-dom';

export class CheckBoxes extends React.Component{
  render(){
    return(
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Gallery Selection</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option selected>Select from Dropdown</option>
          <option>Pikachu</option>
          <option>Mini-Me</option>
          <option>Flamingo</option>
          <option>Baby Hat</option>
          <option>Baymax</option>
          <option>Fairy</option>
          <option>Unicorn</option>
          <option>Baby Skates</option>
          <option>Pup-Alike</option>
          <option>Mimikyu</option>
          <option>Eleven</option>
          <option>Igglybuff</option>
          <option>Jigglypuff</option>
          <option>Wigglytuff</option>
        </select>
      </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Custom Order</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Please provide a detailed description of what you would like"></textarea>
        </div>
        <div className="formBottom">
          <div class="form-group">
            <label for="exampleInputFile">For Look-Alike Orders</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" class="form-text text-muted">Please select an image with a clear view of the subject for the look-alike</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </div>
  </form>
  )
  }
}
