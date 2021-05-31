using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Meeting_Management.Startup))]
namespace Meeting_Management
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
