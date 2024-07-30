<<<<<<< HEAD
﻿using DemoProject.Model;

namespace DemoProject.Interface
{
    public interface IProductServices
    {
        Task<IEnumerable<Products>> GetAllProducts();
        Task<Products> GetProductById(int id);
        Task AddProduct(Products product);
        Task<bool> UpdateProduct(int id, Products product);
        Task<bool> DeleteProduct(int id);
    }
}
=======
﻿using DemoProject.Model;

namespace DemoProject.Interface
{
    public interface IProductServices
    {
        Task<IEnumerable<Products>> GetAllProducts();
        Task<Products> GetProductById(int id);
        Task AddProduct(Products product);
        Task<bool> UpdateProduct(int id, Products product);
        Task<bool> DeleteProduct(int id);
    }
}
>>>>>>> 0a2cd04 (add files)
