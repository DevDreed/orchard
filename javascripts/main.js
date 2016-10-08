"use strict";

const outputDiv = $('#output');
let interval = null;
let counter = 1;

function Plant() {
  this.height = 0;
}

function Tree() {
  this.branches = 0;
}

Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function(growth){
  for (let i = 0; i < growth; i++) {
    this.height += 1;
    if (this.height%10 === 0) {
      this.branches++;
    }
  }
};

Plant.prototype.decreaseHeight = function(growth){
  this.height -= growth;
};

Tree.prototype.grow = function (amount) {
  this.increaseHeight(amount);
};

Tree.prototype.trim = function (amount) {
  this.decreaseHeight(amount);
  this.branches-=1;
};

let PearTree = new Tree();

let OakTree = new Tree();

console.log("PearTree",PearTree);

interval = setInterval(function () {
  PearTree.grow(2);
  OakTree.grow(3);

  let output = `<p> counter ${counter}</p>`;
  output += `<p>PearTree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.</p>`;
  output += `<p>OakTree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;

  outputDiv.append(output);

  if(counter % 10 === 0){
    PearTree.trim(3);
    OakTree.trim(5);
  }

  counter++;

  if(counter > 30){
    clearInterval(interval);
    console.log("finished");
  }
}, 1000);
