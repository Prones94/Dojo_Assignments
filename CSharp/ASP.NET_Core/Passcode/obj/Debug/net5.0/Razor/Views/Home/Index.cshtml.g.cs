#pragma checksum "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/Home/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "441efc102c6cd340fd76ab3e05f3d883f84b4faa"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/_ViewImports.cshtml"
using Passcode;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/_ViewImports.cshtml"
using Passcode.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"441efc102c6cd340fd76ab3e05f3d883f84b4faa", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"40a72012c55048ca6fdfa163b1e87e2c83470655", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/Home/Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Random Passcode Generator</h1>\r\n    <h3>Passcode # ");
#nullable restore
#line 7 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/Home/Index.cshtml"
              Write(ViewBag.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n</div>\r\n<div class=\"jumbotron text-center\">\r\n    <h2>");
#nullable restore
#line 10 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Passcode/Views/Home/Index.cshtml"
   Write(ViewBag.Passcode);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h2>
    <br>
    <div class=""btn-group"" role=""group"" aria-label=""Generate passcode and go back"">
        <a href=""/Home/generate"" class=""btn btn-success"">Generate Passcode</a>
        <a href=""/Home/reset"" class=""btn bt-danger"">Reset</a>
    </div>
</div>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591