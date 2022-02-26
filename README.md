# EventPlanner
 
Event Planner with Angular 8 front-end, .NET 5 with ASP.NET Core Web API and Entity Framework back-end

Setting up dev environment:

1. npm install
2. Open SQL Server Management Studio, create a new database called "AppDatabase" (can desired name in appsettings.json)
3. In CLI, run the following:
     <br />
         dotnet ef migrations add InitialDb
     <br />
         dotnet ef database update
4. Run the sql script EventPlanner_SampleDbData located in the project root to populate the database with sample events
5. Debug (F5) in Visual Studio to launch dev server and browser
