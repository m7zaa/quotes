// Back-end
export class TronaldDump {
  getDTQuotes() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class KanyeRest {
  getKWQuotes() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://cors-anywhere.herokuapp.com/https://api.kanye.rest`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class NumberGenerator {
  randomNumber1() {
  return Math.floor(Math.random() * 10);
  }
}

export class Player {
  getScore() {
    this.score = 0;
  }
}

export class Giphy {
  getGif(gifTag) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${gifTag}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
