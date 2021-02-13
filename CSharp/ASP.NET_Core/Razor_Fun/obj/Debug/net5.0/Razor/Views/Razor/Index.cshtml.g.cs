#pragma checksum "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dff8a1326cc6d0542d0801ca1b1c3a578eb3b6ae"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Razor_Index), @"mvc.1.0.view", @"/Views/Razor/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dff8a1326cc6d0542d0801ca1b1c3a578eb3b6ae", @"/Views/Razor/Index.cshtml")]
    public class Views_Razor_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\n<html lang=\"en\">\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dff8a1326cc6d0542d0801ca1b1c3a578eb3b6ae2700", async() => {
                WriteLiteral(@"
  <meta charset=""UTF-8"">
  <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"">
  <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
  <title>Razor Fun</title>
  <style>
    .red {
      color: red;
    }
    .push {
      margin-left:20px;
    }
  </style>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dff8a1326cc6d0542d0801ca1b1c3a578eb3b6ae3937", async() => {
                WriteLiteral("\n  <div class=\"main\">\n    <h1>Here are some delicious foods!</h1>\n");
#nullable restore
#line 20 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml"
    
    var FoodList = new string[]{
        "Apple Pie",
        "Burritos",
        "Clam Casino",
        "Donuts",
        "Clams",
        "Cake",
        "Oatmeal"
    };
      Array.Sort(FoodList); // Sorts the list into alphabetical Order
      foreach(string food in FoodList)
      {
        if(food.StartsWith("C"))
        {

#line default
#line hidden
#nullable disable
                WriteLiteral("          <p class=\"red push\">");
#nullable restore
#line 35 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml"
                         Write(food);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\n");
#nullable restore
#line 36 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml"
        }
        else
        {

#line default
#line hidden
#nullable disable
                WriteLiteral("          <p class=\"push\">");
#nullable restore
#line 39 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml"
                     Write(food);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\n");
#nullable restore
#line 40 "/Users/admin/Desktop/Coding/Coding Dojo/BootCamp/CSharp/ASP.NET_Core/Razor_Fun/Views/Razor/Index.cshtml"
        }
      }
  

#line default
#line hidden
#nullable disable
                WriteLiteral("\n  </div>\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\n</html>");
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