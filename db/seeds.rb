# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all

user1 = User.create(username: "Guest", password: 'password', email: 'something@gmail.com')
user2 = User.create(username: "Tony", password: 'password', email: 'tony@gmail.com', avatar: "https://s3-us-west-1.amazonaws.com/mixr-dev/cookiemonster.png")
user3 = User.create(username: "Gamer24", password: 'password', email: 'jack@gmail.com', avatar:"https://s3-us-west-1.amazonaws.com/mixr-dev/gamer24.png")
user4 = User.create(username: "Amanda", password: 'password', email: 'eeyore@gmail.com', avatar:"https://s3-us-west-1.amazonaws.com/mixr-dev/kitty.png")
user5 = User.create(username: "CandyTea", password: 'password', email: 'candy@gmail.com', avatar: "https://s3-us-west-1.amazonaws.com/mixr-dev/candycorn.jpg")
user6 = User.create(username: "Smiles", password: 'password', email: 'smiles1120@gmail.com', avatar:"https://s3-us-west-1.amazonaws.com/mixr-dev/icon2.jpg")
user7 = User.create(username: "Anon", password: 'password', email: 'reaper0@gmail.com', avatar:"https://s3-us-west-1.amazonaws.com/mixr-dev/icon2.jpg")
user8 = User.create(username: "Lunafreya", password: 'password', email: 'lunaXV0@gmail.com', avatar:"https://s3-us-west-1.amazonaws.com/mixr-dev/icon3.jpg")


Post.create(author_id: user1.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/posts/images/000/000/003/original/autumn.jpg", body:"It actually took me a fairly long time to decide on a splash image.", post_type:"photo")
Post.create(author_id: user2.id, title: "http://en.akinator.com/", body:"Spent so many hours on this site, back in the day.", post_type: "link")
Post.create(author_id: user5.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/cake.jpg", body:"First attempt at a mirror glaze! How'd I do?", post_type:"photo")
Post.create(author_id: user3.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/Footsteps+in+the+Snow+-+FFXIV.mp3", body:"Best track from the FFXIV OST, at least pre-Heavensward!", post_type:"audio")
Post.create(author_id: user5.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/Macarons.jpg", body:"Picked these up over the weekend. Sooooo good.", post_type:"photo")
Post.create(author_id: user7.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/videos/night+gif.mp4", body:"Something about this is so appealing to me right now.", post_type:"video")
Post.create(author_id: user6.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/photos/city.gif", post_type:"photo")
Post.create(author_id: user4.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/14+Sun+Skip.mp3", body:"Can't wait for her concert in August!", post_type:"audio")
Post.create(author_id: user8.id, source:"https://s3-us-west-1.amazonaws.com/mixr-dev/leaves.gif", post_type:"photo")
