-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- shopping_list
CREATE TABLE "list"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" FLOAT(8) 
);
-- GET
SELECT * FROM "list";

-- POST
INSERT INTO "list" ("name", "quantity")
VALUES ('bacon', 5.5), ('eggs', 2), ('shoes', 5);