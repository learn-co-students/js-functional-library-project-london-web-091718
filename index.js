fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {

      for (const element in array) {
        callback(array[element]);
      }
      return array
    },

    map: function(array, callback) {
      const newArray = []

      for (const element of array) {
        newArray.push(callback(element))
      }
      return newArray
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
