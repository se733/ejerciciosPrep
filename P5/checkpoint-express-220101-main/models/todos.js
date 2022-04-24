"use strict";

/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  },
  listPeople: function () {
    let newArr = [];
    for (let key in tasks) {
      newArr.push(key);
    }
    return newArr;
  },
  add: function (name, task) {
    let ac = 0;
    for (let key in tasks) {
      if (key == name) {
        tasks[name].push(task);
        if (!task.complete) {
          task.complete = false;
          ac++;
        }
      }
    }
    if (ac == 0) tasks[name] = [task];
    if (!task.complete) {
      task.complete = false;
    }
  },
  list: function (name) {
    return tasks[name];
  },
  complete: function (name, num) {
    let people = this.listPeople();
    if (people.includes(name)) {
      if (tasks[name][num].complete == false) {
        tasks[name][num].complete = true;
      }
    }
  },
  remove: function (name, num) {
    let people = this.listPeople();
    if (people.includes(name)) {
      tasks[name].splice(num, 1);
    }
  },
};

let task = {};
task.complete = false;
console.log(task);