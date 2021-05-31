import React from 'react';
const findUsers = (value, users, location) => {
  let keys;
  const copy = JSON.parse(JSON.stringify(users));
  let filter = copy;
  if (value.length > 0) {
    filter = filter.filter((user) => {
      keys = Object.keys(user);
      let doesMatch = false;
      keys.forEach((key) => {
        if (typeof user[key] === 'string') {
          if (user[key].toLowerCase().includes(value.toLowerCase())) {
            doesMatch = true;
          }
        }
      })
      return doesMatch;
    }).map((user, index) => {
      keys.forEach(key => {
        if (typeof user[key] !== 'string') {
          return;
        } else {
          const i = user[key].toLowerCase().indexOf(value.toLowerCase());
          if (i !== -1) {
            const contents = user[key].split('');
            user[key] = <span key={index}>{contents.slice(0, i)}<span className="highlight">{contents.slice(i, i+value.length)}</span>{contents.slice(i+value.length)}</span>
          }
          return;
        }
      })
      return user;
    })
  }
  // filter.sort((a, b) => {
  //   const distanceA = Math.sqrt(((a.lat - location.lat) ** 2) + ((a.lng - location.lng) ** 2) );
  //   const distanceB = Math.sqrt(((b.lat - location.lat) ** 2) + ((b.lng - location.lng) ** 2) );
  //   if (distanceA < distanceB) {
  //     return -1;
  //   }
  //   if (distanceA > distanceB) {
  //     return 1;
  //   }
  //   return 0;
  // })
  return filter;
}

export default findUsers;