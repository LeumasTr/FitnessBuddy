import React, { Component } from 'react';
import '../styles.css';

export default function Home() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>Build those Wings to Fly!</h1>
          <div id = 'main'>
            <div id ='exerciseBox'>
              <h3>Seated Cable Row</h3>
              <h4>Sets: 4 Reps: 10</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Lat Pulldown</h3>
              <h4>Sets: 4 Reps: 15, 12, 10, 8</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Plate Loaded Rows</h3>
              <h4>Sets: 3 Reps: 12-15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Single Arm Plate Loaded Rows</h3>
              <h4>Sets: 4 Reps: 12</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Lat Pulldown Machine/Assisted Pull Ups</h3>
              <h4>Sets: 4 Reps: 15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
}

