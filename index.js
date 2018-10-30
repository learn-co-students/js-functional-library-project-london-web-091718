fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      for (const item in collection) {
        func(collection[item])
      }
      return collection
    },

    map: function(collection, func) {
      const result = []
      for (const i in collection) {
        result.push(func(collection[i]))
      }
      return result
    },

    reduce: function(collection, callback, acc) {
      let accu = acc == undefined ? 0 : acc
      for (const i in collection) {
        accu = callback(accu, collection[i], collection)
      }
      return accu
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
