const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title, imageUrl, description) {
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
    }
};