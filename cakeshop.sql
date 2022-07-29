create database cakeshop;
use cakeshop;

CREATE TABLE `customer` (
  `cid` varchar(10) PRIMARY KEY AUTO_INCREMENT,
  `cname` varchar(20),
  `cphone` int,
  `email` varchar(30)
);

CREATE TABLE `Admin` (
  `id` varchar(50) PRIMARY KEY,
  `name` varchar(50),
  `password` varchar(50)
);

CREATE TABLE `order_items` (
  `order_id` int,
  `product_id` int,
  `quantity` int DEFAULT 1
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `cid` int,
  `cname` varchar(20),
  `cphone` int,
  `address` varchar(100),
  `price` float8,
  `email` varchar(30),
  `date` datetime DEFAULT (now()),
  `status` varchar(255),
  `created_at` varchar(255) COMMENT 'When order created'
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `pname` varchar(255),
  `merchant_id` int NOT NULL,
  `price` float8,
  `status` ENUM ('out_of_stock', 'in_stock', 'running_low'),
  `created_at` datetime DEFAULT (now())
);

CREATE INDEX `product_status` ON `products` (`merchant_id`, `status`);

CREATE UNIQUE INDEX `products_index_1` ON `products` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);

ALTER TABLE `orders` ADD FOREIGN KEY (`cname`) REFERENCES `customer` (`cname`);

ALTER TABLE `orders` ADD FOREIGN KEY (`cphone`) REFERENCES `customer` (`cphone`);

ALTER TABLE `orders` ADD FOREIGN KEY (`price`) REFERENCES `products` (`price`);

ALTER TABLE `orders` ADD FOREIGN KEY (`email`) REFERENCES `customer` (`email`);
