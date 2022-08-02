CREATE TABLE "order_table" (
  "id" SERIAL PRIMARY KEY,
  "user_full_name" varchar,
  "user_full_address" varchar,
  "user_phone" varchar,
  "item_name" varchar,
  "item_price" varchar,
  "item_quantity" varchar,
  "order_date" varchar
);


CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `pname` varchar(255),
  `price` float8,
  `status` ENUM ('out_of_stock', 'in_stock', 'running_low'),
  `created_at` datetime DEFAULT (now())
);
