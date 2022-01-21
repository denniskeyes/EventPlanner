# EventPlanner
 
Setting up dev environment:

1. npm install
2. Open SQL Server Management Studio, create a new database called "AppDatabase" (can desired name in appsettings.json)
3. In CLI, run the following:
     dotnet ef migrations add InitialDb
     dotnet ef database update
4. Debug (F5) in Visual Studio to launch dev server and browser
