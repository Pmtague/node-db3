# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76(77, actually) records.
SELECT p.productname, c.categoryname
FROM [Products] as p
Left JOIN [Categories] as c
ON p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.orderid, s.shippername
FROM [Orders] as o
JOIN [Shippers] as s
ON o.shipperid = s.shipperid
WHERE o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT p.productname, od.quantity 
FROM [OrderDetails] as od
JOIN [Products] as p
ON p.productid = od.productid
WHERE od.orderid = '10251'
ORDER BY p.productname asc

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.orderid, c.customername, e.lastname as Employee
FROM [Orders] as o
JOIN [Customers] as c
ON o.customerid = c.customerid
JOIN [Employees] as e
ON o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 