using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Meeting_Management.Models;

namespace Meeting_Management.Areas.Admin.Controllers
{
    public class ListAccountController : Controller
    {
        Meeting_ManamentEntities1 db = new Meeting_ManamentEntities1();
        // GET: Admin/ListAccount
        public ActionResult Index()
        {         
            return View(db.AspNetUsers.ToList());
        }

       
    }
}