# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'KyloRen', password: 'password', description: "Kylo Ren is a fictional character in the Star Wars franchise. Introduced in the 2015 film Star Wars: The Force Awakens, he is portrayed by Adam Driver. Kylo Ren is the nom de guerre of Ben Solo,[1][2] the son of original Star Wars trilogy characters Han Solo and Leia Organa. Though trained by his uncle Luke Skywalker as a Jedi, he has been seduced to the dark side of the Force by Supreme Leader Snoke, and aspires to be as powerful as his grandfather, Darth Vader." )
User.create(username: 'Darth Vader', password: 'password', description: "I joined Speechify to get inspired for my speeches in front for the empire. Looking to connect with fellow toast masters!" )
User.create(username: 'DemoUser', password: 'password', description: "Welcome to Speechify! Use your Bio to tell a little bit about yourself, and connect with other users who have similar interests!" )
User.create(username: 'me', password: 'pass', description: "Welcome to Speechify! Use your Bio to tell a little bit about yourself, and connect with other users who have similar interests!" )


Track.create(title: 'Miracle on Ice Speech', artist: 'Herb Brooks', user_id: 3)
Track.create(title: 'Gettysburg Address', artist: 'Abraham Lincoln', user_id: 3)
Track.create(title: 'Prom Speeech', artist: 'Cady Heron', user_id: 4)
