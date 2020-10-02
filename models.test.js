/* eslint-disable no-undef */
const db = require('./db')
const { Restaurant, Menu, Item } = require('./models')



describe('Restaurant', () => {
  beforeAll((done)=> {
    db.exec('CREATE TABLE restaurants (id INTEGER PRIMARY KEY, name TEXT, image TEXT, city TEXT)',done)
  })
  test('Restaurant is created it is addedto database ', async () =>{
    const restaurant = await new Restaurant({ name: 'Tajmahal', image: 'image.url ', city: 'UK' })
    expect(restaurant.id).toBe(1)
  
  })
  
  test('Create resaurant for the data row',async () => {
    db.get('SELECT * FROM restaurants where id=1', (err,row)=>{
      expect(row.name).toBe('Tajmahal')
    })
    
  })
})




describe('Menu', () => {
  beforeAll((done)=> {
    db.exec('CREATE TABLE menus (id INTEGER PRIMARY KEY, title TEXT, icon TEXT)',done)
  })
  test('Menu is created it is added to database ', async () =>{
    const menu = await new Menu({ title: 'Starters', icon: 'image.url ' })
    expect(menu.id).toBe(1)
  
  })
  test('Create menu for the data row',async () => {
    db.get('SELECT * FROM menus where id=1', (err,row)=>{
      expect(row.title).toBe('Starters')
    })
    
  })
})




describe('Item', () => {
  beforeAll((done)=> {
    db.exec('CREATE TABLE items (id INTEGER PRIMARY KEY, name TEXT, price FLOAT)',done)
  })
  test('Item is created it is added to database ', async () =>{
    const item = await new Item({ name: 'Gochujang Chiken', price: 25 })
    expect(item.id).toBe(1)
  
  })
  test('Create item for the data row',async () => {
    db.get('SELECT * FROM items where id=1', (err,row)=>{
      expect(row.name).toBe('Gochujang Chiken')
      expect(row.price).toBe(25)


    })
    
  })
})