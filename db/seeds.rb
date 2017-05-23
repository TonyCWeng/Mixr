# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all


User.create(username: "Guest", password: 'password', email: 'something@gmail.com')
User.create(username: "Tony", password: 'password', email: 'tony@gmail.com')
User.create(username: "Jack", password: 'password', email: 'jack@gmail.com')
User.create(username: "Joyce", password: 'password', email: 'sweets@gmail.com')
User.create(username: "Amanda", password: 'password', email: 'armads@gmail.com')

text = Post.create(author_id: 1, title: "google.com", body: "Moon.", post_type: "link")
