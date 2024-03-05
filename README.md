# E-Commerce Back End Application

## Description

Back end for an e-commerce site using  Express.js API and Sequelize to interact with a MySQL database.



A functional Express.js API that connects to a database using Sequelize. Ater schema and seed commands are run, a development database is created and is seeded with test data. Using 'npm start' my server is started and the Sequelize models are synced to the MySQL database. Then API GET routes are opened in Insomnia for categories, products, or tags. Then the data for each of these routes is displayed in a formatted JSON and userscan  successfully create, update, and delete data in  database.


## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Links

[App Walkthrough](https://drive.google.com/file/d/1GPIuimN43QwYC40XsssJgxsPA8uS0woi/view)

[Github Repository](https://github.com/kalynsifuentez/e-commerce-back-end.git)

## Credits

- Tutor: Jose Lopez
- Student Collaboration: Martin Harvey
- Online: Thomas Calle

## Resources

 [MySQL2](https://www.npmjs.com/package/mysql2)

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database

[dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.
