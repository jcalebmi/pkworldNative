import React from 'react';
const findEvents = (value, events) => {
  let keys;
  if (value.length > 0) {
    let copy = JSON.parse(JSON.stringify(events));
    let filter = copy.filter((event) => {
      keys = Object.keys(event);
      let doesMatch = false;
      keys.forEach((key) => {
        if (typeof event[key] === 'string') {
          if (event[key].toLowerCase().includes(value.toLowerCase())) {
            doesMatch = true;
          }
        }
      })
      return doesMatch;
    }).map((event, index) => {
      keys.forEach(key => {
        if (typeof event[key] !== 'string') {
          return;
        } else {
          const i = event[key].toLowerCase().indexOf(value.toLowerCase());
          if (i !== -1) {
            const contents = event[key].split('');
            event[key] = <span key={index}>{contents.slice(0, i)}<span className="highlight">{contents.slice(i, i+value.length)}</span>{contents.slice(i+value.length)}</span>
          }
          return;
        }
      })
      return event;
    })


    // if (search.length >= 2) {
    //   filtered = filtered.map((review, index) => {
    //     const i = review.body.toLowerCase().indexOf(search.toLowerCase());
    //     if (i !== -1) {
    //       const body = review.body.split('');
    //       review.body = <span key={index}>{body.slice(0, i)}<span id="highlight">{body.slice(i, i + search.length)}</span>{body.slice(i + search.length)} </span>;
    //     }
    //     return review;
    //   });
    // }
    return filter
  } else {
    return events;
  }
}

export default findEvents;