const db = require('./db')

class Restaurant {
  constructor (data){
    const restaurant = this
    restaurant.id = data.id ,
    restaurant.name = data.name,
    restaurant.image = data.image
    restaurant.city = data.city 
    restaurant.menus = []

    if (this.id ){
      return Promise.resolve(restaurant)
    } else {
      return new Promise((resolve, reject)=> {


        db.run('INSERT INTO restaurants(name, image, city) values(?,?,?);',[ restaurant.name,restaurant.image],
          function(err){
            if (err) return reject(err)
            restaurant.id = this.lastID
            return resolve(restaurant)

          })
      })
      
    }
      
  }
  addMenu(menu){
    this.menus.push(menu)
          
  }
  
}

class Menu {
  constructor (data){
    const menu = this
    menu.id = data.id ,
    menu.title = data.title,
    menu.icon = data.icon,
    menu.item = []

    

  
    if (this.id ){
      return Promise.resolve(menu)
    } else {
      return new Promise((resolve, reject)=> {
  
  
        db.run('INSERT INTO menus (title,icon) values(?,?);',[ menu.title,menu.icon],
          function(err){
            if (err) return reject(err)
            menu.id = this.lastID
            return resolve(menu)
  
          })
      })
        
    }
  }
  addItems(item){
    this.item.push(item)
        
  }
}

class Item {
  constructor (data){
    const item = this
    item.id = data.id ,
    item.name = data.name,
    item.price = data.price
    
    if (this.id ){
      return Promise.resolve(item)
    } else {
      return new Promise((resolve, reject)=> {
    
    
        db.run('INSERT INTO items (name,price) values(?,?);',[ item.name,item.price],
          function(err){
            if (err) return reject(err)
            item.id = this.lastID
            return resolve(item)
    
          })
      })
          
    }
  }
}


   



module.exports = { Restaurant,Menu, Item }  