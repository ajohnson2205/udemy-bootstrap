import React, { Component } from 'react';

import snippets from '../test.js'

class CodeRender extends Component {


  render() {

    var cat = snippets.map((snippet) => {
      return(
        <div>
          <div>
            <h1>{snippet.name}</h1>
            <div className="container">
              <blockquote class="blockquote">
    <p class="mb-0">{snippet.description}</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
            </div>
            <div className="container">
              <pre className="line-numbers language-markup">
                <code>
                  {snippet.code}
                </code>
              </pre>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: snippet.code}}></div>
          <br />
        </div>
      )
    })



    return (
      <div className='container'>
        {cat}
      </div>
    );
  }
}

export default CodeRender;
